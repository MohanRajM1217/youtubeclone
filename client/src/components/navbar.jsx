import React, { useEffect ,useState} from "react";
import "./navbar.css";
import logo from "./navbar/logo.png";
import Searchbar from "./searchbar/searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@leecheuk/react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Auth from "../pages/Auth/Auth";
function Navbar({ toggleDrawer,setEditCreateChanelBtn }) {
  const [AuthBtn, setAuthBtn] = useState(false)
  // const currentUser = null;
  // const currentUser = {
  //   result: {
  //     email: 'xyz@mail.com',
  //     joinedOn:'2222-07-15T09:57:23.489Z',
  //   },
  // };
  const currentUser = useSelector(state=>state.currentUserReducers);
  console.log(currentUser);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "685202565386-snb2gqndi7t9v78kjuibfr54ns6pbus5.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({ email: Email }));
  };
  const onFailure = (response) => {
    console.log("Failed", response);
  };
  return (
    <>
    <div className="container_navbar">
      <div className="Burger_logo_navbar">
        <div className="burger" onClick={() => toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={"/"} className="logo_div_navbar">
          <img src={logo} alt="" />
          <p className="logo_title_navbar">YouTube</p>
        </Link>
      </div>
      <Searchbar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
      <div className="Auth_cont_Navbar">
        {currentUser ? (
          <>
            <div className="chanel_logo_app"onClick={()=>setAuthBtn(true)}>
              <p className="fstChar_logo_app">
                {currentUser?.result.name ? (
                  <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <GoogleLogin
              clientId={"685202565386-snb2gqndi7t9v78kjuibfr54ns6pbus5.apps.googleusercontent.com"}
              onSuccess={onSuccess}
              onFailure={onFailure}
              render={(renderProps) => (
                <p onClick={renderProps.onClick} className="Auth_Btn">
                  <BiUserCircle size={22} />
                  <b>Sign in</b>
                </p>
              )}
            />
          </>
        )}
      </div>
    </div>
    {
      AuthBtn &&
      <Auth setEditCreateChanelBtn={setEditCreateChanelBtn}
      setAuthBtn={setAuthBtn}
      User={currentUser}
      />
    }
    </>
  );
}

export default Navbar;
