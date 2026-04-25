import { Router } from 'express';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { allowRoles } from '../middleware/roleMiddleware.js';
import { ROLES } from '../constants/roles.js';

const router = Router();

router.use(authMiddleware, allowRoles(ROLES.ADMIN));

router.get('/users', async (_req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

export default router;
