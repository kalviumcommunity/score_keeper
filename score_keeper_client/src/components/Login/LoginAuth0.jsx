import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
// import Loading from "../Loading/Loading";

export default function LoginAuth0() {
  const { loginWithRedirect, user, isAuthenticated,  logout } =
    useAuth0();

  const [alert, setAlert] = useState(false);
  const sendUserData = async () => {
    try {
      const { name, sub } = user;
      const res = await fetch(process.env.REACT_APP_SERVER_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          notes: `<p>Hi ${name}. Write your first note here...!</p>`,
          uid: sub,
          completed_chapters: [],
        }),
      });
      const data = await res.json();

      if (data.status === 422 || data.status === 500) {
        alert(data.error);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log("An error occured: " + err);
    }
  };

  if (isAuthenticated) sendUserData();

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return (
    <div className="user-data">
      {isAuthenticated ? (
        <div
          className="user-data"
          onClick={() => setAlert(!alert)}
        >
          <img src={user.picture} alt="" className="user-pic" />
          {/* <span className="login-btn-txt">Hi, {user.name.split(" ")[0]}</span> */}
        </div>
      ) : (
        <div
          style={{backgroundColor: "black"}}
          onClick={loginWithRedirect}
        >
          <span className="login" style={{padding:"10px 30px"}}>Login</span>
        </div>
      )}
      {alert && (
        <div className="logoutAlert">
          <div className="alert-text" style={{color: "white"}}>Are you sure you want to logout?</div>
          <div className="alert-btn-container">
            <button className="no" onClick={() => setAlert(!alert)}>
              No
            </button>
            <button className="yes" onClick={handleLogout}>
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}