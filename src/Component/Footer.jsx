import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container-fluid " style={{backgroundColor:"white",padding:"40px 0px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                   <img  src="Logo1.png" alt="" srcset="" />
                   <p className='my-4'>2025 Grownext . All Rights Reserved</p>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <div className="row d-flex justify-content-end ">
                                <div className="col-md-4 col-sm-12 col-12">
                                    <div className='d-grid justify-content-start align-items-center gap-3'>
                                        <label className='nav-link' style={{fontSize:"18px",fontWeight:"700"}} >company</label>
                                        <label className='nav-link' htmlFor="">Home</label>
                                        <label className='nav-link' htmlFor="">About Us</label>
                                        <label className='nav-link' htmlFor="">Contact Us</label>
                                        <label className='nav-link' htmlFor="">Services</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='d-grid gap-3 justify-content-start align-items-center'>
                                        <label className='nav-link' style={{fontSize:"18px",fontWeight:"700"}} >Resources</label>
                                        <label className='nav-link' htmlFor="">Blog</label>
                                        <label className='nav-link' htmlFor="">Services</label>
                                      
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='d-grid justify-content-start align-items-center gap-3'>
                                        <label className='nav-link' style={{fontSize:"18px",fontWeight:"700"}} >Legal & Policies</label>
                                        <label className='nav-link' htmlFor="">Cookies Policy</label>
                                        <label className='nav-link' htmlFor="">Privacy Policy</label>
                                        <label className='nav-link' htmlFor="">Terms & Condition</label>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer