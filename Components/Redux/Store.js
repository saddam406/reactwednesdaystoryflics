import {applyMiddleware,createStore} from 'redux';

import RootReducer from './Root-reducer';
import reduxThunk from 'redux-thunk';
const middlewares=[reduxThunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares));
export default store;