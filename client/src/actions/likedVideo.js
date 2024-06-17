import * as api from "../api";


export const addToLikedVideo = (likedVideoData) => async(dispatch) => {
    try {
        const { data } = await api.addToLikedVideo(likedVideoData);
        dispatch({ type: 'POST_LIKEDVIDEO', data });
        dispatch(getAllLikedvideo())
    } catch (error) {
        console.log(error)
    }
}

export const getAllLikedvideo = () => async(dispatch) => {
    try {
        const { data } = await api.getAllLikedvideo();
        dispatch({ type: 'FETCH_ALL_LIKED_VIDEOS', payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const deleteLikeVideo = (likedVideoData) => async(dispatch) => {
    try {
        const { videoId, Viewer } = likedVideoData;
        await api.deleteLikeVideo(videoId, Viewer);
        dispatch(getAllLikedvideo());
    } catch (error) {
        console.log(error)
    }
}