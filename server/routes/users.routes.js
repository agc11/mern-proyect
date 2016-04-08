import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();


router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);
router.route('/logout').get(UserController.logOut);
export default router;
