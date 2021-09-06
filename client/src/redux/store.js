import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer,getProductDetailReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer'

const middleware =[thunk];

const reducers = combineReducers({
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer,
    cart:cartReducer
})

const store =createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;