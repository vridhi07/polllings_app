import * as types from '../action/actionTypes';

const initialstate ={
    isLoading: false,
    isSignIn: false,
}
const LoginReducer = (state=initialstate , action) => {
   switch(action.type)
   {
        case types.REGISTER_REQUEST:
        return{
            ...state,
            isLoading:true
        }
        case types.REGISTER_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isSignIn: true,
            response: action.payload,
        }
        case types.REGISTER_ERROR:
        return{
            ...state,
            isLoading:false,
            isSignIn: false,
            error: action.payload,
        }
       
        default:
            return state 
   }
   
}

export default LoginReducer
