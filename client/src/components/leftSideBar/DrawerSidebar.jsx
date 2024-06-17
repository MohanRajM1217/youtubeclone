import React from "react";
import "./LeftSideBar.css";
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

import shorts from "./s.png";
import { NavLink } from "react-router-dom";
function DrawerSidebar({toggleDrawer,toggleDrawerSidebar}) {
  return (
    <div className="container_drawerLeftSidebar"style={toggleDrawerSidebar}>
      <div className="container2_drawerLeftSidebar">
        <div className="Drawer_leftSidebar">
          <NavLink to={'/'} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img
                src={shorts}
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem", width: "20px" }}
              />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineSubscriptions
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Subscription</div>
            </p>
          </div>
        </div>
        <div className="libraryBtn_Drawerleftsidebar">
            <NavLink to={'/library'} className="icon_sidebar_div">
              <p>
                <MdOutlineVideoLibrary
                  size={22}
                  className="icon_sideBar"
                  style={{ margin: "auto 0.7rem" }}
                />
                <div className="text_sidebar_icon">Library</div>
              </p>
            </NavLink>
            <NavLink to={'/watchhistory'} className="icon_sidebar_div">
              <p>
                <FaHistory
                  size={22}
                  className="icon_sideBar"
                  style={{ margin: "auto 0.7rem" }}
                />
                <div className="text_sidebar_icon">History</div>
              </p>
            </NavLink>
            <NavLink to={'/yourvideos'} className="icon_sidebar_div">
              <p>
                <AiFillPlaySquare
                  size={22}
                  className="icon_sideBar"
                  style={{ margin: "auto 0.7rem" }}
                />
                <div className="text_sidebar_icon">Your Videos</div>
              </p>
            </NavLink>
            <NavLink to={'/watchlater'} className="icon_sidebar_div">
              <p>
                <MdOutlineWatchLater
                  size={22}
                  className="icon_sideBar"
                  style={{ margin: "auto 0.7rem" }}
                />
                <div className="text_sidebar_icon">Watch Later</div>
              </p>
            </NavLink>
            <NavLink to={'/likedvideos'} className="icon_sidebar_div">
              <p>
                <AiFillLike
                  size={22}
                  className="icon_sideBar"
                  style={{ margin: "auto 0.7rem" }}
                />
                <div className="text_sidebar_icon">Liked Videos</div>
              </p>
            </NavLink>
          </div>
          <div className="subscription_lsdbar">
            <h3>Your Subscriptions</h3>
            <div className="chanel_lsdbar">
                <p>
                    C
                </p>
                <div>Chanel</div>
            </div>
            <div className="chanel_lsdbar">
                <p>
                    C
                </p>
                <div>Chanel</div>
            </div>
            <div className="chanel_lsdbar">
                <p>
                    C
                </p>
                <div>Chanel</div>
            </div>
            <div className="chanel_lsdbar">
                <p>
                    C
                </p>
                <div>Chanel</div>
            </div>
          </div>
      </div>
      <div className="container3_drawerLeftSidebar"onClick={()=>toggleDrawer()}>
    
      </div>
    </div>
  );
}

export default DrawerSidebar;
