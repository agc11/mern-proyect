import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8888)}`) : '';

export function fetchArticles() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getArticles`).
      then((response) => response.json()).
      then((response) => dispatch(setArticles(response.articles)));
  };
}

export function setArticles(articles) {
  return {
    type: ActionTypes.SET_ARTICLES,
    articles
  };
}


export function addArticleRequest(title, content, theme) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addArticle`, {
      method: 'post',
      body: JSON.stringify({
        article: {
          title: title,
          content: content,
          theme: theme
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => socket.emit('new:article', res.article));
  };
}

export function addArticle(article) {
  return {
    type: ActionTypes.ADD_ARTICLE,
    article: article
  };
}

export function editArticle(idArticle, title, content, theme) {
  fetch(`${baseURL}/api/editArticle`, {
    method: 'post',
    body: JSON.stringify({
      article: {
        idArticle: idArticle,
        title: title,
        content: content,
        theme: theme
      }
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
}

export function removeArticle(idArticle) {
  fetch(`${baseURL}/api/removeArticle`, {
      method: 'post',
      body: JSON.stringify({
        idArticle: idArticle
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((res) => res.json()).then( res => socket.emit('delete:article', res.article));
}
