import {all,takeLatest} from 'redux-saga/effects';
import * as types from '../Redux/action/actionTypes';
import {LoginSaga} from '../Saga/loginsaga';
import {RegisterSaga} from '../Saga/registersaga';
import {Userlistsaga} from '../Saga/userlistsaga';
import {Listpollsaga} from '../Saga/listpollSaga';
import {Deletepollsaga} from '../Saga/deletepollsaga';
import {Addpollsaga} from '../Saga/addpollsaga';

function* watchAllSaga(){
    yield takeLatest(types.LOGIN_REQUEST,LoginSaga);
    yield takeLatest(types.REGISTER_REQUEST,RegisterSaga);
    yield takeLatest(types.LISTUSER_REQUEST,Userlistsaga);
    yield takeLatest (types.LISTPOLL_REQUEST,Listpollsaga);
    yield takeLatest(types.DELETEPOLL_REQUEST,Deletepollsaga);
    yield takeLatest(types.ADDPOLL_REQUEST,Addpollsaga);
}


export default function* rootSaga()
{
    yield all ([watchAllSaga()]);
}