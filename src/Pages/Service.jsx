import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate()
  return (
    <div  className='service mb-5'>
   
    <div className="container ">
          <div className="row d-flex justify-content-between align-items-center gap">
            <div className="col-md-6 d-grid box justify-content-between align-items-center" onClick={()=>navigate("/mobileAppDeveloment")}>
            <img src="./icons/Home/flutter1.png" alt="" className='my-3' style={{width:"70px"}}/>
             <h3 className='heading-1 text-start'>Mobile App Development</h3>
             <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>

             <span className='span'>Get Started Today</span>
         
             <br />
            </div>
            <div onClick={()=>navigate("/pythonDeveloment")}  className="col-md-6 d-grid box justify-content-center align-items-center">
            <img src="./icons/Home/python1.png" alt="" className='my-3' style={{width:"70px"}}/>
            <h3 className='heading-1 text-start'>Python Development Services</h3>
            <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>
            <span className='span'>Get Started Today</span>
         
         <br />
            </div>

            <div className="col-md-6 d-grid box justify-content-center align-items-center" onClick={()=>navigate("/aiDeveloment")}>
            <img src="./icons/Home/chat1.png" alt="" className='my-3' style={{width:"70px"}}/>
             <h3 className='heading-1 text-start'>AI & Machine Learning  </h3>
             <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>
             <span className='span'>Get Started Today</span>
             <br />
            </div>
            <div className="col-md-6 d-grid box justify-content-center align-items-center" onClick={()=>navigate("/middleware")}>
            <img src="./icons/Home/salesforce1.png" alt="" className='my-3' style={{width:"70px"}}/>
            <h3 className='heading-1 text-start'>Salesforce  </h3>
            <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>
            <span className='span'>Get Started Today</span>
            <br />
            </div>
            <div className="col-md-6 d-grid box justify-content-center align-items-center"  onClick={()=>navigate("/cloud")}>
              <img src="./icons/Home/cloud1.png" alt="" className='my-3' style={{width:"70px"}} />
             <h3 className='heading-1 text-start'>Cloud Services  </h3>
             <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>

             <span className='span'>Get Started Today</span>
             <br />
            </div>
            <div className="col-md-6 d-grid box justify-content-center align-items-center" onClick={()=>navigate("/mulesoft")}>
            <img src="./icons/Home/mulesoft1.png" alt="" className='my-3' style={{width:"70px"}}/>
            <h3 className='heading-1 text-start'>MuleSoft  </h3>
            <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>
            <span className='span'>Get Started Today</span>
            <br />
            </div>
          </div>
         </div>
    
      

        
    </div>
  )
}

export default Service