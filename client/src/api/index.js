import axios from 'axios'

const API = axios.create({
    baseURL: `http://localhost:5500/`
})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
});

export const login = (authData) => API.post('/user/login', authData);

export const updateChanelData = (id, updateData) => API.patch(`/user/update/${id}`, updateData);


export const fetchAllChanels = () => API.get('/user/getAllChanels');
// export const uploadVideo = (fileData, fileOptions) => API.post('/Video/uploadVideo', fileData, fileOptions)
export const uploadVideo = (fileData, fileOptions) =>
    API.post("/video/uploadVideo", fileData, fileOptions);
export const getVideos = () => API.get('video/getvideos');
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
export const viewsVideo = (id) => API.patch(`/video/view/${id}`);


export const addToLikedVideo = (likedVideoData) => API.post('/video/likeVideo', likedVideoData);
export const getAllLikedvideo = () => API.get('video/getAllLikedvideo');
export const deleteLikeVideo = (videoId, Viewer) => API.delete(`/video/deleteLikeVideo/${videoId}/${Viewer}`);


export const addTowatchLater = (watchLaterData) => API.post('/video/watchLater', watchLaterData);
export const getAllwatchLater = () => API.get('video/getAllwatchLater');
export const deleteWatchLater = (videoId, Viewer) => API.delete(`/video/deleteWatchLater/${videoId}/${Viewer}`);

export const addToHistory = (HistoryData) => API.post('/video/History', HistoryData);
export const getAllHistory = () => API.get('video/getAllHistory');
export const deleteHistory = (userId) => API.delete(`/video/deleteHistory/${userId}`);


export const postComment = (CommentData) => API.post('/comment/post', CommentData);
export const deleteComment = (id) => API.delete(`/comment/delete/${ id }`);
export const editComment = (id, CommentBody) => API.patch(`/comment/edit/${ id }`, { CommentBody });
export const getAllComment = () => API.get('/comment/get');