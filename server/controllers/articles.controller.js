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

const sanitizeNewArticle = function(article) {
  const newArticle = new Article(article);
  newArticle.title = sanitizeHtml(newArticle.title);
  newArticle.author = sanitizeHtml(newArticle.author);
  newArticle.content = sanitizeHtml(newArticle.content);
  newArticle.theme = sanitizeHtml(newArticle.theme);
  newArticle.slug = slug(newArticle.title.toLowerCase(), { lowercase: true });
  return newArticle;
};

const isInTheArray = function(arr, string) {
  return arr.indexOf(string) !== -1;
}

export function getArticles(req, res) {
  Article.find().sort('-dateAdded').exec((err, articles) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ articles });
  });
}

export function addArticle(req, res) {
  if(!isInTheArray(themes, req.body.article.theme)) {
     return res.status(403).end()
  }
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
  const user = req.body.user;
  Article.findById(idArticle).exec((err, articleSelected) => {
    if (err || articleSelected.author !== user.username) {
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

export function voteArticle(req, res) {
  const article = req.body.article;
  const user = req.body.user.user;
  const vote = req.body.vote;
  if(isInTheArray(article.usersWhoVoted, user.username)) {
    return res.status(403).end();
  }
  Article.findByIdAndUpdate(article._id, { $inc: { [vote]: 1 }, $addToSet: { "usersWhoVoted": user.username } },
    function (err, article) {
      return !err ? res.status(200).json({article: article}) : res.status(500).send(err);
    }
  );
}
