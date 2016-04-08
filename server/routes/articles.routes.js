import { Router } from 'express';
import * as ArticleController from '../controllers/articles.controller';
const Verify = require('../controllers/verify');
const router = new Router();

router.all('*' ,Verify.verifyOrdinaryUser);
router.route('/getArticles').get(ArticleController.getArticles);
router.route('/newTheme').post(ArticleController.changeNewTheme);
router.route('/addArticle').post(ArticleController.addArticle);
router.route('/removeArticle').post(ArticleController.removeArticle);
router.route('/editArticle').post(ArticleController.editArticle);
router.route('/voteArticle').post(ArticleController.voteArticle);

export default router;
