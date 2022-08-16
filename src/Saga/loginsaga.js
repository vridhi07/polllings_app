import {put,call} from 'redux-saga/effects';
import {loginSuccess,loginError} from '../Redux/action/index';
import axiosCall from '../Service/index';
import jwt from "jsonwebtoken";


export function* LoginSaga(action) {
  try{
       const username = action.payload.name;
       const password = action.payload.password;
       
       const url = `/login?username=${username}&password=${password}`

        const response = yield call(
            axiosCall,
            "POST",
            url,
        );
       const { data } = response

        if(data.error === 1)
        {
            yield put(loginError(data.data))
        }
        if(data.error === 0)
        {
            let user = jwt.verify(data.token ,"jwt_tok");
            yield put(loginSuccess(user.role))
            localStorage.setItem("token", data.token)
            localStorage.setItem("userType", user.role);
        }
      

    }catch{
        yield put(loginError("Unexpected error occured"))
  }
}