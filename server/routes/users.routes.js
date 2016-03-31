import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();


router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);

export default router;
