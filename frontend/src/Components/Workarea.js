import React, { useContext, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";



function Workarea() {
  const lightTheme = useSelector((state) => state.themeKey);
  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef(null);
  const dyParams = useParams();
  const [chat_id, chat_user] = dyParams._id.split("&");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [allMessages, setAllMessage] = useState([]);
  const [allMessagesCopy, setAllMessagescopy] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loaded, setloaded] = useState(true);

  const sendMessage = () => {
    var data = null;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.post(
      "http://localhost:5000/message/",
      {
        content: messageContent,
        chatId: chat_id,
      },
      config
    )
      .then(({ response }) => {
        data = response;
        console.log(response);
        console.log("Message Fired");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        // Optionally, you can handle the error state or show an error message to the user
      });
  };

  useEffect(() => {
    console.log("Users Refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("http://localhost:5000/message/" + chat_id, config)
      .then(
        ({ data }) => {
          setAllMessage(data);
          setRefresh(true); // set loaded to true so that the scroll will work
        });
  }, [refresh, chat_id, userData.data.token]);

  if (!refresh) {
    return (
      <div
        style={{
          border: "20px",
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            borderRadius: "10px",
            flexGrow: "1",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
      </div>
    );
  }
  else {
    return (
      <div className={"workarea-container" + (lightTheme ? "" : "dark")}>
        <div className={"workarea-header" + (lightTheme ? "" : "dark")}>
          <p className={"con-icon" + (lightTheme ? "" : "dark")}>
            {chat_user[0]}
          </p>
          <div className={"header-text" + (lightTheme ? "" : "dark")}>
            <p className={"con-title" + (lightTheme ? "" : "dark")}>
              {chat_user}
            </p>
            {/* <p className="con-timeStamp"> {props3.message} </p> */}
          </div>
          <IconButton className={"icon" + (lightTheme ? "" : "dark")}>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={"message-container " + (lightTheme ? "" : "dark")}>
          {allMessages
            .slice(0)
            .reverse()
            .map((message, index) => {
              const sender = message.sender;
              const self_id = userData.data._id;
              if (sender._id === self_id) {
                return <MessageSelf props={message} key={index} />;
              } else {
                return <MessageOthers props={message} key={index} />;
              }
            })}
        </div>
        <div ref={messagesEndRef} className="Bottom" />
        <div className={"text-input-area" + (lightTheme ? "" : "dark")}>
          <input
            placeholder="Type a message..."
            className={"search-box" + (lightTheme ? "" : "dark")}
            value={messageContent}
            onChange={(e) => {
              setMessageContent(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.code == 'Enter') {
                sendMessage();
                setMessageContent("");
                setRefresh(!refresh);
              }
            }}
          />
          <IconButton
            className={"icon" + (lightTheme ? "" : "dark")}
            onClick={() => {
              sendMessage();
              setRefresh(!refresh);
            }}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}
export default Workarea;
