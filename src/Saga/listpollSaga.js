import axiosCall from '../Service';
import {listpollSuccess,listpollError} from '../Redux/action/index'
import {put,call} from 'redux-saga/effects';

export function* Listpollsaga ()
{
    try{
        const url ='/list_polls';
        const response = yield call (
            axiosCall,
            "GET",
            url
        );
        console.log(response.data.data)
        if(response)
        {
            yield put(listpollSuccess(response.data.data))
        } 
        else
        {
            yield put(listpollError(response.data.message))
        }


    }catch {
           yield put(listpollError('unexpected error occurred'))
    }

}
