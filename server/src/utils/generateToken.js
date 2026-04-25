import jwt from 'jsonwebtoken';

export function generateToken(payload) {
  const secret = process.env.JWT_SECRET || 'dev_secret_key';
  return jwt.sign(payload, secret, { expiresIn: '7d' });
}
