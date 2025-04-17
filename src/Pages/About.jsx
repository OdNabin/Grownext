import React from 'react'

const About = () => {
  return (
    <div>
        <div className="container mb-2">
          <h6 className='text-center mb-2 heading' style={{color:"#075DF0",fontSize:"18px"}}>About Us</h6>
          <h1 className='text-center heading'>Know us more</h1>

         <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                <div>
            <p className='text-center'>Welcome to GrowNext, where innovation meets technology. We are a leading software development company dedicated to delivering cutting-edge    that empower businesses to thrive in the digital age. Our expertise spans a diverse array of technologies, including Python, Artificial Intelligence, Machine Learning, Middleware    like MuleSoft and Salesforce, as well as Cloud and Mobile Services, particularly with Flutter.</p>
          </div>
                </div>
                <div className="col-md-7 my-5">
                <div>
            <p className='text-center'>At GrowNext, we believe in harnessing the power of technology to create products that not only meet the needs of our clients but also push the boundaries of what is possible. Our talented team of developers, data scientists, and engineers work collaboratively to build proprietary technologies that drive efficiency and enhance user experiences.</p>
          </div>
                </div>
            </div>
         </div>

         <div className="container ">
          <div className="row">
            <div className="col-md-4 about-box">
             <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon1.png" alt="" />
             </div>
               <h5>Pioneering Technology</h5>
               <p>Driven by passion, we stay 
               ahead to deliver cutting-edge   .</p>
            </div>
            <div className="col-md-4 about-box">
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon2.png" alt="" />
             </div>
               <h5>Innovation at Your Fingertips</h5>
               <p>We provide the most advanced
                  to keep you ahead.</p>
            </div>
            <div className="col-md-4 about-box">
            <div className='d-flex mb-3 justify-content-center align-items-center'>
             <img src="./icons/about icons/icon3.png" alt="" />
             </div>
               <h5>Future-Ready Investments</h5>
               <p>We invest in emerging tech to 
               bring you the latest innovations.</p>
            </div>
          </div>
         </div>
         <div className="container my-5 abouts">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <img src="./icons/about icons/about.png" alt="" srcset="" />
            </div>
            <div className="col-md-6 ">
              <h3 className=' heading mb-3'>
              Our Philosophy
              </h3>
              <p className='justify'>
              At GrowNext, we are driven by a passion for technology and a commitment to our clients. We believe in continuous learning and adaptation to the ever-evolving tech landscape. Our collaborative approach means that we work closely with our clients, providing support and guidance every step of the way.
              </p>
            </div>
          </div>
         </div>
       
        </div>
    </div>
  )
}

export default About