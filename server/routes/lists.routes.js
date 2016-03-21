import { Router } from 'express';
import * as ListController from '../controllers/lists.controller';
const router = new Router();

router.route('/getLists').get(ListController.getLists);
//router.route('/getList').get(ListController.getList);

router.route('/addList').post(ListController.addList);
router.route('/removeList').post(ListController.removeList);
router.route('/editList').post(ListController.editList);

export default router;
