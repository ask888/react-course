import * as types from '../constants/ActionTypes';

// Actions here
export const addPost = (payload) => ({type: types.ADD_POST, payload});
export const delPost = (index) => ({type: types.DEL_POST, index});
export const editPost = (id, payload) => ({type: types.EDIT_POST, id, payload});