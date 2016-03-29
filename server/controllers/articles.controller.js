import Article from '../models/article';
import slug from 'slug';
import sanitizeHtml from 'sanitize-html';
import themes from '../models/themes.value.js';

// passeth the author when there login
const checkArticle = function(res, article, themes) {
  if (!article.title || !article.content || checkTheme(res, article.theme) /*|| !article.author*/ ) {
    console.log("error");
    return res.status(403).end();
  }
};

const checkTheme = function(res, theme) {
  if ( !theme || themes.indexOf(theme)===-1) return res.status(403).end();
}

const sanitizeNewArticle = function(article) {
  const newArticle = new Article(article);
  newArticle.title = sanitizeHtml(newArticle.title);
  newArticle.author = sanitizeHtml(newArticle.author);
  newArticle.content = sanitizeHtml(newArticle.content);
  newArticle.theme = sanitizeHtml(newArticle.theme);
  newArticle.slug = slug(newArticle.title.toLowerCase(), { lowercase: true });
  return newArticle;
};

export function getArticles(req, res) {
  Article.find().sort('-dateAdded').exec((err, articles) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ articles });
  });
}

export function addArticle(req, res) {
  checkArticle(res, req.body.article, themes);
  new Promise(resolve => {
    resolve(sanitizeNewArticle(req.body.article));
  }).then(newArticle => {
    newArticle.save((err, saved) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.json({article: saved});
    });
  });
}

export function removeArticle(req, res) {
  const idArticle = req.body.idArticle;
  Article.findById(idArticle).exec((err, articleSelected) => {
    if (err) {
      return res.status(500).send(err);
    }
    articleSelected.remove( () => {
      return res.json({article: articleSelected});
    });
  });
}

export function changeNewTheme(req, res) {
  const theme = req.body.theme;
  if (theme==='All') {
    getArticles(req, res);
  } else {
    checkTheme(res, theme);
    Article.find({'theme': theme}).sort('-dateAdded').exec((err, articles) => {
      if (err) {
        return res.status(500).end();
      }
      res.json({articles});
    });
  }
}


export function editArticle(req, res) {
  const oldIdArticle = req.body.article.idArticle;
  const newTitle = req.body.article.title;
  const newContent = req.body.article.content;
  const newTheme = req.body.article.theme;
  Article.update({ "_id": oldIdArticle }, {
    "title": newTitle, "content": newContent, "theme": newTheme}, function(err) {
      return !err ? res.status(200).end() : res.status(500).send(err);
  });
}
