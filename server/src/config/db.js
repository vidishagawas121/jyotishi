import mongoose from 'mongoose';
import dns from 'dns';

// Fix for Windows / Node.js querySrv ECONNREFUSED by resolving through Google / Cloudflare DNS
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  console.warn('Could not set custom DNS servers:', e);
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MONGODB_URI is not defined in environment variables.');
    return null;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
    });

    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host} (DB: ${conn.connection.name})`);
    
    mongoose.connection.on('error', (err) => {
      console.error(`❌ MongoDB connection runtime error:`, err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB connection lost. Attempting reconnect...');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✅ MongoDB connection restored.');
    });

    return conn;
  } catch (error) {
    console.error(`⚠️ MongoDB Atlas Connection Note: ${error.message}`);
    console.warn(`👉 The server is running and ready. Ensure your IP address is whitelisted in MongoDB Atlas Network Access (0.0.0.0/0).`);
    return null;
  }
}
