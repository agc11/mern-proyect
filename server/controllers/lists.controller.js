import List from '../models/list';
import slug from 'slug';
import sanitizeHtml from 'sanitize-html';
import themes from '../models/themes.value.js';

export function getLists(req, res) {
  List.find().sort('-dateAdded').exec((err, lists) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ lists });
  });
}

export function addList(req, res) {
  checkList(res,req.body.list, themes);
  new Promise(resolve => {
    resolve(sanitizeNewList(req.body.list));
  }).then(newList => {
    newList.save((err, saved) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.json({list: saved});
    });
  });
}

export function removeList(req, res) {
  const idList = req.body.idList;
  List.findById(idList).exec((err, listSelected) => {
    if (err) {
      return res.status(500).send(err);
    }
    listSelected.remove( () => {
      res.status(200).end();
    });
  });
}

export function editList(req, res) {
  const oldIdList = req.body.list.idList;
  const newTitle = req.body.list.title;
  const newContent = req.body.list.content;
  const newTheme = req.body.list.theme;
  List.update({"_id": oldIdList}, {
    "title": newTitle, "content": newContent, "theme": newTheme}, function(err) {
      return !err ? res.status(200).end() : res.status(500).send(err);
  });
}
// falta pasar el autor, hasta el login nada
const checkList = function(res, list, themes) {
  if (!list.title || !list.content || !list.theme /*|| !list.author*/ || themes.indexOf(list.theme)===-1 ) {
    console.log("error");
    return res.status(403).end();
  }
};

const sanitizeNewList = function(list) {
  const newList = new List(list);
  newList.title = sanitizeHtml(newList.title);
  newList.author = sanitizeHtml(newList.author);
  newList.content = sanitizeHtml(newList.content);
  newList.theme = sanitizeHtml(newList.theme);
  newList.slug = slug(newList.title.toLowerCase(), { lowercase: true });
  return newList;
};
