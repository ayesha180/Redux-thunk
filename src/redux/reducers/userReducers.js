import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
  } from "../constants/userConstants";
  
  export const userReducer = (state = { user: [] }, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        return {
          loading: true,
          users: [],
        };
      case GET_USER_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: "",
        };
      case GET_USER_FAIL:
        return {
          loading: false,
          users: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };