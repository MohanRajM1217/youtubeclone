import React, { useState } from "react";
import "./Comments.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteComment ,editComment} from "../../actions/comments";
function DisplayComments({
  cId,
  commentBody,
  userCommented,
  userId,
  commentOn,
}) {
  const [Edit, setEdit] = useState(false);
  const [cmtBdy, setCmtBdy] = useState("");
  const [cmtId, setcmtId] = useState("");
  const currentUser = useSelector((state) => state?.currentUserReducers);
  const handleEdit = (ctId, ctBdy) => {
    setEdit(true);
    setCmtBdy(ctBdy);
    setcmtId(ctId);
  };

  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!cmtBdy) {
      alert("Type Your comments");
    } else {
      dispatch(
        editComment({
          id: cmtId,
          commentBody: cmtBdy,
        })
      );
      setCmtBdy('')
    }
    setEdit(false);
  };
  const handelDel=(id)=>{
    dispatch(deleteComment(id))
  }
  return (
    <>
      {Edit ? (
        <>
          <form
            className="comments_sub_form_comments"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => setCmtBdy(e.target.value)}
              placeholder="Edit comment..."
              className="comment_ibox"
              value={cmtBdy}
            />
            <input
              type="submit"
              value={"Change"}
              className="comment_add_btn_comment"
            />
          </form>
        </>
      ) : (
        <p className="comment_body">{commentBody}</p>
      )}
      <p className="usercommented">{''}-{userCommented} commented  {moment(commentOn).fromNow()}</p>
      {
        currentUser?.result._id===userId &&(

      <p className="editDel_displayComment">
        <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
        <i onClick={()=>handelDel(cId)}>Delete</i>
      </p>

        )
      }
    </>
  );
}

export default DisplayComments;
