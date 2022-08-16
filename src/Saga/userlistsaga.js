import axiosCall from '../Service';
import {listuserSuccess,listuserError} from '../Redux/action/index'
import {put,call} from 'redux-saga/effects';

export function* Userlistsaga ()
{
    try{
        const url ='/list_users';
        const response = yield call (
            axiosCall,
            "GET",
            url
        );
        console.log(response.data.data)

        

        if(response)
        {
            yield put(listuserSuccess(response.data.data))
        } 
        else
        {
            yield put(listuserError(response.data.message))
        }


    }catch {
           yield put(listuserError('unexpected error occurred'))
    }

}
