import * as actionType from "../constants/bookConstants";
import axios from "axios";

export const getBooks = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_BOOKS_REQUEST });
    const { data } = await axios.get("/api/books");
    dispatch({
      type: actionType.GET_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_BOOKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
export const getBookDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_BOOK_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/books/${id}`);
    dispatch({
      type: actionType.GET_BOOK_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.reponse,
    });
  }
};
export const removeBookDetails = () => (dispatch) => {
  dispatch({
    type: actionType.GET_BOOK_DETAILS_RESET,
  });
};
