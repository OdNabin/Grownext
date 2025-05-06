import React from 'react'
import Reaptcontact from '../../Component/Reaptcontact'
import { useNavigate } from 'react-router-dom'

const PythonDevelopment = () => {
  const navigate = useNavigate()

  return (
    
    <div className='overflow'>
     <div className="container-fluid mb-2">
     <h6 className='text-center mb-2  common' style={{color:"#075DF0",fontSize:"18px"}}><p style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/service")}>Service</p><p className='ps-2 pe-2'>/</p><p >Python Development Services</p></h6>
         <h1 className='text-center heading'>Python Development Services</h1>
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
        <div className="col-md-4  col-sm-4 d-flex justify-content-end align-items-center">
         <img src="./icons/Home/flutter.png" alt="" />
        </div>
        <div className="col-md-4 col-sm-4  d-flex justify-content-center align-items-center">
         <button className='btn' style={{width:"200px"}}>Book a Metting</button>
        </div>
        <div className="col-md-4  col-sm-4 d-flex justify-content-start align-items-center">
         <img src="./icons/Home/react.png" alt="" />
        </div>

       </div>
         <div className='d-flex justify-content-center my-5 align-items-center'>
            <img  src="./MobileAppDevelopment/Python Development Services.png" className='mobile' alt="" />
         </div>
    </div>
    <div style={{backgroundColor:"#EFEFEF"}}>
<div className="container">
<div className="row  d-flex justify-content-start align-items-start my-5">
           
           <div className="col-md-7 ">
             <h3 className=' heading mb-3'>
             Python Development 
             </h3>
             <p>
             Python is one of the most powerful and flexible programming languages , we harness Python to deliver robust backend systems, dynamic web apps, and intelligent automation solutions tailored to your business needs.
             </p>
             <p>Our team is proficient in major Python frameworks including Django, Flask, and FastAPI, enabling us to build everything from MVPs for startups to enterprise-grade platforms.</p>

             <div>
             <h3 className=' heading mb-3'>
             Python Development Services
             </h3>
             <ul className="ul-style">
          <li>
            <strong>Custom Web Application Development</strong><p>Dynamic and responsive applications using Django and Flask with frontend integrations (React, Vue, etc.).</p>
          </li>
          <li>
            <strong> API Development & Integration</strong> <p>RESTful and GraphQL APIs that connect your systems seamlessly and securely.</p>
          </li>
          <li>
            <strong> Automation & Scripting Solutions</strong> <p>Automate repetitive tasks and improve productivity using Python scripts and tools.</p>
          </li>
          <li>
            <strong> Data Engineering & Processing</strong> <p>Build efficient pipelines to clean, transform, and store data for analytics or machine learning.</p>
          </li>
          <li>
            <strong>Machine Learning & AI Integration</strong> <p>We integrate machine learning models with real-world applications using Python libraries like TensorFlow, scikit-learn, and PyTorch.</p>
          </li>
        </ul>
             </div>
           </div>
           <div className="col-md-5 common my-5">
             <img src="./MobileAppDevelopment/pythondevelopments.jpg" alt="" srcset="" style={{width:"100%"}} className='pyth'/>
           </div>
         </div>
</div>
 
      </div>


      <div className="container">
<div className="row  d-flex justify-content-start align-items-start my-5">
           
           <div className="col-md-7 ">
             <h3 className=' heading mb-3'>
             Our Development Process
             </h3>
         
             <ul className="ul-style">
          <li>
            <strong>Discovery & Planning</strong><p>We gather requirements, define goals, and build a roadmap.</p>
          </li>
          <li>
            <strong>Design & Architecture</strong> <p>We plan the system structure, database, and APIs for scalability and performance.</p>
          </li>
          <li>
            <strong>Agile Development</strong> <p>Iterative development in sprints, with regular demos and feedback loops.</p>
          </li>
          <li>
            <strong>Testing & QA</strong> <p>Automated and manual testing to ensure stability, security, and performance.</p>
          </li>
          <li>
            <strong>Deployment & Support</strong> <p>Seamless deployment with ongoing monitoring, maintenance, and upgrades.</p>
          </li>
        </ul>
             <div>
          
      
             </div>
           </div>
           <div className="col-md-5 common my-5">
             <img src="./MobileAppDevelopment/pythonprocess.jpg" alt="" srcset="" style={{width:"100%"}} className='pytho'/>
           </div>
         </div>
</div>

         <div>
            <Reaptcontact />
         </div>
   </div>
  )
}

export default PythonDevelopment