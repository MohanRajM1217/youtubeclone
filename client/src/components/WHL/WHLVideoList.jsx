import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WHLVideoList({ page, videoList, currentUser }) {
  return (
    <>
      {currentUser ? (
        <>
          {videoList?.data.filter((q) => q?.Viewer === currentUser).reverse().map((m) => {
              return (
                <>
                  <ShowVideoList videoId={m?.videoId} key={m?._id} />
                </>
              );
            })}
        </>
      ) : (
        <>
        <h2 style={{color:"white"}}>Plz Login to watch your  {page}</h2>
        </>
      )}
    </>
  );
}

export default WHLVideoList;
