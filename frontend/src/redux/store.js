import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducers } from "./reducers/cartReducers";
import { getBookReducer, getBooksReducer } from "./reducers/bookReducers";
const reducer = combineReducers({
  cart: cartReducers,
  getBooks: getBooksReducer,
  getBookDetails: getBookReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
