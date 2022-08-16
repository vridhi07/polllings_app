import axiosCall from '../Service/index';
import {put,call} from 'redux-saga/effects';
import {addpollSuccess,addpollError} from '../Redux/action/index'


export function* Addpollsaga (action){
   try{
      let question = action.payload.question;
      let options = action.payload.options;
      let optionslength = options.length;
      let optionString = "";
   
      options.map((data,index)=>{
         if(index === optionslength-1)
         {
           return optionString +=  data;
         }
         else{
           return optionString +=  data + "____";
         }
      })
      

         const url = `/add_poll?title=${question}&options=${optionString}`;
         const response = yield call(
            axiosCall,
            "POST",
            url
         );
         console.log(response);
         const data = response.data;
         if (data.error === 0) {
            yield put (addpollSuccess(data.data))
        } else {
            yield put (addpollError(data.error))
        }
      }
   catch {
      yield put(addpollError('unexpected error occurred'))
   }
}
