import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate()
  return (
    <div  className='service'>
   
    <div className="container">
          <div className="row d-flex justify-content-between align-items-center  ">
            <div className="col-md-6 d-grid box justify-content-between align-items-center" onClick={()=>navigate("/mobileAppDeveloment")}>
              <img src="./icons/Home/flutter1.png" alt="" className='my-3' />
             <h3 className='heading-1 text-start'>Mobile App Development</h3>
             <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>

             <span className='span'>Get Started Today</span>
         
             <br />
            </div>
            <div onClick={()=>navigate("/pythonDeveloment")}  className="col-md-6 d-grid box justify-content-center align-items-center">
            <img src="./icons/Home/python.png" alt="" className='my-3'/>
            <h3 className='heading-1 text-start'>Python Development Services</h3>
            <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>
            <span className='span'>Get Started Today</span>
         
         <br />
            </div>
          </div>
         </div>
    
         <div className="container my-4">
          <div className="row  row d-flex justify-content-between align-items-center   " >
            <div className="col-md-6 d-grid box justify-content-center align-items-center" onClick={()=>navigate("/aiDeveloment")}>
              <img src="./icons/Home/gpt.png" alt="" className='my-3' />
             <h3 className='heading-1 text-start'>AI & Machine Learning  </h3>
             <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>
             <span className='span'>Get Started Today</span>
             <br />
            </div>
            <div className="col-md-6 d-grid box justify-content-center align-items-center" onClick={()=>navigate("/middleware")}>
            <img src="./icons/Home/salesforce.png" alt="" className='my-3'/>
            <h3 className='heading-1 text-start'>Salesforce  </h3>
            <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>
            <span className='span'>Get Started Today</span>
            <br />
            </div>
          </div>
         </div>
         
           
         <div className="container my-4">
          <div className="row row d-flex justify-content-between align-items-center   ">
            <div className="col-md-6 d-grid box justify-content-center align-items-center"  onClick={()=>navigate("/cloud")}>
              <img src="./icons/Home/cloud.png" alt="" className='my-3' />
             <h3 className='heading-1 text-start'>Cloud Services  </h3>
             <p className='text-start'>Build high-performance, cross-platform mobile apps with a seamless user experience, tailored to your business needs.</p>

             <span className='span'>Get Started Today</span>
             <br />
            </div>
            <div className="col-md-6 d-grid box justify-content-center align-items-center" onClick={()=>navigate("/mulesoft")}>
            <img src="./icons/Home/mulesoft.png" alt="" className='my-3'/>
            <h3 className='heading-1 text-start'>MuleSoft Integration  </h3>
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