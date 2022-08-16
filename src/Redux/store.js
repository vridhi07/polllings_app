import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware} from "redux";
import rootReducer from "../Redux/reducer/combineReducer";
import rootSaga from "../Saga/combineSaga";

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default Store;
