import { createSlice } from "@reduxjs/toolkit";

import {updatePostThunk,createPostThunk,deletePostThunk,findPostsThunk,fetchUserPostsThunk,findPostByIdThunk,fetchAnotherPostsThunk} from "../services/post-thunks";


const initialState = {
  post: [],
  currentPost:[],
  anotherPost:[],
  visitingPost: null,
  loading: false
}


const postsSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: {
    [updatePostThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const postNdx = state.post.findIndex((p) => p._id === payload._id)
          state.post[postNdx] = { ...state.post[postNdx], ...payload }
        },

    [createPostThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.post.push(payload)
        },


    [deletePostThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.post = state.post.filter(p => p._id !== payload)
        },

    [findPostsThunk.pending]:
        (state) => {
          state.loading = true
          state.post = []
        },
    [findPostsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.post = payload
        },
    [findPostsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },


    [fetchUserPostsThunk.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserPostsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.currentPost = payload;
    },
    [fetchUserPostsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },



    [fetchAnotherPostsThunk.pending]: (state) => {
      state.loading = true;
    },
    [fetchAnotherPostsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.anotherPost = payload;
    },
    [fetchAnotherPostsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },


    [findPostByIdThunk.pending]:
        (state) => {
          state.loading = true
          state.visitingPost = null
        },
    [findPostByIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.visitingPost = payload
        },
    [findPostByIdThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }






    },
  reducers: {

  }

});

export const {createRestaurant, deleteRestaurant,findRestaurants} = postsSlice.actions;
export default postsSlice.reducer;
