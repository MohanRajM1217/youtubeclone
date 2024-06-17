import React from "react";
import "./home.css";
import LeftSideBar from "../../components/leftSideBar/leftSideBar";
import ShowVideoGrid from "../../components/ShowVideoGrid/ShowVideoGrid";
// import vid from "../../components/video/luffy.mp4";
import { useSelector } from "react-redux";
function Home() {
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
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
  const NavList = [
    "All",
    "python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "One Piece",
    "Demon Slayer",
  ];
  return (
    <div className="container_pages_app">
      <LeftSideBar />
      <div className="container2_pages_app">
        <div className="navigation_home">
          {NavList.map((m) => {
            return (
              <p key={m} className="btn_nav_home">
                {m}
              </p>
            );
          })}
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home;
