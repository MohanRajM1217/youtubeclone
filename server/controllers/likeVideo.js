import likedVideo from '../models/likedVideo.js';
import mongoose from 'mongoose';


export const likeVideoController = async(req, res) => {
    const likedVideoData = req.body;
    console.log(likedVideoData);
    const addToLikedVideo = new likedVideo(likedVideoData);

    try {
        await addToLikedVideo.save();
        res.status(200).json('added to likedVideo')
        console.log('Done')
    } catch (error) {
        res.status(404).json(error);
    }
}
export const getAllLikedvideoController = async(req, res) => {
    try {
        const files = await likedVideo.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(404).send(error.message);
    }
}
export const deleteLikeVideoController = (likeVideoData) => async(dispatch) => {
    try {
        const { videoId, Viewer } = likeVideoData;
        await api.deleteLikeVideo(videoId, Viewer);
        dispatch(getAlllikeVideo());
    } catch (error) {
        console.log(error)
    }
}