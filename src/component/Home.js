import React from 'react'

function Home() {
  return (
    <> 
    <br/><br/><br/><br/>
   <div>
      <div className="container-fluid banner">
        <div className="row">
          <div className="carousel slide" data-bs-ride="carousel" id="a">

            <div className="carousel-indicators"> 
              <button type="button" data-bs-target="#a" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#a" data-bs-slide-to="1" ></button>
            </div>
            <div className="carousel-inner"> 
              <div className="carousel-item active" data-bs-interval="2000">

                <img src="/image/slider/sliderfood1.jpg" className="w-100" alt="..." />
              </div>

              <div className="carousel-item" data-bs-interval="2000">

                <img src="/image/slider/sliderfood2.jpg" className="w-100" alt="..." />
              </div>

              <div className="carousel-item" data-bs-interval="2000">

                <img src="/image/slider/sliderfood3.jpg" className="w-100" alt="..." />
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#a" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#a" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
        </div>
        

<br/><br/><br/><br/><br/><br/>

        <div className="logo">
      <center>
          <h2 className='p'>HEALTHY <b className='text-white'>FOOD</b></h2>
      </center>
    </div>


    <div className="container-fluid why">
       <div className="container">
         <div className="row">
          <h1 className="title text-center mt-4">INDIAN CUISINE</h1>
          <br/>
           <div className="col-md-4">
             <img src="/image/testimonial/indian1.jpg"/>
           </div>

           <div className="col-md-4">
             <img src="/image/testimonial/indian2.jpg"/>
           </div>

           <div className="col-md-4">
             <img src="/image/testimonial/indian3.jpg"/>
           </div>
         </div>
       </div>
     </div>
<br/><br/><br/><br/><br/>

     <div className="container-fluid why1">
       <div className="container">
         <div className="row">
          <br/>
          <h1 className="title text-center mt-4">ITALIAN CUISINE</h1>
           <div className="col-md-4">
             <img src="/image/testimonial/italian1.webp"/>
           </div>

           <div className="col-md-4">
             <img src="/image/testimonial/italian2.jpg"/>
           </div>

           <div className="col-md-4">
             <img src="/image/testimonial/italian3.jpeg"/>
           </div>
         </div>
       </div>
     </div>
     
     <div className="container-fluid why2">
       <div className="container">
         <div className="row">
          
          <h1 className="title text-center mt-4 text-black">FRENCH CUISINE</h1>
          <br/>
           <div className="col-md-4">
             <img src="/image/testimonial/french1.jpg"/>
           </div>

           <div className="col-md-4">
             <img src="/image/testimonial/french2.jpg"/>
           </div>

           <div className="col-md-4">
             <img src="/image/testimonial/french3.jpg"/>
           </div>
         </div>
 <br/>
       </div> 
     </div>
     </div>
     

     
      </> 
      )
}

      export default Home