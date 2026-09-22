import dns from 'dns';

// Configure public DNS resolution for MongoDB Atlas SRV records
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1']);
} catch (e) {
  console.warn('DNS server configuration note:', e);
}

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';

// Setup dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load server environment variables (.env in server or workspace root)
const serverEnv = path.join(__dirname, '../.env');
const rootEnv = path.join(__dirname, '../../.env');
if (fs.existsSync(serverEnv)) {
  dotenv.config({ path: serverEnv });
} else if (fs.existsSync(rootEnv)) {
  dotenv.config({ path: rootEnv });
} else {
  dotenv.config();
}

const app = express();
// Load port strictly from environment (.env or system PORT), fallback to 5000 if not specified
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Connect to MongoDB Atlas
connectDB();

// CORS configuration (allow all origins, credentials, and standard methods)
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  })
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Database connection middleware for serverless requests (must be before routes)
app.use(async (req, res, next) => {
  try {
    await connectDB();
  } catch (err) {
    console.warn('DB connect middleware error:', err);
  }
  next();
});

// Health check endpoint
app.get(['/api/health', '/health'], async (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({
    status: 'ok',
    service: 'Sangam Jyotish Sansthan Backend API',
    database: isConnected ? 'Connected (MongoDB Atlas)' : 'Connecting / Disconnected',
    readyState: mongoose.connection.readyState,
    hasMongoUri: Boolean(process.env.MONGODB_URI),
    timestamp: new Date().toISOString(),
  });
});

// API Routes (support both /api/enquiries and rewritten /enquiries)
app.use('/api/enquiries', enquiryRoutes);
app.use('/enquiries', enquiryRoutes);

// In production, serve frontend client build if client/dist exists
const clientDistPath = path.join(__dirname, '../../client/dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api') || req.originalUrl.startsWith('/enquiries')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  // Root fallback when running API-only
  app.get('/', (req, res) => {
    res.send('🕉️ संगम ज्योतिष संस्थान (Sangam Jyotish Sansthan) API Server is running.');
  });
}

// 404 Handler for unhandled API routes
app.use(['/api/*', '/enquiries/*'], (req, res) => {
  res.status(404).json({
    success: false,
    message: `API मार्ग नहीं मिला (API route not found: ${req.originalUrl})`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server Unhandled Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'आंतरिक सर्वर त्रुटि (Internal Server Error): ' + err.message
      : err.message || 'आंतरिक सर्वर त्रुटि',
  });
});

// Start listening only when not in serverless (e.g., local dev or persistent container)
if (!process.env.VERCEL) {
  const server = app.listen(PORT, () => {
    console.log(`\n🕉️ =================================================`);
    console.log(`🕉️ Sangam Jyotish API Server running on port ${PORT}`);
    console.log(`🕉️ Local: http://localhost:${PORT}`);
    console.log(`🕉️ Health: http://localhost:${PORT}/api/health`);
    console.log(`🕉️ Enquiries API: http://localhost:${PORT}/api/enquiries`);
    console.log(`🕉️ =================================================\n`);
  });

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\nStopping server...');
    server.close(() => {
      console.log('Server terminated gracefully.');
      process.exit(0);
    });
  });
}

export default app;

