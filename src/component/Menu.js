import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
    <br/><br/><br/><br/><br/>
   <div className="container-fluid bak">
   	<div className="row">
     <img src="images/testimonial/menu.webp" className="w-100"/> 
     <h1>MENU</h1>
   </div>
   </div>

   <div className="menud">
     <Link to="" className="menue space">ALL-TIME CHILLERS</Link>
     <Link to="" className="menue space">ALL-DAY DELIGHTS</Link>
     <Link to="" className="menue space">SWEET TOOTH X 32</Link>
     <Link to="" className="menue space">NUTRITIONAL INFO</Link>
</div>

    <div className="container-fluid">
   	<div className="row">
     <img src="/image/testimonial/menui.jpeg" className='sz'/>
   </div>
   </div>
    </>
  )
}

export default Menu