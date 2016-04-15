import { Router } from 'express';
import * as ArticleController from '../controllers/articles.controller';
const Verify = require('../controllers/verify');
const router = new Router();

router.route('/getArticles').get(Verify.verifyOrdinaryUser, ArticleController.getArticles);
router.route('/newTheme').post(Verify.verifyOrdinaryUser, ArticleController.changeNewTheme);
router.route('/addArticle').post(Verify.verifyOrdinaryUser, ArticleController.addArticle);
router.route('/removeArticle').post(Verify.verifyOrdinaryUser, ArticleController.removeArticle);
router.route('/editArticle').post(Verify.verifyOrdinaryUser, ArticleController.editArticle);
router.route('/voteArticle').post(Verify.verifyOrdinaryUser, ArticleController.voteArticle);

export default router;
