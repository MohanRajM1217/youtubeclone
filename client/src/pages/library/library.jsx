import React from "react";
import "./library.css";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import LeftSideBar from "../../components/leftSideBar/leftSideBar";
import WHLVideoList from "../../components/WHL/WHLVideoList";
// import vid from "../../components/video/luffy.mp4";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";

function Library() {
  const currentUser = useSelector((state) => state?.currentUserReducers);
  const watchLaterList=useSelector(state=>state.watchLaterReducer);
  const historyList=useSelector(state=>state.historyReducer);
  const likedVideoList=useSelector(state=>state.likedVideoReducer)
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     description: "description of video 1",
  //     uploder: "abc",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     chanel: "cdd",
  //     title: "video 2",
  //     description: "description of video 2",
  //     uploder: "abc",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     chanel: "add",
  //     title: "video 3",
  //     description: "description of video 3",
  //     uploder: "abc",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     chanel: "add",
  //     title: "video 4",
  //     description: "description of video 4",
  //     uploder: "abc",
  //   },
  // ];
  return (
    <div className="container_pages_app">
      <LeftSideBar />
      <div className="container2_pages_app">
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"History"}
            currentUser={currentUser?.result._id}
             videoList={historyList} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"Watch Later"}
            currentUser={currentUser?.result._id}
             videoList={watchLaterList} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"Liked Videos"}
            currentUser={currentUser?.result._id}
             videoList={likedVideoList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
