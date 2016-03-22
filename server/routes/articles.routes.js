import { Router } from 'express';
import * as ArticleController from '../controllers/articles.controller';
const router = new Router();

router.route('/getArticles').get(ArticleController.getArticles);

router.route('/addArticle').post(ArticleController.addArticle);
router.route('/removeArticle').post(ArticleController.removeArticle);
router.route('/editArticle').post(ArticleController.editArticle);

export default router;
