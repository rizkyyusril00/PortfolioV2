import Sidebar from "./sidebar"
import Home from "./home"
import About from "./about"
import Project from "./project"
import Certificate from "./certificate"

export default function Main({value, togleClick, navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {
    
    return(
        <>
            <div className="main-box">
                <div className="bg-transparent w-[80%] h-screen mx-auto py-8 bg-opacity-85 flex gap-10">
                    {/* sidebar */}
                    <Sidebar valueMain={value} togleClickMain={togleClick} navMenu={navMenu} handleMenuHome={handleMenuHome} handleMenuAbout={handleMenuAbout} handleMenuProject={handleMenuProject} handleMenuCertificate={handleMenuCertificate}/>
                    {/* hero */}
                    <div className="bg-transparent w-[70%] h-full overflow-y-auto flex flex-col pr-4">
                        {/* Home */}
                        <div className={navMenu === "Home" ? "" : "hidden"}>
                            <Home />
                        </div>
                        {/* About */}
                        <div className={navMenu === "About" ? "" : "hidden"}>
                            <About />
                        </div>
                        {/* Project */}
                        <div className={navMenu === "Project" ? "" : "hidden"}>
                            <Project />
                        </div>
                        {/* Certificate */}
                        <div className={navMenu === "Certificate" ? "" : "hidden"}>
                            <Certificate />
                        </div>
                    </div>
                </div>             
            </div>
        </>
    )
}