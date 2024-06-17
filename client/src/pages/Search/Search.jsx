import React from "react";
// import "./Search.css";
import LeftSideBar from "../../components/leftSideBar/leftSideBar";
import ShowVideoGrid from "../../components/ShowVideoGrid/ShowVideoGrid";
// import vid from "../../components/video/luffy.mp4";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Search() {
    const {searchQuery}=useParams();
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).reverse();
 
  return (
    <div className="container_pages_app">
      <LeftSideBar />
      <div className="container2_pages_app">
        <h2 style={{color:"white"}}>Search Results for {searchQuery}...</h2>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Search;
