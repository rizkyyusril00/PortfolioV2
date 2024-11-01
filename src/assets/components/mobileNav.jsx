import { useState } from "react";
import Hero from "../img/Hero.jpg"
import BtnSosmed from "./btnSosmed";

export default function MobileNav({navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {
    const [showMedsosMobile, setShowMedsosMobile] = useState(false);

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
                        <div className={` ${showMedsosMobile ? "w-20" : "w-0"} transition-all duration-500 ease-in-out h-auto absolute -right-6 py-3 rounded-[15px] bg-primary -top-[275px] z-0`}>
                            <div className={`${showMedsosMobile ? "opacity-100 delay-300" : "opacity-0"} transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-4`}>
                                <BtnSosmed />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
