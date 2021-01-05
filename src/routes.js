import express from 'express';
import userRoutes from './modules/user/routes/user-routes';

const router = express.Router();

router.use('/api/users', userRoutes);


export default router;