import React, { useState } from "react";
import "./CreateEditChanel.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { updateChanelDate } from "../../actions/chanelUser";
function CreateEditChanel({ setEditCreateChanelBtn }) {
  //   const currentUser = {
  //     result: {
  //       email: "xyz@mail.com",
  //       joinedOn: "2222-07-15T09:57:23.489Z",
  //     },
  //   };
  const currentUser = useSelector((state) => state.currentUserReducers);

  const [name, setName] = useState(currentUser?.result.name);
  const [desc, setDesc] = useState(currentUser?.result.desc);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!name) {
      alert("Plz Enter Name !");
    } else if (!desc) {
      alert("Plz Enter Disscripton !");
    } else {
      dispatch(
        updateChanelDate(currentUser?.result._id, { name: name, desc: desc })
      );
      setEditCreateChanelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: currentUser?.result.email }));
      }, 5000);
    }
  };
  return (
    <div className="container_createEditChanel">
      <input
        onClick={() => setEditCreateChanelBtn(false)}
        type="submit"
        name="date"
        value={"X"}
        className="ibtn_x"
      />
      <div className="container2_createEditChanel">
        <h1>
          {currentUser?.result.name ? <>Edit</> : <>Create</>}
          Your Chanel
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="text"
          className="ibox"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          rows={15}
          placeholder="Enter Chanel Description"
          className="ibox"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="submit"
          value={"Submit"}
          className="ibtn"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default CreateEditChanel;
