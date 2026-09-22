import dns from 'dns';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

// Set custom DNS
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1']);

const uri = process.env.MONGODB_URI;

console.log('🔍 Testing DNS servers:', dns.getServers());
console.log('🔗 Connecting to MongoDB Atlas URI...');

try {
  const conn = await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log(`\n✅ MongoDB Atlas Connected Successfully!`);
  console.log(`📍 Host: ${conn.connection.host}`);
  console.log(`📂 Database: ${conn.connection.name}`);
  console.log(`📊 Ready State: ${conn.connection.readyState === 1 ? 'Connected (1)' : conn.connection.readyState}`);

  const collections = await conn.connection.db.listCollections().toArray();
  console.log(`📁 Collections in DB:`, collections.map((c) => c.name));

  const enquiryCount = await conn.connection.db.collection('enquiries').countDocuments();
  console.log(`📝 Total Enquiries in 'enquiries' collection: ${enquiryCount}`);

  await mongoose.disconnect();
  console.log('🔌 Disconnected cleanly.');
  process.exit(0);
} catch (error) {
  console.error(`❌ MongoDB Connection Error:`, error.message);
  process.exit(1);
}
