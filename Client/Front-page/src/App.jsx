import { Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar'
import './Components/Navbar/Navbar.css'
import Header from './Components/Header'
import './Components/Header/Header.css'
import Section from './Components/Section'
import './Components/Section/Section.css'
import Card from './Components/Card'
import './Components/Card/Card.css'
import Blog from './Components/Blog'
import './Components/Blog/Blog.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Team from './Pages/Team'
import Skill from './Pages/Skill'
import Clients from './Pages/Clients'
import Pricing from './Pages/Pricing'
import Blogs from './Pages/Blog'
import Contact from './Pages/Contact'
import Add from './Pages/Add'

function App() {
 

  return (
    <>
    <Navbar/>
<Header/>
<Section/>
<Card/>
<Blog/>
<Routes>


 <Route path="/" element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/services" element={<Services/>}/>
 <Route path="/portfolio" element={<Portfolio/>}/>
 <Route path="/team" element={<Team/>}/>
 <Route path="/skill" element={<Skill/>}/>
 <Route path="/clients" element={<Clients/>}/>
 <Route path="/pricing" element={<Pricing/>}/>
 <Route path="/blog" element={<Blogs/>}/>
 <Route path="/contact" element={<Contact/>}/>
 <Route path="/add" element={<Add/>}/>
 

</Routes>




{/* <Navbar/>
<Header/>
<Section/>
<Card/>
<Blog/> */}

    </>
  )
}

export default App
