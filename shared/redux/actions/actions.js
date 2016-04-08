import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8888)}`) : '';

export function fetchArticles(user) {
  return (dispatch) => {
    if(user === undefined) {
      user = {
        token: null,
        user: null
      };
    }
    return fetch(`${baseURL}/api/getArticles`, {
      method: 'get',
      headers: new Headers({
        'x-access-token': user.token,
      }),
    }).
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

export function login(username, password) {
  return (dispatch) => {
    fetch(`${baseURL}/users/login`, {
      method: 'post',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    }).then( res => res.json())
      .then( res => dispatch(loginLocal(res)))
      .then(() => browserHistory.push('/main'));
  };
}

function loginLocal(res) {
  if (res.user && res.token) {
    return {
      type: ActionTypes.LOGIN,
      user: res.user,
      token: res.token
    }
  }
}

export function register(username, password, email) {
  fetch(`${baseURL}/users/register`, {
    method: 'post',
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  }).then( res => res.json())
    .then( res => res.err ? console.log(res.msg) : browserHistory.push('/login'));
}

export function addArticleRequest(title, content, theme, user) {
  fetch(`${baseURL}/api/addArticle`, {
    method: 'post',
    body: JSON.stringify({
      article: {
        title: title,
        content: content,
        theme: theme,
        author: user.user.username,
      }
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-access-token': user.token,
    }),
  }).then((res) => res.json())
    .then(res => socket.emit('new:article', res.article));
}


export function addArticleLocal(article) {
  return (dispatch) => {
    dispatch(addArticle(article));
  };
}

export function addArticle(article) {
  return {
    type: ActionTypes.ADD_ARTICLE,
    article: article
  };
}

export function editArticle(idArticle, title, content, theme, user) {
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
      'Content-Type': 'application/json',
      'x-access-token': user.token,
    })
  });
}

export function removeArticleRequest(idArticle, user) {

  fetch(`${baseURL}/api/removeArticle`, {
      method: 'post',
      body: JSON.stringify({
        idArticle: idArticle,
        user: user.user,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      })
    }).then((res) => res.json()).then( res => socket.emit('delete:article', res.article));
}

export function removeArticleLocal(article) {
  return (dispatch) => {
    dispatch(removeArticle(article));
  };
}

export function removeArticle(article) {
  return {
    type: ActionTypes.REMOVE_ARTICLE,
    article: article
  };
}

export function changeNewTheme(newTheme, user) {
  return (dispatch) => {
    fetch(`${baseURL}/api/newTheme`, {
      method: 'post',
      body: JSON.stringify({
        theme: newTheme
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      })
    }).then( response => response.json()).then( response => dispatch(setArticles(response.articles)));
  };
}

export function logOutRequest() {
  return (dispatch) => {
    fetch(`${baseURL}/users/logout`)
    .then((response) => response.json())
    .then(response => dispatch(logOut()))
    .then(() => browserHistory.push('/'));
  };
}

function logOut() {
  return {
    type: ActionTypes.LOG_OUT,
    user: { user: null, token: null }
  };
}


export function voteArticleRequest(article, user, vote) {
  return (dispatch) => {
    fetch(`${baseURL}/api/voteArticle`, {
      method: 'post',
      body: JSON.stringify({
        article: article,
        user: user,
        vote: vote,
        token: user.token,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      })
    }).then( res => res.json() )
      .then( res => dispatch(voteArticle(res)) );
  };
}

function voteArticle(article) {
  debugger;
}
