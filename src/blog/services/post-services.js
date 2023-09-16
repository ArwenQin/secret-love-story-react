import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const POSTS_API = `${API_BASE}/posts`;

export const addNewPost = async (postInfo) => {
    const response = await axios.post(POSTS_API, postInfo);
    return response.data;
};
export const createPost = async (post) => {
    const response = await axios.post(POSTS_API, post)
    return response.data;
}
export const findPosts = async () => {
    const response = await axios.get(POSTS_API);
    const res = response.data;
    return res;
}



export const deletePost = async (pid) => {
    const response = await axios.delete(`${POSTS_API}/${pid}`)
    return response.data
}


export const updatePost = async (post) => {
    const response = await axios
        .put(`${POSTS_API}/${post._id}`, post);
    return response.data;
}
export const searchPosts = async (query) => {
    const response = await axios.get(`${POSTS_API}/search`, { params: { q: query } });
    return response.data;
}

export const fetchUserPosts = async (userId) => {
    const response = await axios.get(`${API_BASE}/posts/user/${userId}`);
    return response.data;
};

export const findPostById = async (pid) => {
    const response = await axios.get(`${POSTS_API}/${pid}`);
    const res = response.data;
    return res;
}