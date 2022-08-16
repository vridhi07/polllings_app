import {put,call} from 'redux-saga/effects';
import {registerSuccess,registerError} from '../Redux/action/index';
import axiosCall from '../Service/index';


export function* RegisterSaga(action) {
  try{
       const username = action.payload.name;
       const password = action.payload.password;
       const role = action.payload.role;
       
       const url = `/add_user?username=${username}&password=${password}&role=${role}`

        const response = yield call(
            axiosCall,
            "POST",
            url,
        );
       console.log(response,'response');
       const { data } = response

        if(data.error === 1)
        {
            yield put(registerError(data.message))
        }
        if(data.error === 0)
        {
        
            yield put(registerSuccess(data.data))
          
        }
    }catch{
        yield put(registerError("Unexpected error occured"))
  }
}