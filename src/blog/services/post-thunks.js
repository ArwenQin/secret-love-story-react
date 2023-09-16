import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './post-services';


export const addNewPostThunk = createAsyncThunk(
    'posts/addNew',
    async (postInfo) => {
        const newPost = await service.addNewPost(postInfo);
        return newPost;
    }
);
export const findPostsThunk = createAsyncThunk(
    "posts/findPosts",
    async () => await service.findPosts()
);

export const deletePostThunk = createAsyncThunk(
    'posts/deletePost',
    async (posId) => {
        await service.deletePost(posId)
        return posId
    })

export const createPostThunk = createAsyncThunk(
    'posts/createPost',
    async (pos) => {
        const newPost = await service.createPost(pos)
        return newPost
    })

export const updatePostThunk =
    createAsyncThunk(
        'posts/updatePost',
        async (pos) =>
            await service.updatePost(pos)
    )

export const fetchUserPostsThunk = createAsyncThunk(
    "posts/fetchUserPosts",
    async (userId) => await service.fetchUserPosts(userId)
);


export const fetchAnotherPostsThunk = createAsyncThunk(
    "posts/fetchAnotherPosts",
    async (userId) => await service.fetchUserPosts(userId)
);


export const searchPostsThunk = createAsyncThunk(
    "posts/searchPosts",
    async (query) => await service.searchPosts(query)
);

export const findPostByIdThunk = createAsyncThunk(
    "posts/findPostById",
    async (pid) => await service.findPostById(pid)
);