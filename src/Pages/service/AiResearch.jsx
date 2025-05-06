import React from 'react'
import Reaptcontact from '../../Component/Reaptcontact'

const AiResearch = () => {
  return (
    <div className='overflow'>
    <div className="container-fluid mb-2">
    <h6 className='text-center mb-2  common' style={{color:"#075DF0",fontSize:"18px"}}><p style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/service")}>Service</p><p className='ps-2 pe-2'>/</p><p >Artificial Intelligence Research  </p></h6>
        <h1 className='text-center heading'>Artificial Intelligence Research   </h1>
        <div className="container">
           <div className="row d-flex justify-content-center">
               <div className="col-md-6">
               <div>
           <p className='text-center'>focused on building intelligent systems that drive innovation and deliver real-world value.</p>
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
    <div className="p-6 md:p-12 max-w-6xl mx-auto text-gray-800">

<div className="container">
  <div className="row common">
    <div className="col-md-6">
      
    <p className="">
        At the heart of our company is a passionate, highly skilled Artificial Intelligence research team—focused on building intelligent systems that drive innovation and deliver real-world value.
      </p>

      <p className="">
        We don’t just follow trends—we create them. Our team combines deep academic knowledge with practical industry insight to explore the full potential of AI across various sectors.
      </p>

    </div>

    <div className="col-md-6 common my-5">
              <img src="./MobileAppDevelopment/airesearch.jpg" alt="" srcset="" style={{width:"100%",objectFit:"cover",borderRadius:"30px"}} />
            </div>
    </div>

</div>
    
    </div>
     </div>

<div className="container">
  <div className="row d-flex justify-content-between align-items-center">
  <div className='layer2 col-md-4 '>
        <h5>Our Mission</h5>
        <p className='my-3'>To lead the way in AI innovation by developing robust, ethical, and scalable technologies—crafted by a team that understands both the science and the responsibility behind it.
        </p>
        </div>
        <div className='layer2 col-md-4'>
        <h5>Meet Our Research Team</h5>
        <p className='my-3'>Our AI team is composed of PhDs, engineers, and domain experts with a shared passion for discovery and problem-solving. We combine academic depth with industry agility to take ideas from research to real-world impact.
        </p>
        </div>
        <div className='layer2 col-md-4'>
        <h5>Looking Ahead</h5>
        <p className='my-3'>We're always exploring new opportunities for collaboration, industry partnerships, and joint innovation. Whether it's healthcare, finance, manufacturing, or emerging tech—we bring intelligence to every challenge.
        </p>
        </div> 
  </div>
</div>

<div className="container">
  <div className="row my-5">
  <div className="col-md-6 common my-5">
              <img src="./MobileAppDevelopment/research.jpg" alt="" srcset="" style={{width:"100%",objectFit:"cover",borderRadius:"30px"}} />
            </div>
    <div className="col-md-6">
    <div className='layer'>
    <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Machine Learning & Deep Learning:</strong> Custom models tailored to complex business problems, from predictive systems to advanced neural networks.
          </li>
          <li>
            <strong>Natural Language Processing (NLP):</strong> Building intelligent language models for understanding, generating, and interacting with human language.
          </li>
          <li>
            <strong>Computer Vision:</strong> Developing visual recognition systems for applications in automation, security, retail, and healthcare.
          </li>
          <li>
            <strong>Autonomous Decision Systems:</strong> Designing AI that can reason, plan, and make decisions in dynamic environments.
          </li>
          <li>
            <strong>Generative AI & Creativity:</strong> Exploring the future of content creation and problem-solving with generative models.
          </li>
        </ul>
    </div>
    </div>
  </div>
</div>

 
        <Reaptcontact />
  </div>
  )
}

export default AiResearch