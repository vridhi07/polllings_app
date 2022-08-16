import * as types from '../action/actionTypes';

const initialstate ={
    isLoading: false,
    isLoggedIn: false,
}
const LoginReducer = (state=initialstate , action) => {
   switch(action.type)
   {
        case types.LOGIN_REQUEST:
        return{
            ...state,
            isLoading:true
        }
        case types.LOGIN_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isLoggedIn: true,
            response: action.payload,
        }
        case types.LOGIN_ERROR:
        return{
            ...state,
            isLoading:false,
            isLoggedIn: false,
            error: action.payload,
        }
       
        default:
            return state 
   }
   
}

export default LoginReducer
