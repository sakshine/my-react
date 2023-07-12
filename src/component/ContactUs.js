import React from 'react'

function ContactUs() {
  return (
    <>
    <br/><br/><br/><br/><br/>
    <div className="container-fluid form">
	       <div className="row">
			<h1 className="why2">Contact Us</h1>
          </div>
    </div>

    <div className="container-fluid g"> 
		<div className="row">
			<div className="col-md-4 why3">
				<img src="/image/testimonial/b1.jpeg" className='hi'/>

			</div>
			<div className="col-md-4">
				<br/>
				<h2 className="text-center text-black">FORM</h2>
				<br/><br/>
				<form className="Contacta">
					
				<label className='bo'>
					Name:     
				</label>
				<br/><input type="data" name="    "/>
				<br/><br/>
				<label className='bo'>
					Last Name:
				</label>
				<br/><input type="data" name=""/>
				<br/><br/>
				<label className='bo'>
					Mobile number:
				</label>
				<br/><input type="data" name=""/>
				<br/><br/>
				<label className='bo'>
					Email:
				</label>
				<br/><input type="data" name=""/>
				<br/><br/>
				<label className='bo'>
					password:
				</label >
				<br/><input type="data" name=""/>
				<br/><br/>
				<label className='bo'>
					Gender:
				</label>
				<input type="radio" value="MALE" name="gender"/> Male <span/>
        <input type="radio" value="FEMALE" name="gender"/> Female
				<br/><br/>
				<label className='bo'>
					Address:
				</label>
				<br/><textarea></textarea>
				<br/><br/>
				<button type="button" className="btn btn-primary">Submit  </button> <span/>
				<button type="button" className="btn btn-primary">Reset  </button>
			</form>
			</div>
			<div className="col-md-4 why3">
				<img src="/image/testimonial/g1.jpeg"/>
			</div>
		</div>
	</div>
  
    </>
  )
}

export default ContactUs