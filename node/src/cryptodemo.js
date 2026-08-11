
import crypto from 'crypto';
// Generate a random UUID
const uuid=crypto.randomUUID(); } console.log('Generated UUID:', uuid);
// Create a SHA-256 hash of a string
const hash = crypto.createHash('sha256').update('Hello, World!').digest('hex'); console.log('SHA-256 Hash:', hash);
// Generate random bytes
const randomBytes = crypto.randomBytes(16).toString('hex');
console.log('Random Bytes:', randomBytes);
