import mongoose from 'mongoose';
import dns from 'dns';

// Fix for Windows / Node.js querySrv ECONNREFUSED by resolving through Google / Cloudflare DNS
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  // Ignore DNS config errors in serverless environments
}

// Global cached connection for serverless execution
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MONGODB_URI is not defined in environment variables.');
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 8000,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      console.log(`✅ MongoDB Atlas Connected: ${mongooseInstance.connection.host} (DB: ${mongooseInstance.connection.name})`);
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error(`⚠️ MongoDB Atlas Connection Error: ${error.message}`);
    return null;
  }
}

