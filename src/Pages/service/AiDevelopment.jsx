import React from 'react'
import Reaptcontact from '../../Component/Reaptcontact'
import { useNavigate } from 'react-router-dom'

const AiDevelopment = () => {
  const navigate = useNavigate()
  return (
    <div className='overflow'>
    <div className="container-fluid mb-2">
    <h6 className='text-center mb-2  common' style={{color:"#075DF0",fontSize:"18px"}}><p style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/service")}>Service</p><p className='ps-2 pe-2'>/</p><p >AI & Machine Learning   </p></h6>
        <h1 className='text-center heading'>AI & Machine Learning   </h1>
        <div className="container">
           <div className="row d-flex justify-content-center">
               <div className="col-md-6">
               <div>
           <p className='text-center'>Build high-performance, cross-platform mobile apps 
           with a seamless user experience, tailored to your business needs..</p>
         </div>
               </div>
              
           </div>
        </div>
           <div className="row home d-flex justify-content-center align-items-center
      ">
       {/* <div className="col-md-4  col-sm-4 d-flex justify-content-end align-items-center">
        <img src="./icons/Home/flutter.png" alt="" />
       </div> */}
       <div className="col-md-4 col-sm-4  d-flex justify-content-center align-items-center">
        <button className='btn' style={{width:"200px"}}>Book a Metting</button>
       </div>
       {/* <div className="col-md-4  col-sm-4 d-flex justify-content-start align-items-center">
        <img src="./icons/Home/react.png" alt="" />
       </div> */}

      </div>
        <div className='d-flex justify-content-center align-items-center'>
           <img src="./MobileAppDevelopment/Aidevelopment.png" className='mobile' alt="" />
        </div>
   </div>
   <div style={{backgroundColor:"#EFEFEF"}}>
     {/* <div className="container my-5">
           <div className="row common">
               <div className="col-md-6 my-5">
                   <img src="./MobileAppDevelopment/Business.png" alt=""  className='img'/>
               </div>
               <div className="col-md-6"></div>
           </div>
        </div> */}
          <div className="container my-5 abouts">
         <div className="row common my-5">
           <div className="col-md-6 common my-5">
             <img src="./MobileAppDevelopment/Business.png" alt="" srcset="" />
           </div>
           <div className="col-md-6  ">
         
             <h3 className=' heading mb-3'>
             Business Management 
             </h3>
             <p>
             A robust enterprise app designed to streamline operations, improve productivity, and enhance team collaboration.
             </p>
           </div>
         </div>
        </div>
     </div>


     <div className="container my-5 abouts">
         <div className="row common my-5">
          
           <div className="col-md-6  ">
             <h3 className=' heading mb-3'>
             E-commerce Shopping
             </h3>
             <p>
             A fully customizable e-commerce solution with seamless checkout, product browsing, and secure payment integration.
             </p>
           </div>
           <div className="col-md-6 common my-5">
             <img src="./MobileAppDevelopment/ecommerce.png" alt="" srcset="" />
           </div>
         </div>
        </div>
        <Reaptcontact />
  </div>
  )
}

export default AiDevelopment