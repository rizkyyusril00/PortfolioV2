import BtnSosmed from "./btnSosmed"
import Hero from "../img/Hero.jpg"
import Blob from "../img/blob.svg"


export default function Sidebar({valueMain, blobShow, togleClickMain, navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {


    return (
        <>
            <div className={"bg-transparent flex flex-col gap-3 slg:gap-4 lg:gap-6 xl:gap-8 h-full w-[30%] sticky"}>
                {/* box atas */}
                <div className="bg-transparent w-[100%] h-auto">
                    {/* section 1 */}
                    <div className="bg-gradient-to-r from-[#091384] to-[#215BB8] w-full h-[40%] slg:h-[50%] relative rounded-xl flex justify-center items-center">
                        <button onClick={togleClickMain} className="bg-bg btn-wa w-8 h-8 slg:w-10 slg:h-10 xl:w-12 xl:h-12 absolute top-0 right-0 rounded-bl-xl rounded-tr-md flex items-center justify-center leading-tight text-[12px] group">
                            <a className={` group-hover:animate-pulse group-hover:text-bold group-hover:font-bold text-primary text-center text-[10px] slg:text-[14px] xl:text-[16px] transition-all duration-300 ease-in-out ${valueMain === 1 ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}`}></a>
                        </button>
                    </div>
                    {/* section 2 */}
                    <div className="bg-transparent w-full h-[5%] relative rounded-xl flex justify-center items-center">
                        <div className="bg-bg mb-10 w-[60px] h-[60px] slg:w-[80px] slg:h-[80px] xl:w-[100px] xl:h-[100px] mx-auto rounded-[50%] flex items-center justify-center leading-tight text-xs">
                            <img src={Hero} className="w-full h-full rounded-[50%]" alt="photo profile" />
                        </div>
                    </div>
                    {/* section 3 */}
                    <div className="bg-transparent mt-1 slg:mt-3 lg:mt-4 xl:mt-6 w-full h-[55%] slg:h-[45%] relative rounded-xl flex flex-col justify-center items-center gap-1">
                        <h2 className="text-primary text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px]">Muhammad Rizky Yusril Arasyhi</h2>
                        <h2 className="text-slate-500 text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px]">FrontEnd Developer</h2>
                        <h2 className="text-slate-500 text-[10px] slg:text-[12px] lg:text-[16px] xl:text-[20px]">muhammadrizkyyusrilarasyhi00@gmail.com</h2>
                    </div>
                </div>
                    {/* box tengah */}
                    <div className="bg-transparent w-[100%] h-auto">
                        <div className="w-full border-b border-dashed border-primary"></div>
                            <div className="bg-transparent h-full w-full px-2 slg:px-4 py-2 slg:py-4 lg:py-6 xl:py-8 relative flex flex-col items-start justify-center overflow-hidden">
                                <ul className="flex flex-col items-center gap-4 w-full overflow-hidden relative">
                                    <li onClick={handleMenuHome} className={navMenu === "Home" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"}>
                                        <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-house-door"></i>
                                        <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">Home</button>
                                        {blobShow === "Home" ? <img src={Blob} className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10" alt="blob" /> : null}
                                    </li>
                                    <li onClick={handleMenuAbout} className={navMenu === "About" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"}>
                                        <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-file-earmark-person"></i>
                                        <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">About</button>
                                        {blobShow === "About" ? <img src={Blob} className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10" alt="blob" /> : null}
                                    </li>
                                    <li onClick={handleMenuProject} className={navMenu === "Project" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"}>
                                        <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-trophy"></i>
                                        <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">Project</button>
                                        {blobShow === "Project" ? <img src={Blob} className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10" alt="blob" /> : null}
                                    </li>
                                    <li onClick={handleMenuCertificate} className={navMenu === "Certificate" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"}>
                                        <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-award"></i>
                                        <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">Certificate </button>
                                        {blobShow === "Certificate" ? <img src={Blob} className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10" alt="blob" /> : null}
                                    </li>
                                </ul>
                            </div>
                        <div className="w-full border-b border-dashed border-primary"></div>
                    </div>
                    {/* box bawah */}
                    <div className="bg-transparent w-[100%] h-auto">
                        {/* box 1 */}
                        <div className="w-full h-[50%] flex justify-center items-center px-4 gap-2 border-b border-dashed border-primary pb-3 slg:pb-4 lg:pb-6 xl:pb-8">
                            <q className="text-center text-primary italic font-thin text-[12px] slg:text-[16px] lg:text-[20px]">There is nothing impossible to him who will try</q>
                        </div>
                        {/* box2 */}
                        <div className="w-full flex justify-center items-center py-2 slg:py-4 lg:py-6 xl:py-7 gap-4">
                            <BtnSosmed />
                        </div>
                    </div>
            </div>
        </>
    )
}