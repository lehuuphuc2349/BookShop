import * as actionType from "../constants/bookConstants";

export const getBooksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case actionType.GET_BOOKS_REQUEST:
      return {
        loading: true,
        books: [],
      };
    case actionType.GET_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
      };
    case actionType.GET_BOOKS_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
export const getBookReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case actionType.GET_BOOK_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionType.GET_BOOK_DETAILS_SUCCESS:
      return {
        loading: false,
        book: action.payload,
      };
    case actionType.GET_BOOK_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionType.GET_BOOK_DETAILS_RESET:
      return {
        book: {},
      };
    default:
      return state;
  }
};
