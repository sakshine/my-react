import React from 'react'
import { Link } from 'react-router-dom'
 
function Header() {
  return (
    <>
   <nav className="navbar navbar-expand-md nav fixed-top">
			  <div className="container-fluid">
			<Link to="" className="navbar-brand">
			<div className='nav1'> <h1> <b className='text-white'>F</b><b className='a'>OO</b><b className='text-white'>D I E S</b> </h1> 
		
				   </div>
			</Link>
			<button className="navbar-toggler"data-bs-toggle="collapse" data-bs-target="#a">
			  <span className="navbar-toggler-icon"></span>
			</button>
			 
			<div className="collapse navbar-collapse" id="a"> 
			  <ul className="navbar-nav ms-auto">
					<li><Link to="/" className='a'><b>HOME</b></Link></li>
					<li><Link to="Menu" className='a'><b>MENU</b></Link></li>
					<li><Link to="About" className="n-li">ABOUT US</Link></li>
					<li><Link to="ContactUs" className="n-li">CONTACT US</Link></li> 
			   </ul>
			</div>
		
		
		  </div>
		</nav>
    </>
  )
}

export default Header