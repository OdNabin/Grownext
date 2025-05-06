import React from 'react'
import Reaptcontact from '../../Component/Reaptcontact'
import { useNavigate } from 'react-router-dom'

const Mulesoft = () => {
  const navigate = useNavigate()
  return (
    <div className='overflow'>
    <div className="container-fluid mb-2">
    <h6 className='text-center mb-2  common' style={{color:"#075DF0",fontSize:"18px"}}><p style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/service")}>Service</p><p className='ps-2 pe-2'>/</p><p >MuleSoft Integration   </p></h6>
        <h1 className='text-center heading'>MuleSoft Integration   </h1>
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
           <img src="./MobileAppDevelopment/mulesoft-home.png" className='mobile responsive' alt="" />
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
         <div className="row  my-5">
         <div className="col-md-6  m">
    
    <p>
We specialize in delivering end-to-end MuleSoft integration solutions that help enterprises unify their applications, data, and devices. Whether it's legacy modernization, API-led connectivity, or third-party integration, our certified MuleSoft experts deliver scalable, secure, and agile solutions to drive digital transformation.
    </p>

 <div className='box-layer'>
 <ul className="ul-style list-disc list-inside space-y-3 m">
    <h5>what we offer</h5>
          <li>
            <p>MuleSoft Anypoint Platform Implementation</p>
          </li>
          <li>
           <p> API Design, Development & Management</p>
          </li>
          <li>
          <p>System Integration & Legacy Modernization</p>
          </li>
          <li>
      <p>Microservices Architecture Enablement</p>
          </li>
          <li>
            <p>Cloud-to-On-Premise & SaaS Integration</p>
          </li>
          <li>
            <p>Real-Time Data Synchronization</p>
          </li>
          <li>
            <p>MuleSoft Runtime & Application Management</p>
          </li>
        </ul>
 </div>
  </div>
           <div className="col-md-6 common my-5">
             <img src="./MobileAppDevelopment/mulesoftint.jpg" className='mulesoft' alt="" srcset="" />
           </div>
        
         </div>
        </div>
     </div>


     <div className="container my-5 abouts">
         <div className="row common my-5">
          
           <div className="col-md-6  ">
           <div className='box-layer'>
 <ul className="ul-style list-disc list-inside space-y-3 m">
    <h5> Why Choose Us</h5>
          <li>
            <p>Certified MuleSoft Developers & Architects</p>
          </li>
          <li>
           <p>Proven success across banking, healthcare, retail, and logistics</p>
          </li>
          <li>
          <p>Deep experience with API-led connectivity and RAML/OAS standards</p>
          </li>
          <li>
      <p>Accelerated delivery using reusable API assets</p>
          </li>
          <li>
            <p>Focus on performance, security, and scalability</p>
          </li>
          <li>
            <p>Integration across Salesforce, SAP, Oracle, Workday, ServiceNow, and more</p>
          </li>
      
        </ul>
 </div>
           </div>
           <div className="col-md-6 common my-5">
             <img src="./MobileAppDevelopment/mulesoft1.jpg" alt="" srcset="" />
           </div>
         </div>
        </div>
        <Reaptcontact />
  </div>
  )
}

export default Mulesoft