import express from 'express'
// import { uploadVideo, getAllvideos } from '../controllers/video.js'
import { uploadVideo, getAllvideos } from '../controllers/video.js'

import { likeController } from '../controllers/like.js'
import { viewController } from '../controllers/views.js'

import upload from '../Helpers/fileHelpers.js'
import auth from '../middleware/auth.js'
import { likeVideoController, getAllLikedvideoController, deleteLikeVideoController } from '../controllers/likeVideo.js';
import { watchLaterController, getAllwatchLaterController, deleteWatchLaterController } from '../controllers/watchLater.js'
import { HistoryController, getAllHistoryController, deleteHistoryController } from '../controllers/History.js'

const routes = express.Router();

// routes.post('/uploadVideo', upload.single('file'), uploadVideo);
routes.post("/uploadVideo", auth, upload.single("file"), uploadVideo)

routes.get('/getvideos', getAllvideos);
routes.patch('/like/:id', auth, likeController);
routes.patch('/view/:id', viewController);

routes.post('/likevideo', auth, likeVideoController);
routes.get('/getAllLikedvideo', getAllLikedvideoController);
routes.delete('/deleteLikeVideo/:videoId/:Viewer', auth, deleteLikeVideoController);

routes.post('/watchLater', auth, watchLaterController);
routes.get('/getAllwatchLater', getAllwatchLaterController);
routes.delete('/deleteWatchLater/:videoId/:Viewer', auth, deleteWatchLaterController);

routes.post('/History', auth, HistoryController);
routes.get('/getAllHistory', getAllHistoryController);
routes.delete('/deleteHistory/:userId', auth, deleteHistoryController);
export default routes;