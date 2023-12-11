// Use import instead of require
import crypto from 'crypto';

// Function to generate a random JWT key
function generateRandomKey() {
  const secretKey = crypto.randomBytes(32).toString('hex');
  return secretKey;
}

// Example usage
const randomKey = generateRandomKey();
console.log('Random JWT Key:', randomKey);
