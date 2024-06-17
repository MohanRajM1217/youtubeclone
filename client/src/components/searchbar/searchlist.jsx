import React from "react";
import "./searchlist.css";
import { FaSearch } from "react-icons/fa";

function Searchlist({TitleArray,setSearchQuery}) {
  return (
    <>
      <div className="container_searchlist">
        {
        TitleArray.map(m => {
          return (
            <>
              <p className="titleItem" onClick={e=>setSearchQuery(m)}>
               
                <FaSearch />
                {m}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Searchlist;
