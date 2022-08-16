import * as types from "../action/actionTypes";

const initialstate = {
    isLoading: false,
  };

  const AddpollReducer = (state = initialstate, action) => {
    switch (action.type) {
      case types.ADDPOLL_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case types.ADDPOLL_SUCCESS:
        return {
          ...state,
          isLoading: false,
          response: action.payload,
        };
  
      case types.ADDPOLL_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default AddpollReducer;