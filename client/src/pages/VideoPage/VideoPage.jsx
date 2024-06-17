import React, { useEffect } from "react";
// import vid from "../../components/video/luffy.mp4";
import moment from "moment";
import "./videoPage.css";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../components/Comments/Comments";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../actions/History";
import { viewVideo} from "../../actions/Video";
function VideoPage() {
  const { vid } = useParams();
  // console.log(vid)
  // const chanels = useSelector((state) => state.chanelReducers);
  // const currentChanel = chanels.filter((c) => c._id === vid);
  // const vids=useSelector(state=>state.videoReducer)
  const vids=useSelector(state=>state.videoReducer);
   console.log(vids)
  const vv = vids?.data?.filter((q) => q._id === vid)[0];
  const currentUser = useSelector((state) => state?.currentUserReducers);
  const dispatch = useDispatch();

  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: currentUser?.result._id,
      })
    );
  };
  const handleViews=()=>{
    dispatch(viewVideo({
      id:vid
    }))
  }
  useEffect(() => {
    if (currentUser) {
      handleHistory();
    }
    handleViews();
  },[]);
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_diaplay_screen_videopage">
            <video
              src={`http://localhost:5500/${vv?.filePath}`}
              className="video_showVideo_videoPage"
              controls
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_videoPage_cont">
                <p className="video_title_videoPage">{vv?.videoTitle}</p>
                <div className="views_date_btns_videoPage">
                  <div className="views_videoPage">
                    {vv?.Views} views <div className="dot"></div>{" "}
                    {moment(vv?.createdAt).fromNow()}
                  </div>
                  <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                </div>
              </div>
              <Link
                to={`/chanel/${vv?.videoChanel}`}
                className="chanel_details_videoPage"
              >
                <b className="chanel_logo_videoPage">
                  <p>{vv?.Uploader?.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage">{vv?.Uploader}</p>
              </Link>
              <div className="comments_videoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments videoId={vv?._id}/>
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More video</div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
