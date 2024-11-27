import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { userReducer } from './redux/reducers/userReducers';

const rootreducers = combineReducers({
    userList : userReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(rootreducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;