import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import * as constant from './Constant';

const store = createStore(rootReducer, constant.INITIAL_STATE , applyMiddleware());

export default store;