import React from "react";
import LeftSideBar from "../../components/leftSideBar/leftSideBar";
import ShowVideoGrid from "../../components/ShowVideoGrid/ShowVideoGrid";
// import vid from "../../components/video/luffy.mp4";
import "./YourVideos.css";
import { useSelector } from "react-redux";
function YourVideos() {
  const currentUser = useSelector((state) => state?.currentUserReducers);
  // const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel===currentUser?.result?._id).reverse();
  // 
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel)
  
  console.log(vids)
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
        <div className="container_your_video">
          <h1> Your Videos</h1>
{
  currentUser?(<>
  <ShowVideoGrid vids={vids} />
  
  </>):(<>
  <h3>Plz Login to see your uploaded video list</h3>
  </>)
}
        </div>
      </div>
    </div>
  );
}

export default YourVideos;
