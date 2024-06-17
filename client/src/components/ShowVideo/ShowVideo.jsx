import React from "react";
import "./ShowVideo.css";
import {Link} from 'react-router-dom';
import moment from 'moment'
function ShowVideo({ vid }) {
  // console.log(vid)
  return (
    <>
      <Link to={`/videopage/${vid?._id}`}>
        <video src={`http://localhost:5500/${vid?.filePath}`} className="video_showVideo" />
      </Link>
      <div className="video_description">
        <div className="chanel_logo_app">
          <div className="fstChar_logo_app">
            <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
          </div>
        </div>
        <div className="video_details">
          <p className="title_vid_showVideo">{vid?.videoTitle}</p>
          <pre className="vid_views_uploadTime">{vid?.Uploader}</pre>
          <pre className="vid_views_uploadTime">
            {vid?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
          </pre>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
