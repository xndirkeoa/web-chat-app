import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";



function Workarea(props) {
        var props3 = {name:"Test#1",message:"Today"};
  return (
    <div className="workarea-container">
      <div className="workarea-header">
        <p className="con-icon"> {props3.name[0]} </p>
        <div className="header-text">
          <p className="con-title"> {props3.name} </p>
          <p className="con-timeStamp"> {props3.message} </p>
        </div>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className="message-container">
          <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
          <MessageSelf/>
      </div>

      <div className="text-input-area">
        <input placeholder="Type a Message" className="inbox" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Workarea;


