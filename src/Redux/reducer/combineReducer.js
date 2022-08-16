import {combineReducers} from "redux";
import LoginReducer from './loginReducer';
import SignupReducer from './signupReducer'; 
import ListuserReducer from './listuserReducer';
import ListpollReducer from './listpollReducer';
import DeletepollReducer from './deletepollReducer';
import AddpollReducer from './addpollReducer';
const RootReducer = combineReducers({
    LoginStatus: LoginReducer,
    SigninStatus:SignupReducer,
    UserList : ListuserReducer,
    PollList : ListpollReducer,
    Deletepoll:DeletepollReducer,
    Addpoll:AddpollReducer,
});

export default RootReducer;
