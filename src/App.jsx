import Main from "./assets/components/main"
import ParticlesComponent from "./assets/components/particles"
import { useState } from "react"


function App() {
  const [value, setValue] = useState(1)
  const togleClick = () => {
  
    if (value % 2 === 1) { // Check if odd click (first click or every other odd click)
      setValue(value + 1); // Increment value on odd clicks
    } else {
      setValue(value - 1); // Decrement value on even clicks
    }
  };
  
  // navigation sidebar menus
  const [navMenu, setNavMenu] = useState("Home")
  const handleMenuHome = () => {
    setNavMenu("Home");
  };
  const handleMenuAbout = () => {
    setNavMenu("About");
  };
  const handleMenuProject = () => {
    setNavMenu("Project");
  };
  const handleMenuCertificate = () => {
    setNavMenu("Certificate");
  };


  return (
    <div className={value === 1 ? "bg-transparent" : "bg-bg"}>
      <ParticlesComponent  id={value === 1 ? "particles" : "particles2"}/>
      <Main value={value} togleClick={togleClick} navMenu={navMenu} handleMenuHome={handleMenuHome} handleMenuAbout={handleMenuAbout} handleMenuProject={handleMenuProject} handleMenuCertificate={handleMenuCertificate}/>
    </div>
  )
}

export default App
