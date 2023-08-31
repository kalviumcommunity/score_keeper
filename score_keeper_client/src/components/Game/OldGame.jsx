import React from "react";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"
import loai from "../Pictures/Loaing.gif"
import LoginButton from "../Login/LoginButton";

function OldGame() {
  // Make a GET request to your backend API
  const [data, setData] = useState([]);
  const { user } = useAuth0();
  const [loading, setLoading] = useState(true)
  const { isAuthenticated } = useAuth0();

  useEffect(() => {

    if(user){
    // console.log('effec',user)

    fetch(process.env.REACT_APP_FETCH_URI+`/${user.sub}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.reverse());
        setLoading(false);
      })
      .catch((error) => console.log(error));}
  }, [user]);
  
  return (
    <>
    
      <div className="game-page">
        <div className="picture-gp">
          <img className="pic" src='https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125179/pngegg.61e13af42a8dafef9817_bjry7s.png' alt="react-app" />
        </div>
        <div className="old-gamepage-content">
          <div className="old-gamepage-heading-head">
            <h1 className="old-gamepage-heading">Played Games</h1>
            <Link to={"/leaderboard"} className="old-gamepage-heading-l" style={{fontWeight:"300"}}>Leader Board</Link>
          </div>
          <div className="old-gamepage-data">
            {isAuthenticated?(
              <>
            {loading?(
              <div className="loading">
                <img className="loading" src={loai} alt="" />
                <h3 style={{marginTop:"-25px", textAlign:"center"}}>Loading Your Game Details...</h3>
              </div>
            ):(
              <>
          {data.map((item, i) => {
            return (
              <div
                className="login"
                style={{ marginRight: "0px", marginBottom:"1vh", padding: "20px 30px", border:"2px solid black"}}
                key={i}
              >
                <h1
                  style={{
                    backgroundColor: "transparent",
                    marginTop: "0px",
                    marginBottom: "6px",
                    textAlign:"center",
                    // boxShadow:"0px 0px 100px 0px black, 0px 0px 100px 0px white"
                  }}
                >
                  {item.title}
                </h1>
                <h1 style={{
                    backgroundColor: "transparent",
                    fontSize:"x-large",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {item.player1} vs {item.player2}
                </h1>
                <h2
                  style={{
                    backgroundColor: "transparent",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize:"x-large",
                  }}
                >
                  Score: {item.score1} - {item.score2}
                </h2>
                <p
                  style={{
                    backgroundColor: "transparent",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                >
                  {item.winText}
                </p>
              </div>
            );
          })}
              </>
            )}
            </>
            ):(
              <>
                <div className="loading" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#e1e1e1"}}>
                  <h3 style={{ backgroundColor:"transparent", fontSize:"xx-large", width:"60%" , textAlign:"center"}}>Login To view Played Games</h3>
                  <LoginButton style={{margin:"auto"}}/>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OldGame;
