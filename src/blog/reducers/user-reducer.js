import { createSlice } from "@reduxjs/toolkit";
import {
  findUserByIdThunk,findUserByUsernameThunk,
  loginThunk, logoutThunk,
  registerThunk,
  updateUserThunk,
    profileThunk
} from "../services/user-thunks";



const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null,
  visitingUser: null},
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },

    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = null;
    },

    [registerThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;}
    ,

    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [profileThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },
    [profileThunk.pending]: (state, action) => {
      state.currentUser = null;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [findUserByIdThunk.pending]:
        (state) => {
          state.loading = true
          state.visitingUser = null
        },
    [findUserByIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.visitingUser = payload
        },
    [findUserByIdThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },



    [findUserByUsernameThunk.pending]:
        (state) => {
          state.loading = true
          state.visitingUser = null
        },
    [findUserByUsernameThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.visitingUser = payload
        },
    [findUserByUsernameThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }

  },
});

export default userSlice.reducer;

