import { Router } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import { auth } from '../middleware/auth';

const router = Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res.json({ message: 'User Successfully Registered' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Email is wrong' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'test', {
    expiresIn: 60 * 60 * 24
  });
  res.json({ token });
});

router.post('/resetPassword', auth, async (req, res) => {
  const { password } = req.body;
  // @ts-ignore
  const user = await User.findById(req.userId);
  if (!user) return res.status(400).json({ message: 'User not found' });

  user.password = password;
  await user.save();
  res.json({ message: 'Password successfully updated' });
});

export default router;
