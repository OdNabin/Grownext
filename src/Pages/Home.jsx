import React from 'react'
import { useNavigate } from 'react-router-dom'
import Reaptcontact from '../Component/Reaptcontact'
import Service from './Service'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='overflow'>
    <div className="container">
       <div>
        <p className='text-center cen'>Innovate. Transform. Thrive.</p>
       </div>
       <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 ">
          <h1 className='heading text-center'>Empowering Businesses with x  
          Innovative Software   </h1>
        </div>
       </div>
       <div className="row d-flex justify-content-center align-items-center
       ">
        <div className="col-md-5 big">
          <p className='text-center ps-5 pe-5 '>
          Expertise in AI, ML, Python, Middleware, 
          Cloud, and Mobile Services
          </p>
        </div>

       </div>
       {/* <div className="row home d-flex justify-content-center align-items-center
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

       </div> */}

    </div>
    <div className="container home-page   d-flex justify-content-center align-items-center ">
        <img src="./icons/Home/home2.png" alt="" className='Home-page home-pages' style={{width:"100%"}} />
     
     <div className='posi'>
     <img src="./icons/Home/mulesoft1.png" alt="" className='my-3' />
     </div>
     <div className='posin'>
     <img src="./icons/Home/salesforce1.png" alt="" className='my-3'/>
     </div>
       </div>


     

     

<div className="container m">
  {/* <p className='thome-pagesext-center text-center jus cen'>Join US</p> */}
  <div className='d-flex company-logos justify-content-between align-items-center'>
  <div>
      <img src="./icons/Home/HNPS.png" alt="" />
    </div>
    <div>
      <img src="./icons/Home/partner2.png" alt="" className='partner-img' />
    </div>
    <div>
      <img src="./icons/Home/grafterr.svg" alt="" />
    </div>
    <div>
      <img src="./icons/Home/mcca.png" alt="" />
    </div>
    <div>
      <img src="./icons/Home/elms.png" alt="" />
    </div>
 
  </div>
</div>

<div className='m'>
  <Service/>
</div>



<div className="container mb-5">
         <div className='jus'>
        <p className='text-center ' style={{color:"#075DF0",fontSize:"18px"}}>Our Values</p>
       </div>
       <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 ">
          <h1 className='heading text-center'>The Principles That Drive Us Forward</h1>
        </div>
       </div>
       <div className="row d-flex justify-content-center align-items-center
       ">
        <div className="col-md-6">
          <p className='text-center  '>
          We are committed to excellence, integrity, and delivering value to our clients. Our core values define who we are and how we work.
          </p>
        </div>
        </div>
         </div>
