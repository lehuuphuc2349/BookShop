import * as actionType from "../constants/cartConstants";

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (element) => element.book === item.book
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((element) =>
            element.book === existItem.book ? item : element
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (element) => element.book !== action.payload
        ),
      };
    default:
      return state;
  }
};
