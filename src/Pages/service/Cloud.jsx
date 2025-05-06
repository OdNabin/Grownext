import React from 'react'
import Reaptcontact from '../../Component/Reaptcontact'
import { useNavigate } from 'react-router-dom'

const Cloud = () => {
  const navigate = useNavigate();
  return (
    <div className='overflow'>
    <div className="container-fluid mb-2">
    <h6 className='text-center mb-2  common' style={{color:"#075DF0",fontSize:"18px"}}><p style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/service")}>Service</p><p className='ps-2 pe-2'>/</p><p >Cloud Services &   </p></h6>
        <h1 className='text-center heading'>Cloud Services   </h1>
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
           <img src="./MobileAppDevelopment/cloud-home.png" className='mobile responsive' alt="" />
        </div>
   </div>
   <div>
<div className="container">
  <div className="row">
  <p className='text-center'>From seamless cloud migrations to cloud-native app development and DevOps automation, we help businesses fully leverage the power of the cloud. Whether you’re running mission-critical workloads or building your next big idea — our cloud solutions are built for performance, resilience, and growth.</p>
  </div>
</div>
   </div>
   <div style={{backgroundColor:"#EFEFEF"}}>
     
          <div className="container my-5 abouts">
     
         <div className="row common my-5">
           <div className="col-md-7 common my-5">
    
           <ul className="ul-style">
          <li>
            <strong> Cloud Consulting & Strategy</strong><p>We assess your business needs and design a tailored cloud adoption roadmap.</p>
          </li>
          <li>
            <strong>Migration & Modernization</strong> <p>Seamless migration of applications, databases, and infrastructure with minimal downtime.</p>
          </li>
          <li>
            <strong> DevOps & Automation</strong> <p>Accelerate delivery pipelines with Infrastructure as Code (Terraform, Ansible), CI/CD, and automated monitoring.</p>
          </li>
          <li>
            <strong> Cloud-Native Development</strong> <p>Build and deploy microservices-based, event-driven applications with containers, serverless, and APIs.</p>
          </li>
          <li>
            <strong> Security & Compliance</strong> <p>Ensure data protection, IAM governance, and compliance with industry standards like ISO, SOC 2, and HIPAA.</p>
          </li>
        </ul>
           </div>
           <div className="col-md-5  float-end">
         
           <img src="./MobileAppDevelopment/cloud.jpg" className='cloud' alt="" srcset="" />
           </div>
         </div>
        </div>
     </div>


     <div className="container my-5 abouts">
     <div className="container   m">
         <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Which cloud platform should I choose: AWS, Azure, or GCP?</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
  <p>It depends on your needs, integrations, and budget. We help you evaluate and choose the best fit — or even support hybrid/multi-cloud strategies.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong>How long does a typical migration take?</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>From a few weeks to a few months depending on the size, complexity, and readiness of your systems.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Do you offer post-deployment support?</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Yes. We provide ongoing cloud support, monitoring, security audits, and optimization services.</p>
      </div>
    </div>
  </div>
  {/* <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <strong>What makes your call center services unique?</strong>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
</div>
         </div>

        </div>
        <Reaptcontact />
  </div>
  )
}

export default Cloud