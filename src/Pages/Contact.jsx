import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container contact" style={{padding:"0px"}}>
        <div className="row">
            <div className="col-md-6 form" >
             <h3 className='ps-3 heading'>Contact us</h3>
             <p className='ps-3'>Our friendly team would love to hear from you.</p>
             <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="name">First Name</label>
                      <input type="text" className='form-control' placeholder='First Name'/>  
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" className='form-control' placeholder='Last Name'/>  
                    </div>
                    <div className='my-3'>
                        <label htmlFor="">Email</label>
                        <input type="text"  className='form-control  
                        ' placeholder='You@company.com' />
                    </div>

                    <div className=''>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder='Enter Your Number'  className='form-control 
                        ' />
                    </div>

                    <div className='my-3 col-md-12'>
                        <label htmlFor="">Message</label>
                     <div>
                     <textarea name="" style={{width:"100%"}} rows={6} cols={80} id=""></textarea>
                     </div>
                    </div>
                    
                    <div className='d-flex justify-content-start'>
                      <input type="checkbox" />
                      <label className='ps-2' style={{fontWeight:"400",color:"gray"}} htmlFor="">You agree to our friendly privacy policy.</label>
                    </div>

                    <div className='d-flex justify-content-center align-items-center w-100 my-4' style={{padding:"0px 30px",borderRadius:"30px"}}>
                        <button className='text-center form-control btn'>
                           Send Message
                        </button>
                    </div>
                </div>
             </div>
            </div>
            <div className="col-md-6">
                <img src="./contact/contact-img.png" alt="" />
            </div>
        </div>
      </div>

     <div style={{backgroundColor:"#EAEAE8"}} className='map'>
     <div className="container">
     <h3 className='ps-3 heading text-center'>Our location</h3>
     <p className='ps-3 text-center mb-3'>Come visit our friendly team at one of our offices.</p>
   <div className="container">
   <ul class="nav nav-pills mb-3 d-flex justify-content-between" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <span class="nav-link text-center active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">India</span>
  </li>
  <li class="nav-item" role="presentation">
    <span class="nav-link text-center" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Uk</span>
  </li>
  <li class="nav-item" role="presentation">
    <span class="nav-link text-center" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Us</span>
  </li>

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5100.081133919991!2d78.55630262438845!3d17.381852327877855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIyJzQ2LjciTiA3OMKwMzMnMjguMSJF!5e0!3m2!1sen!2sin!4v1743763253886!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.602871661592!2d0.05825747651945148!3d52.28691137200093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8743aacc15555%3A0xe60f9818994d025a!2sGrowNext!5e0!3m2!1sen!2sin!4v1744284418085!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.602871661592!2d0.05825747651945148!3d52.28691137200093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8743aacc15555%3A0xe60f9818994d025a!2sGrowNext!5e0!3m2!1sen!2sin!4v1744284418085!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

</div>
   </div>
      <div className="container my-5">
          <div className="row">
            <div className="col-md-4 about-box">
             <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./contact/Location.png" alt="" />
             </div>
               <h5>Location</h5>
               <p>Driven by passion, we stay 
               ahead to deliver cutting-edge   .</p>
            </div>
            <div className="col-md-4 about-box">
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./contact/Phone.png" alt="" />
             </div>
               <h5>Phone</h5>
               <p>We provide the most advanced
                  to keep you ahead.</p>
            </div>
            <div className="col-md-4 about-box">
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./contact/Email.png" alt="" />
             </div>
               <h5>Email</h5>
               <p>We invest in emerging tech to 
               bring you the latest innovations.</p>
            </div>
          </div>
         </div>
      </div>
     </div>
    </div>
  )
}

export default Contact