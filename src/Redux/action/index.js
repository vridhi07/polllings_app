import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export  const loginRequest = createAction(types.LOGIN_REQUEST);
export  const loginSuccess = createAction(types.LOGIN_SUCCESS);
export  const loginError = createAction(types.LOGIN_ERROR);

export const registerRequest = createAction(types.REGISTER_REQUEST);
export const registerSuccess =  createAction(types.REGISTER_SUCCESS);
export const registerError =  createAction(types.REGISTER_ERROR);

export const listuserRequest = createAction(types.LISTUSER_REQUEST);
export const listuserSuccess = createAction(types.LISTUSER_SUCCESS);
export const listuserError = createAction(types.LISTUSER_ERROR);


export const listpollRequest = createAction(types.LISTPOLL_REQUEST);
export const listpollSuccess = createAction(types.LISTPOLL_SUCCESS);
export const listpollError = createAction(types.LISTPOLL_ERROR);

export const deletepollRequest = createAction(types.DELETEPOLL_REQUEST);
export const deletepollSuccess = createAction(types.DELETEPOLL_SUCCESS);
export const deletepollError = createAction(types.DELETEPOLL_ERROR);

export const addpollRequest = createAction(types.ADDPOLL_REQUEST);
export const addpollSuccess = createAction(types.ADDPOLL_SUCCESS);
export const addpollError = createAction(types.ADDPOLL_ERROR);