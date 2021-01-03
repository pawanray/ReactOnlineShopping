import {createStore,applyMiddleware, compose, combineReducers} from 'redux'
import productReducer from './reducers/productsReducer';
import usersReducer from './reducers/usersReducer';
import wishlistReducer from './reducers/wishlistReducer';
import cartReducer from './reducers/cartReducer';

import thunk from 'redux-thunk'
const rootReducer = combineReducers(
  {
    products:productReducer,
    users:usersReducer,
    wishlist:wishlistReducer,
    cart:cartReducer
  }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store