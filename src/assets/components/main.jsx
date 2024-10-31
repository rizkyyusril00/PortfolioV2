import Sidebar from "./sidebar"
import Home from "./home"
import About from "./about"
import Project from "./project"
import Certificate from "./certificate"

export default function Main({value, blobShow, togleClick, navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {

    const deviceSize = () => {
        if (window.innerWidth > 768) {
            return(
                <Sidebar className="hidden" valueMain={value} blobShow={blobShow} togleClickMain={togleClick} navMenu={navMenu} handleMenuHome={handleMenuHome} handleMenuAbout={handleMenuAbout} handleMenuProject={handleMenuProject} handleMenuCertificate={handleMenuCertificate}/>
            );
        } else {
            return null
        }
    }

    return(
        <>
            <div className="main-box">
                <div className="bg-transparent max-w-[1440px] w-[80%] h-screen mx-auto py-8 bg-opacity-85 flex gap-10">
                    {/* sidebar */}
                    {deviceSize()}
                    {/* hero */}
                    <div className="bg-transparent w-full md:w-[70%] h-full overflow-y-auto flex flex-col pr-0 md:pr-4">
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