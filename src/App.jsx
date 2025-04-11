import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MobileAppDevelpment from './Pages/service/MobileAppDevelpment'
import PythonDevelopment from './Pages/service/PythonDevelopment'
import AiDevelopment from './Pages/service/AiDevelopment'
import Middleware from './Pages/service/Middleware'
import Cloud from './Pages/service/Cloud'
import Mulesoft from './Pages/service/Mulesoft'
import Service from './Pages/Service'
import Blog from './Pages/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <BrowserRouter>
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/mobileAppDeveloment' element={<MobileAppDevelpment />} />
        <Route path='/pythonDeveloment' element={<PythonDevelopment />} />
        <Route path='/aiDeveloment' element={<AiDevelopment />} />
        <Route path='/middleware' element={<Middleware />} />
        <Route path='/cloud' element={<Cloud />} />
        <Route path='/mulesoft' element={<Mulesoft />} />
        <Route path='/service' element={<Service />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer/>
    </BrowserRouter>


 </div>
  )
}

export default App
