import * as types from '../action/actionTypes';

const initialstate ={
    isLoading: false,
    isPollfetched:false,
    userdata:[]
}
const ListpollReducer = (state=initialstate , action) => {
   switch(action.type)
   {
        case types.LISTPOLL_REQUEST:
        return{
            ...state,
            isLoading:true
        }
        case types.LISTPOLL_SUCCESS:
        return{
            ...state,
            isLoading:true,
            isPollfetched:true,
            userdata: action.payload,
        }
        case types.LISTPOLL_ERROR:
        return{
            ...state,
            isLoading:true,
            isPollfetched:false,
            error: action.payload,
        }
       
        default:
            return state 
   }
   
}

export default ListpollReducer
