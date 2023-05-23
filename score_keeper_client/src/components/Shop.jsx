import React from 'react'
import { useEffect, useState } from 'react';
import loai from "./Pictures/badminton.gif"

function Shop() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    
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
        {loading?(
              <div className="loading" style={{width:"auto", height:"75vh", margin:"auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <img className="loading" src={loai} alt="" />
                <h3 style={{marginTop:"20px", textAlign:"center", color:"white"}}>Loading Your News Details...</h3>
              </div>
            ):(
            <>
            <h1>All Products :</h1>
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
  )
}

export default Shop