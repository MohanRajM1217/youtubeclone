import "./App.css";
import AllRoutes from "./components/allRoutes";
import DrawerSidebar from "./components/leftSideBar/DrawerSidebar";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateEditChanel from "./pages/Chanel/CreateEditChanel";
import { useDispatch } from "react-redux";
import { fetchAllChanels } from "./actions/chanelUser";
import VideoUpload from "./components/VideoUpload/VideoUpload";
import { getAllVideo } from "./actions/Video";
import { getAllLikedvideo } from "./actions/likedVideo";
import { getAllwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/History";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChanels());
    dispatch(getAllVideo());
    dispatch(getAllLikedvideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  const [VidUploadPage, setVidUploadPage] = useState(false);
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  return (
    <>
      <Router>
        {" "}
        {VidUploadPage && (
          <VideoUpload setVidUploadPage={setVidUploadPage} />
        )}{" "}
        {EditCreateChanelBtn && (
          <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />
        )}{" "}
        <Navbar
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          toggleDrawer={toggleDrawer}
        />{" "}
        {
          <DrawerSidebar
            toggleDrawer={toggleDrawer}
            toggleDrawerSidebar={toggleDrawerSidebar}
          />
        }{" "}
        <AllRoutes
          setVidUploadPage={setVidUploadPage}
          setEditCreateChanelBtn={setEditCreateChanelBtn}
        />{" "}
      </Router>{" "}
    </>
  );
}

export default App;
