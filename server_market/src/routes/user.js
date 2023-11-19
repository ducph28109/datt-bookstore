import express from 'express';
import { responseSender } from '../middleware/configResponse';
import { getUsers } from '../controller/user';
const router = express.Router();

router.get('/users', getUsers, responseSender);

export default router;