<div className="container ">
          <div className="row group">
            <div className="col-md-4 about-box ">
            <div className='home-box'>
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon2.png" alt="" />
             </div>
               <h5>Innovation First</h5>
               <p>We constantly explore, experiment, and evolve. We believe the best solutions come from curiosity and bold thinking.</p>
            </div>
            </div>
            <div className="col-md-4 about-box">
            <div className='home-box'>
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon2.png" alt="" />
             </div>
               <h5>Quality Over Everything</h5>
               <p>From code to customer experience, we hold ourselves to the highest standards. Good enough is never enough.</p>
            </div>
            </div>
            <div className="col-md-4 about-box ">
            <div className='home-box'>
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon2.png" alt="" />
             </div>
               <h5>User-Centric Design</h5>
               <p>We build software with the user in mind—intuitive, accessible, and built to solve real problems.</p>
            </div>
            </div>
            <div className="col-md-4 about-box m">
            <div className='home-box'>
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon2.png" alt="" />
             </div>
               <h5>Collaboration & Transparency</h5>
               <p>We work as one team—open, honest, and supportive. Communication and trust are at the core of how we build.</p>
            </div>
            </div>
            <div className="col-md-4 about-box m">
            <div className='home-box'>
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon2.png" alt="" />
             </div>
               <h5>Agility with Purpose</h5>
               <p>We move fast, but we never rush. We adapt quickly to change while staying focused on long-term goals.</p>
            </div>
            </div>
            <div className="col-md-4 about-box m">
            <div className='home-box'>
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon2.png" alt="" />
             </div>
               <h5>Impact-Driven Work</h5>
               <p>We measure success by the value we deliver. Our work must create positive, lasting change for users, clients, and communities.</p>
            </div>
            </div>
          </div>
         </div>

         

    


         <div className='d-grid justify-content-center align-items-center m'>
          <p className='text-center'>Partner with Us Today</p>
          <button className='btn '>Talk to an Expert</button>
         </div>


         <div style={{backgroundColor:"white",padding:"30px 0px"}} className='m'>
         <div className="container " >
         <h1 className='heading '>Reviews</h1>
          <div className="row">
            <div className="col-md-3 about-box ">
            <div className='home-box'>
               <p className='rev'>"GrowNext helped us streamline our digital operations with their expert Mulesoft and Salesforce   . Their team is knowledgeable, professional, and highly responsive!"</p>
               <div className='d-flex mb-3 jus '>
             <img src="./icons/about icons/star.png" alt="" />
             </div>
            </div>
            </div>
            <div className="col-md-3 about-box ">
            <div className='home-box'>
               <p className='rev'>"GrowNext helped us streamline our digital operations with their expert Mulesoft and Salesforce   . Their team is knowledgeable, professional, and highly responsive!"</p>
               <div className='d-flex mb-3 jus'>
             <img src="./icons/about icons/star.png" alt="" />
             </div>
            </div>
            </div>
            <div className="col-md-3 about-box ">
            <div className='home-box'>
               <p className='rev'>"GrowNext helped us streamline our digital operations with their expert Mulesoft and Salesforce   . Their team is knowledgeable, professional, and highly responsive!"</p>
               <div className='d-flex mb-3 jus'>
             <img src="./icons/about icons/star.png" alt="" />
             </div>
            </div>
            </div>
            <div className="col-md-3 about-box ">
            <div className='home-box'>
               <p className='rev'>"GrowNext helped us streamline our digital operations with their expert Mulesoft and Salesforce   . Their team is knowledgeable, professional, and highly responsive!"</p>
               <div className='d-flex mb-3 jus'>
             <img src="./icons/about icons/star.png" alt="" />
             </div>
            </div>
            </div>
          </div>
         </div>
       </div>

         <div className="container   m">
         <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>What industries do you specialize in?</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong>How does your IT resourcing work?</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>What makes your call center services unique?</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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

         <div>
       <div className="container  m">
        <div className="row">
        <div className="col-md-12 ">
            <div className='  '>
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/Avatar group.png" alt="" />
             </div>
               <h5 className='text-center'>Still have questions?</h5>
               <p className='text-center'>We provide the most advanced
                  to keep you ahead.</p>
            </div>
            </div>
        </div>
       </div>
         </div>


         <div className="container m">
          <h3 className='heading'>Insights & Blogs</h3>
          <p className='mb-5'>Stay updated with expert insights, technical guides, and industry best practices:</p>
         <div className="row mb-5 d-flex justify-content-between">
                <div className="col-md-3">
                <div class="card" >
  <img src="./blog/blog-1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
 <div className='d-flex justify-content-between align-items-start'>
 <h5 class="card-title">DataWeave 2: Mapping Keys to Values in JSON</h5>
 <img src="./blog/arrow-up-right.png" alt="" />
 </div>
    <p class="card-text">Master complex data manipulations with real-world examples.</p>

  </div>
</div>
                </div>
                <div className="col-md-3">
                <div class="card" >
  <img src="./blog/blog-2.png" class="card-img-top" alt="..."/>
  <div class="card-body">
 <div className='d-flex justify-content-between align-items-start'>
 <h5 class="card-title">Advanced DataWeave Transformations</h5>
 <img src="./blog/arrow-up-right.png" alt="" />
 </div>
    <p class="card-text">Master complex data manipulations with real-world examples.</p>
    
  </div>
</div>
                </div>
                <div className="col-md-3 card-box">
                <div class="card" >
  <img src="./blog/blog-3.png" class="card-img-top" alt="..."/>
  <div class="card-body">
  <div className='d-flex justify-content-between align-items-start'>
 <h5 class="card-title">Setting Up VPC in CloudHub</h5>
 <img src="./blog/arrow-up-right.png" alt="" />
 </div>
    <p class="card-text">A step-by-step guide to creating a secure Virtual Private Cloud.</p>

  </div>
</div>
                </div>
            </div>
         </div>
         <Reaptcontact />
</div>
  )
}

export default Home