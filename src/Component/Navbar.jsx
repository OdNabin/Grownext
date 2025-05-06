import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate  = useNavigate()
  return (
    <div  className='res-nav'>
     <div className="container">
     <nav className=" navbar navbar-expand-lg ">
  <div className="container  Navbar align-items-center   my-3" style={{borderRadius:"30px",padding:"10px",backgroundColor:"#EAEAE8"}}>
    <a className="navbar-brand ps-1" href="#"><img src="./icons/Home/logo.png" alt="logo" srcset="" className='logo' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src="logo.png" alt="" srcset="" className='logo'/></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav upp justify-content-end flex-grow-1 pe-3 ga ">
        <li className="nav-item" >

            <a className={`nav-link ${window.location.pathname === "/" ? "active" : ""}`}aria-current="page"  onClick={()=>navigate("/")}>Home</a>
          </li>

          <li className="nav-item">
            <a className={`nav-link ${window.location.pathname === "/about" ? "active" : ""}`}onClick={()=>navigate("/about")}>About Us</a>
          </li>
          <li className='nav-item'>
            <a className={`nav-link ${window.location.pathname === "/service" || window.location.pathname === "/mobileAppDeveloment" || window.location.pathname === "/pythonDeveloment"|| window.location.pathname === "/aiDeveloment"|| window.location.pathname === "/middleware"|| window.location.pathname === "/cloud"|| window.location.pathname === "/mulesoft"  ? "active" : ""}`}  onClick={()=>navigate("/service")}>Services </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" >Our Work</a>
          </li> */}

<li className='nav-item'>
            <a className={`nav-link ${window.location.pathname === "/AiResearch" ? "active" : ""}`}  onClick={()=>navigate("/AiResearch")}>AI Research</a>
          </li>
          <li className='nav-item'>
            <a className={`nav-link ${window.location.pathname === "/blog" ? "active" : ""}`}  onClick={()=>navigate("/blog")}>Blog</a>
          </li>
          
        </ul>

        <ul className="navbar-nav justify-content-end flex-grow-1 pe-1" >
          <button onClick={()=>navigate("/contact")} className='contact nav-ite' style={{borderRadius:"30px",backgroundColor:"white",outline:"none",border:"none"}}>Contact Us</button>
        </ul>
      
      </div>
      <div className="offcanvas-header">
       
      </div>
    </div>
  </div>
</nav>
     </div>
    </div>
  )
}

export default Navbar