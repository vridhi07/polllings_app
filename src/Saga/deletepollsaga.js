import { put, call } from "redux-saga/effects";
import axiosCall from "../Service/index";
import { deletepollSuccess, deletepollError, listpollRequest} from "../Redux/action/index";

export function* Deletepollsaga (action) {
    console.log(action);

    try{
        const id = action.payload.id;
        console.log(id);
        const url = `/delete_poll?id=${id}`;
        const response = yield call (
            axiosCall,
            "GET",
            url
        );
        console.log(response)
        const data = response.data;
        if(data.error === 0){
            yield put(deletepollSuccess(data));
            yield put(listpollRequest());
        } else {
            yield put(deletepollError(data.error));
          }


    }catch {
        //    yield put(listpollError('unexpected error occurred'))
    }
}


