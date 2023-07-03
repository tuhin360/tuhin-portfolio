import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import NavBar from './components/Navbar/NavBar'
import SocialLinks from './components/SocialLinks/SocialLinks'

function App() {
  return (
     <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <SocialLinks></SocialLinks>
     </div>
  )
}

export default App
