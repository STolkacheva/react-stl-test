import {
  USERS_FAILURE,
  USERS_REQUEST,
  USERS_SUCCESS,
  REMOVE_USER_REQUEST,
  REMOVE_USER_FAILURE,
  REMOVE_USER_SUCCESS,
  SUBMIT_REQUEST,
  SUBMIT_FAILURE,
  SUBMIT_SUCCESS,
  UPDATE_REQUEST,
  UPDATE_FAILURE,
  UPDATE_SUCCESS,
  USERS_SORTING,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  sort: "",
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_REQUEST:
    case REMOVE_USER_REQUEST:
    case SUBMIT_REQUEST:
    case UPDATE_REQUEST: {
      return {
        ...state,
        users: [],
        loading: true,
        error: null,
      };
    }
    case USERS_FAILURE:
    case REMOVE_USER_FAILURE:
    case SUBMIT_FAILURE:
    case UPDATE_FAILURE: {
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload,
      };
    }
    case USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    }
    case USERS_SORTING: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    case REMOVE_USER_SUCCESS:
    case SUBMIT_SUCCESS:
    case UPDATE_SUCCESS:
    default:
      return state;
  }
}
