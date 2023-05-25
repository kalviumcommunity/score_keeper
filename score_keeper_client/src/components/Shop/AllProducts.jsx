import React from 'react'
import { useEffect, useState } from 'react';
import loai from "../Pictures/badminton.gif"
import { Link } from 'react-router-dom'
import { FaFilter } from 'react-icons/fa';

function AllProducts() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(false);

    useEffect(() => {

        function handleClickOutside() {
            setAlert(true);
        }
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [alert]);

    useEffect(() => {
        fetch(process.env.REACT_APP_PRODUCT_URI)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => console.log(error));
    },);


  return (
    <div className='shop'>
        <div className="hero-nav">
           <Link className='nav-heading' to={"/shop"}>All Products</Link>
           <Link className='nav-heading' to={"/shop/shuttels"}>Shuttels</Link>
           <Link className='nav-heading' to={"/shop/racquets"}>Racquets</Link>
           <Link className='nav-heading' to={"/shop/grips"}>Grips</Link> 
           <Link className='nav-heading' to={"/shop/shoes"}>Shoes</Link> 
        </div>
        <div>
        {loading?(
            <div className="loading" style={{width:"auto", height:"71.5vh", margin:"auto", display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10vh"}}>
                <img className="loading" src={loai} alt="" />
                <h3 style={{marginTop:"20px", textAlign:"center", color:"white"}}>Loading Your Shopping Details...</h3>
              </div>
            ):(
            <>
            <div className='page-heading-div'>
                <h1 className='page-heading'>All Products :</h1>
                <FaFilter className='filter' style={{width:"10vw", height:"3vh", marginTop:"1vh"}} onClick={() => setAlert(alert)}/>
                {alert && (
                <div className="hero-nav-mob">
                    <Link className='nav-heading' to={"/shop"}>All Products</Link>
                    <Link className='nav-heading' to={"/shop/shuttels"}>Shuttels</Link>
                    <Link className='nav-heading' to={"/shop/racquets"}>Racquets</Link>
                    <Link className='nav-heading' to={"/shop/grips"}>Grips</Link> 
                    <Link className='nav-heading' to={"/shop/shoes"}>Shoes</Link> 
                </div>
                )}
            </div>
            <div className='contents'>
            {data.map((item, i) => {
                    return(
                    <div className="card" key={i}>
                        <img className='card-img' src={
                            item.urlToImage
                            ?item.urlToImage
                            :"https://www.kreedon.com/wp-content/uploads/2018/11/badminton-grass-racket-115016-696x464.jpg"
                        } alt="" />
                        <div className='card-content'>
                            <div className='card-content-top'>
                                <h1 className='product-name'>{item.productName}</h1>
                                <div className='rating'>
                                    <h2 className='product-rating'>{item.rating}</h2>
                                    <p className='product-ratings'>{item.like} ratings</p>
                                </div>
                            </div>
                            <div className='price-url'>
                                <h1 className='product-price'>{item.price}</h1>
                                <button className='url' onClick={() => window.open(item.url)}>Buy</button>
                            </div>
                            <p className='product-decription'>{item.decription}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            </>
            )}
            </div>
    </div>
  )
}

export default AllProducts