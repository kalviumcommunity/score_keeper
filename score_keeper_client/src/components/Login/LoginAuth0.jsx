import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import loai from "../Pictures/Loaing.gif"


export default function LoginAuth0() {
  const { loginWithRedirect, user, isAuthenticated,isLoading,  logout } =
    useAuth0();

  const [alert, setAlert] = useState(false);
  const authDataRef = useRef(null);

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (authDataRef.current && !authDataRef.current.contains(event.target)) {
        setAlert(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [alert]);

  if(isLoading){
    return <img src={loai} style={{marginRight:"3vw"}} alt="" className="user-pic" />
  }

  return (
    <div className="user-data">
      {isAuthenticated ? (
        <div
          className="user-data"
          onClick={() => setAlert(!alert)}
        >
          <img src={user.picture} alt="" className="user-pic" />
        </div>
      ) : (
        <div
          style={{backgroundColor: "transparent", height:"fit-content"}}
          onClick={loginWithRedirect}
        >
          <div className="login" style={{padding:"10px 30px"}}>Login</div>
        </div>
      )}
      {alert && (
        <div className="logoutAlert" ref={authDataRef}>
          <div className="alert-text" style={{color: "white"}}>Are you sure you want to logout?</div>
          <div className="alert-btn-container">
            <button className="no" onClick={() => setAlert(!alert)}>No</button>
            <button className="yes" onClick={handleLogout}>Yes</button>
          </div>
        </div>
      )}
    </div>
  );
}
