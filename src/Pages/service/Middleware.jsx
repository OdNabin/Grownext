import React from 'react'
import Reaptcontact from '../../Component/Reaptcontact'
import { useNavigate } from 'react-router-dom'

const Middleware = () => {
  const navigate = useNavigate()
  return (
    <div className='overflow'>
    <div className="container-fluid mb-2">
    <h6 className='text-center mb-2  common' style={{color:"#075DF0",fontSize:"18px"}}><p style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/service")}>Service</p><p className='ps-2 pe-2'>/</p><p >Driving Global Success with Salesforce Solutions   </p></h6>
        <h1 className='text-center heading'>Driving Global Success with Salesforce Solutions  </h1>
        <div className="container">
           <div className="row d-flex justify-content-center">
               <div className="col-md-6">
               <div>
           <p className='text-center'>Streamlining data flow and boosting operational efficiency with MuleSoft & Salesforce integration.</p>
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
           <img src="./MobileAppDevelopment/middle.png" className='mobile' alt="" />
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
  <div className="container">
    <div className="row">
      <div className="col-md-7 m">
    <p style={{textAlign:"justify"}}>  We specialize in delivering Salesforce projects for companies across various industries. Our team has deep experience in implementing, customizing, and managing Salesforce platforms to support complex business needs.</p>

    <p style={{textAlign:"justify"}}>
    Whether it’s Sales Cloud, Service Cloud, or Marketing Cloud, we help our clients streamline operations, improve customer engagement, and drive growth — across regions and time zones.
    </p>

    <img src="./MobileAppDevelopment/salesforceimg.jpg" className='sales-img'  alt="" />
      </div>

    <div className='col-md-5'>
    <div className='m box-layer'>
    <ul className="list-disc list-inside space-y-3 ">
      <h5 >What We Offer</h5>
    <li>Salesforce implementation and support</li>
          <li>Integration with enterprise systems</li>
          <li>Solutions tailored for global operations</li>
          <li>Scalable and secure architecture</li>
          <li>Experience with multi-language and multi-region setups</li>
        </ul>
        <ul className="list-disc list-inside space-y-3 m">
      <h5 >Why Work With Us</h5>
      <li>Skilled team with deep Salesforce expertise</li>
          <li>Focused on client needs and measurable outcomes</li>
          <li>Agile, responsive, and detail-oriented</li>
          <li>Experience with Sales Cloud, Service Cloud, and Marketing Cloud</li>
          <li>Already trusted by clients for quality delivery</li>
        </ul>
        
    </div>
    
    </div>
    </div>
  </div>
     </div>

     <div className="container m">
      <div>
        <h4 className='text-center'>
        Driving Results for Forward-Thinking Businesses</h4>
        <p className='text-center'>Our professionals have successfully worked on Salesforce projects for global clients, helping teams improve productivity, automate processes, and enhance customer experiences.</p>
      </div>
     </div>


        <Reaptcontact />
  </div>
  )
}

export default Middleware