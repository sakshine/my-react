import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
    <br/><br/><br/><br/><br/>
   <div className="container-fluid bak">
   	<div className="row">
     <img src="/images/testimonial/menu.webp" className="w-100"/> 
     <h1 className='text-center '>MENU</h1>
   </div>
   </div>

   <div className="menud">
     <Link to="" className="menue space">All-TIME CHILLERS</Link> <span/>
     <Link to="" className="menue space">ALL-DAY DELIGHTS</Link> <span/>
     <Link to="" className="menue space">NUTRITIONAL</Link> <span/>
     <Link to="" className="menue space">SWEET TOOTH</Link> <span/>
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