import React from 'react'
import Home from '../pages/home/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from '../pages/library/library';
import YourVideos from '../pages/YourVideos/YourVideos'
import WatchHistory from '../pages/watchHistory/watchHistory'
import WatchLater from '../pages/watchLater/watchLater'
import LikedVideos from '../pages/likedVideo/likedVideo'
import VideoPage from '../pages/VideoPage/VideoPage';
import Chanel from '../pages/Chanel/Chanel';
import Search from '../pages/Search/Search';



function AllRoutes({setEditCreateChanelBtn,setVidUploadPage} ) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/watchhistory' element={<WatchHistory/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/likedvideos' element={<LikedVideos/>}/>
        <Route path='/yourvideos' element={<YourVideos/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        <Route path='/chanel/:Cid' element={<Chanel 
        setVidUploadPage={setVidUploadPage}
        setEditCreateChanelBtn={setEditCreateChanelBtn} />}/>

    </Routes>
  )
}

export default AllRoutes
