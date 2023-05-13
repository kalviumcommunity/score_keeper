import React from 'react'
import { useEffect,useState } from 'react';
import loai from "./Pictures/badminton.gif"


function News() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch(process.env.REACT_APP_NEWS_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles)
        setLoading(false);
      })
      .catch((error) => console.log(error));
  },);

  
  return (
    <>
      <div className="news-page">
        <h1 className='news-title' style={{textAlign:"center", marginTop:"14vh"}}><span style={{fontSize:"2.5rem"}}>Trending News</span></h1>
        <div className="news-component">
            <div className="news-modal"></div>
            <div className="news-page-data">
            {loading?(
              <div className="loading" style={{width:"40%", height:"80vh", marginLeft:"30%", marginRight:"30%"}}>
                <img className="loading" src={loai} alt="" />
                <h3 style={{marginTop:"20px", textAlign:"center", color:"white"}}>Loading Your News Details...</h3>
              </div>
            ):(
            
              <>    
                {data ? (
                    data.map((data, i) => {
                        return (
                        <div
                            className="login"
                            style={{
                            marginBottom: "1.5vh",
                            width: "90%",
                            marginLeft: "5%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                            }}
                            key={i}
                            onClick={() => window.open(data.url)}
                        >
                            <img
                            style={{ width: "20%", marginRight: "2%", borderRadius: "25px" }}
                            src={data.urlToImage}
                            alt=""
                            />
                            <div style={{ backgroundColor: "transparent" }}>
                            <h2 style={{ backgroundColor: "transparent", textAlign: "center" }}>
                                {data.title}
                            </h2>
                            <p style={{ backgroundColor: "transparent" }}>{data.description}</p>
                            </div>
                        </div>
                        );
                    })
                    ) : ( 
                    <div
                        className="error"
                        style={{
                          width: "40%",
                          height: "80vh",
                          marginLeft: "30%",
                          marginRight: "30%",
                          marginTop: "-7%",
                          marginBottom: "5%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <h1 style={{ color: "#f9004d" }}>No News For You !!</h1>
                        <p style={{ color: "white" }}>Failed to fetch news data. Please try again later.</p>
                      </div>
                      )}
                    
                </>
            )}
            </div>
        </div>
      </div> 
    </>
  )
}

export default News