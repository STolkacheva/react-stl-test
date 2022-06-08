import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (_, { rejectWithValue, getState }) {
    const { sort } = getState().users;
    const params = new URLSearchParams();
    sort && params.set("_sort", sort);
    try {
      const response = await fetch(`http://localhost:3000/users?${params}`);
      if (!response.ok) {
        throw new Error(`Loading error`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeUser = createAsyncThunk(
  "users/removeUser",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Remove error");
      }
      dispatch(fetchUsers());
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchSubmit = createAsyncThunk(
  "users/fetchSubmit",
  async function (user, { rejectWithValue }) {
    try {
      const response = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ ...user }),
      });
      if (!response.ok) {
        throw new Error("Save error");
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUpdate = createAsyncThunk(
  "users/fetchUpdate",
  async function (user, { rejectWithValue }) {
    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ ...user }),
      });
      if (!response.ok) {
        throw new Error("Update error");
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const setError = (state, action) => {
  state.success = false;
  state.loading = false;
  state.error = action.payload;
};

const setLoading = (state) => {
  state.success = false;
  state.loading = true;
  state.error = null;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    sort: "",
    success: false,
    loading: false,
    error: null,
  },
  reducers: {
    userSorting(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: setLoading,
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.success = false;
      state.loading = false;
      state.error = null;
    },
    [fetchUsers.rejected]: setError,

    [removeUser.pending]: setLoading,
    [removeUser.rejected]: setError,

    [fetchSubmit.pending]: setLoading,
    [fetchSubmit.fulfilled]: (state) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    },
    [fetchSubmit.rejected]: setError,

    [fetchUpdate.pending]: setLoading,
    [fetchUpdate.fulfilled]: (state) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    },
    [fetchUpdate.rejected]: setError,
  },
});

const { actions, reducer } = usersSlice;
export const { userSorting } = actions;
export default reducer;
