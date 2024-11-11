import { useState } from "react";
import Hero from "../img/Hero.jpg"
import Cat from "../img/cat3.gif"

export default function MobileNav({navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {
    const [showMedsosMobile, setShowMedsosMobile] = useState(false);
    const sosmeds = [
        {
            id: 1,
            icon: "bi bi-whatsapp",
            url: "https://wa.me/6281317073618",
            hoverStyle:"bg-gradient-to-br from-green-300 via-green-500 to-green-300",
            delay: "delay-200"
        },
        {
            id: 2,
            icon: "bi bi-instagram",
            url: "https://www.instagram.com/rzkyysril_?igsh=M3MxZnNyMjc2OTZq",
            hoverStyle:"bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
            delay: "delay-300"
        },
        {
            id: 3,
            icon: "bi bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100006225436351&mibextid=ZbWKwL",
            hoverStyle:"bg-[#4267b2]",
            delay: "delay-[400ms]"
        },
        {
            id: 4,
            icon: "bi bi-github",
            url: "https://github.com/rizkyyusril00",
            hoverStyle:"bg-[#000000]",
            delay: "delay-500"
        },
        {
            id: 5,
            icon: "bi bi-linkedin",
            url: "https://www.linkedin.com/in/muhammad-rizky-yusril-arasyhi-6874422b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            hoverStyle:"bg-[#0A66C2]",
            delay: "delay-[600ms]"
        },
    ]

    const showMedsos = () => {
        setShowMedsosMobile(!showMedsosMobile);
    }
    return (
        <>
            <div className="w-full px-10 sticky bottom-0 z-30 block md:hidden bg-transparent">
                <div className="w-full bg-primary p-3 rounded-t-[15px] flex items-center justify-evenly relative z-10">
                    <div onClick={handleMenuHome} className={`${navMenu === "Home" ? "border-bg bg-bg" : "border-bg bg-transparent"} p-2 w-10 h-10 flex items-center justify-center rounded-full border aspect-square`}>
                        <i className={`${navMenu === "Home" ? "text-primary" : "text-bg"} text-[20px] bi bi-house-door`}></i>
                    </div>
                    <div onClick={handleMenuAbout} className={`${navMenu === "About" ? "border-bg bg-bg" : "border-bg bg-transparent"} p-2 w-10 h-10 flex items-center justify-center rounded-full border aspect-square`}>
                        <i className={`${navMenu === "About" ? "text-primary" : "text-bg"} text-[20px] bi bi-file-earmark-person`}></i>
                    </div>
                    <div onClick={handleMenuProject} className={`${navMenu === "Project" ? "border-bg bg-bg" : "border-bg bg-transparent"} p-2 w-10 h-10 flex items-center justify-center rounded-full border aspect-square`}>
                        <i className={`${navMenu === "Project" ? "text-primary" : "text-bg"} text-[20px] bi bi-trophy`}></i>
                    </div>
                    <div onClick={handleMenuCertificate} className={`${navMenu === "Certificate" ? "border-bg bg-bg" : "border-bg bg-transparent"} p-2 w-10 h-10 flex items-center justify-center rounded-full border aspect-square`}>
                        <i className={`${navMenu === "Certificate" ? "text-primary" : "text-bg"} text-[20px] bi bi-award`}></i>
                    </div>
                    <div onClick={showMedsos} className="w-10 h-10 flex items-center justify-center rounded-full border border-bg aspect-square relative z-10">
                        <img src={Hero} className="w-full h-full rounded-[50%]" alt="photo profile" />
                        <div className={` ${showMedsosMobile ? "w-20" : "w-0"} transition-all duration-500 ease-in-out h-auto absolute py-3 rounded-[15px] bg-primary -top-[275px] -right-6 z-0`}>
                            <div className={`transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-4`}>
                                {sosmeds.map((sosmed) => (
                                    <a href={sosmed.url} key={sosmed.id} className={`${showMedsosMobile ? ` ${sosmed.delay} opacity-100 scale-100 block` : "opacity-0 scale-0"} transition-all duration-500 ease-in-out bg-bg w-8 h-8 flex items-center justify-center rounded-full`}>
                                        <i className={ sosmed.icon + " text-[16px] text-primary"}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* cat */}
                    <div className="w-10 h-10 absolute -top-[11px] left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <img src={Cat} alt="cat gif" className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    );
}
