//Root reducer
import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import wishlistReducer from './wishlistReducer'
import filterReducer from './filterReducer'
import authReducer from './authReducer'
import langReducer from './langReducer'
import orderReducer from './orderReducer'
import contactReducer from './contactReducer'

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    filtered: filterReducer,
    auth: authReducer,
    lang: langReducer,
    order: orderReducer,
    contact: contactReducer
});
export default rootReducer;