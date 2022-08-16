import * as types from '../action/actionTypes';

const initialstate ={
    isLoading: false,
    isUserfetched:false,
    userdata:[]
}
const ListuserReducer = (state=initialstate , action) => {
   switch(action.type)
   {
        case types.LISTUSER_REQUEST:
        return{
            ...state,
            isLoading:true
        }
        case types.LISTUSER_SUCCESS:
        return{
            ...state,
            isLoading:true,
            isUserfetched:true,
            userdata: action.payload,
        }
        case types.LISTUSER_ERROR:
        return{
            ...state,
            isLoading:true,
            isUserfetched:false,
            error: action.payload,
        }
       
        default:
            return state 
   }
   
}

export default ListuserReducer
