import React from 'react'
// import vid from "../../components/video/luffy.mp4";
import WHL from '../../components/WHL/WHL';
import { useSelector } from 'react-redux';
function WatchHistory() {
  const historyList=useSelector(state=>state.historyReducer);
  // const history = [
  //   {
  //     id: 1,
  //     video_src: vid,
  //     chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     description: "description of video 1",
  //     uploder: "abc",
  //   },
  //   {
  //     id: 2,
  //     video_src: vid,
  //     chanel: "cdd",
  //     title: "video 2",
  //     description: "description of video 2",
  //     uploder: "abc",
  //   },
  //   {
  //     id: 3,
  //     video_src: vid,
  //     chanel: "add",
  //     title: "video 3",
  //     description: "description of video 3",
  //     uploder: "abc",
  //   },
  //   {
  //     id: 4,
  //     video_src: vid,
  //     chanel: "add",
  //     title: "video 4",
  //     description: "description of video 4",
  //     uploder: "abc",
  //   },
  // ];
  return (
    <>
      <WHL page={'History'} videoList={historyList}/>
    </>
  )
}

export default WatchHistory
