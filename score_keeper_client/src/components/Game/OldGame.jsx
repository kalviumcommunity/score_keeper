import React from "react";
import badminton from "../Pictures/pngegg.png";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loai from "../Pictures/Loaing.gif"

function OldGame() {
  // Make a GET request to your backend API
  const [data, setData] = useState([]);
  const { user } = useAuth0();
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    if(user){
    console.log('effec',user)

    fetch(process.env.REACT_APP_WEB_URI+`/${user.sub}`)
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
          <img className="pic" src={badminton} alt="react-app" />
        </div>
        <div className="old-gamepage-content">
          <h1 className="old-gamepage-heading">Played Games</h1>

          <div className="old-gamepage-data">
            {loading?(
              <div className="loading">
                <img className="loading" src={loai} alt="" />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default OldGame;
