import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8888)}`) : '';

export function fetchLists() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getLists`).
      then((response) => response.json()).
      then((response) => dispatch(setLists(response.lists)));
  };
}

export function setLists(lists) {
  return {
    type: ActionTypes.SET_LISTS,
    lists
  };
}


export function addListRequest(title, content, theme) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addList`, {
      method: 'post',
      body: JSON.stringify({
        list: {
          title: title,
          content: content,
          theme: theme
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => dispatch(addList(res.list)));
  };
}

export function addList(list) {
  debugger;
  return {
    type: ActionTypes.ADD_LIST,
    list: list
  };
}

export function editList(idList, title, content, theme) {
  fetch(`${baseURL}/api/editList`, {
    method: 'post',
    body: JSON.stringify({
      list: {
        idList: idList,
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

export function removeList(idList) {
  fetch(`${baseURL}/api/removeList`, {
      method: 'post',
      body: JSON.stringify({
        idList: idList
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
}
