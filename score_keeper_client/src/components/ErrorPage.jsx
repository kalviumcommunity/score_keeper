import React from 'react'
import Spline from '@splinetool/react-spline'

function ErrorPage() {
  return (
    <div class="err-content">
        <Spline 
          className='Spline'
          scene='https://prod.spline.design/s-Ju3hpzU123GPax/scene.splinecode'
        />
        {/* <h1 className='er'>Error: 404</h1>
        <h3 className='erer'>Page not found !!</h3>
        <p className='ererer'>We can't find the page you are looking for.</p> */}
    </div>
  )
}

export default ErrorPage