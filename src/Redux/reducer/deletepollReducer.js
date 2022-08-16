import * as types from '../action/actionTypes';

const initialstate = {
    isLoading:false,
};

const DeletepollReducer = (state=initialstate,action) => {
    switch(action.type)
    {
         case types.DELETEPOLL_REQUEST:
         return{
             ...state,
             isLoading:true
         }
         case types.DELETEPOLL_SUCCESS:
         return{
             ...state,
             isLoading:true,
             response: action.payload,
         }
         case types.DELETEPOLL_ERROR:
         return{
             ...state,
             isLoading:false,
             error: action.payload,
         }
        
         default:
             return state 
    }
   
}

export default DeletepollReducer
