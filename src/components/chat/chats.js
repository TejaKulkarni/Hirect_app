import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import "./chats.css";
import { useUserAuth } from "../../context/UserAuthContext";
import axios from "axios";


const Chats = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const didMountRef = useRef(false);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      if (!user || user == null) {
        navigate("/");
        return;
      }
      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "72c3fd9e-0789-42c3-88cf-ad9860513e21",
            "user-name": user && user.email,
            "user-secret": user && user.uid,
          },
        })
        .then(() => setLoading(false))
        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user && user.email);
          formdata.append("username", user && user.email);
          formdata.append("secret", user && user.uid);
          axios
            .post("https://api.chatengine.io/users/",formdata,{
              headers:{
                "private-key":"0d2268df-e93c-4175-a9d1-95407c49cdc9",
              },
            })
            .then(()=>setLoading(false))
            .catch((e)=> console.log("e",e.response));
        });
    }
  }, [user, navigate]);

  return (
    <div className="chats-page">
      <div className="chat-nav">
        <div className="logo-tab"> Inbox</div>
        <div onClick={handleLogout} className="logout">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh-66px)"
        projectID="72c3fd9e-0789-42c3-88cf-ad9860513e21"
        userName={user && user.email}
        userSecret={user && user.uid}
      />
    </div>
  );
};

export default Chats;