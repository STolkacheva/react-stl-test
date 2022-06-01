import {
  USERS_FAILURE,
  USERS_REQUEST,
  USERS_SUCCESS,
  REMOVE_USER_FAILURE,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_REQUEST,
  SUBMIT_FAILURE,
  SUBMIT_SUCCESS,
  SUBMIT_REQUEST,
  UPDATE_FAILURE,
  UPDATE_SUCCESS,
  UPDATE_REQUEST,
  USERS_SORTING,
} from "../actions/actionTypes";

export const userSorting = (params) => ({
  type: USERS_SORTING,
  payload: params,
});

export const fetcUsersRequest = () => ({
  type: USERS_REQUEST,
});

export const fetcUsersFailure = (error) => ({
  type: USERS_FAILURE,
  payload: error,
});

export const fetcUsersSuccess = (items) => ({
  type: USERS_SUCCESS,
  payload: items,
});

export const fetchUsers = () => async (dispatch, getState) => {
  const { sort } = getState();
  const params = new URLSearchParams();
  sort && params.set("_sort", sort);

  dispatch(fetcUsersRequest());
  try {
    const response = await fetch(`http://localhost:3000/users?${params}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetcUsersSuccess(data));
  } catch (e) {
    dispatch(fetcUsersFailure(e.message));
  }
};

export const removeUserSuccess = () => ({
  type: REMOVE_USER_SUCCESS,
});

export const removeUserRequest = () => ({
  type: REMOVE_USER_REQUEST,
});

export const removeUserFailure = (error) => ({
  type: REMOVE_USER_FAILURE,
  payload: error,
});

export const removeUser = (id) => async (dispatch) => {
  dispatch(removeUserRequest());
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(removeUserSuccess());
  } catch (e) {
    dispatch(removeUserFailure(e.message));
  }
  dispatch(fetchUsers());
};

export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS,
});

export const submitRequest = () => ({
  type: SUBMIT_REQUEST,
});

export const submitFailure = (error) => ({
  type: SUBMIT_FAILURE,
  payload: error,
});

export const fetchSubmit = (user) => async (dispatch) => {
  dispatch(submitRequest());
  try {
    const response = await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ...user }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(submitSuccess());
  } catch (e) {
    dispatch(submitFailure(e.message));
  }
};

export const updateSuccess = () => ({
  type: UPDATE_SUCCESS,
});

export const updateRequest = () => ({
  type: UPDATE_REQUEST,
});

export const updateFailure = (error) => ({
  type: UPDATE_FAILURE,
  payload: error,
});

export const fetchUpdate = (user) => async (dispatch) => {
  dispatch(updateRequest());
  try {
    const response = await fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ...user }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(updateSuccess());
  } catch (e) {
    dispatch(updateFailure(e.message));
  }
};
