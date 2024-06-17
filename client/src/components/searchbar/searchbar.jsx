import React, { useState } from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import Searchlist from "./searchlist";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchListA, setSearchListA] = useState(false);
  const TitleArray=useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m?.videoTitle)  
  // const TitleArray = ["Video1", "Video2", "Animation video", "Movies"].filter(
  //   (q) => q.toUpperCase().includes(searchQuery.toUpperCase())
  // );
  return (
    <>
      <div className="searchbar_container">
        <div className="searchbar_container2">
          <div className="search_div">
            <input
              type="text"
              className="iBox_searchbar"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => setSearchListA(true)}
              value={searchQuery}
            />
            <Link to={`/search/${searchQuery}`}>
            <FaSearch
              className="searchicon_searchbar"
              onClick={(e) => setSearchListA(false)}
            />
            </Link>
            <BsMicFill className="Mic_searchbar" />
            {searchQuery && searchListA && (
              <Searchlist
                setSearchQuery={setSearchQuery}
                TitleArray={TitleArray}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
