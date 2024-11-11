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
  
  // blob show
  const [blobShow, setBlobShow] = useState("Home")

  // navigation sidebar menus
  const [navMenu, setNavMenu] = useState("Home")
  const handleMenuHome = () => {
    setNavMenu("Home");
    setBlobShow("Home");
  };
  const handleMenuAbout = () => {
    setNavMenu("About");
    setBlobShow("About");
  };
  const handleMenuProject = () => {
    setNavMenu("Project");
    setBlobShow("Project");
  };
  const handleMenuCertificate = () => {
    setNavMenu("Certificate");
    setBlobShow("Certificate");
  };


  return (
    <>
      <div className={value === 1 ? "bg-transparent" : "bg-bg"}>
        <ParticlesComponent  id={value === 1 ? "particles" : "particles2"}/>
        <Main value={value} togleClick={togleClick} blobShow={blobShow} navMenu={navMenu} handleMenuHome={handleMenuHome} handleMenuAbout={handleMenuAbout} handleMenuProject={handleMenuProject} handleMenuCertificate={handleMenuCertificate}/>
      </div>
    </>
  )
}

export default App
