import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
import "./DecribeChanel.css";

function DecribeChanel({ setEditCreateChanelBtn, Cid, setVidUploadPage }) {
  const chanels = useSelector((state) => state?.chanelReducers);
  const currentChanel = chanels.filter((c) => c._id === Cid)[0];
  const currentUser = useSelector((state) => state?.currentUserReducer);
 
  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>{currentUser?.name}</b>
      </div>
      <div className="description_chanel">
        <b>{currentChanel?.name}</b>
        <p>{currentChanel?.desc}</p>
      </div>
      {currentUser?.result._id === currentChanel?._id && (
        <>
          <p
            className="editbtn_chanel"
            onClick={() => setEditCreateChanelBtn(true)}
          >
            <FaEdit />
            <b> Edit Channel</b>
          </p>
          <p
            className="uploadbtn_chanel"
            onClick={() => setVidUploadPage(true)}
          >
            <FaUpload />
            <b> Upload Video</b>
          </p>
        </>
      )}
    </div>
  );
}

// // Prop Types validation
// DecribeChanel.propTypes = {
//   setEditCreateChanelBtn: PropTypes.func.isRequired,
//   Cid: PropTypes.string.isRequired,
// };

export default DecribeChanel;
