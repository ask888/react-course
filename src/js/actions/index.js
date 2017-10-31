import * as types from '../constants/ActionTypes';

// Actions here
export const addPost = (payload) => ({type: types.ADD_POST, payload});
export const updateContentToggler = (payload) => ({type: types.UPDATE_CONTENT_TOGGLER, payload});
export const delPost = (index) => ({type: types.DEL_POST, index});
export const donePost = (index) => ({type: types.DONE_POST, index});