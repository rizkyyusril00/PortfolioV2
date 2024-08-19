import BtnSosmed from "./btnSosmed"
import Hero from "../img/Hero.jpg"


export default function Sidebar({valueMain, togleClickMain, navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {
    // const menus = [
    //     {
    //         id: 1,
    //         title: "Home",
    //         icon: "bi bi-house-door",
    //         tag: "Home",
    //     },
    //     {
    //         id: 2,
    //         title: "About",
    //         icon: "bi bi-file-earmark-person",
    //         tag: "About",
    //     },
    //     {
    //         id: 3,
    //         title: "Project",
    //         icon: "bi bi-trophy",
    //         tag: "Project",
    //     },
    //     {
    //         id: 4,
    //         title: "Contact",
    //         icon: "bi bi-chat-dots",
    //         tag: "Contact",
    //     },
    // ]
    return (
        <>
            <div className="bg-transparent flex flex-col gap-1 h-full w-[30%] sticky">
                {/* box atas */}
                <div className="bg-transparent w-[100%] h-[33%]">
                    {/* section 1 */}
                    <div className="bg-gradient-to-r from-[#091384] to-[#215BB8] w-full h-[50%] relative rounded-xl flex justify-center items-center">
                        <button onClick={togleClickMain} className="bg-bg btn-wa w-[40px] h-[40px]  absolute top-0 right-0 rounded-bl-xl rounded-tr-md flex items-center justify-center leading-tight text-[12px] group">
                            <a className={` group-hover:animate-pulse group-hover:text-bold group-hover:font-bold text-primary text-center text-[14px] transition-all duration-300 ease-in-out ${valueMain === 1 ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}`}></a>
                        </button>
                    </div>
                    {/* section 2 */}
                    <div className="bg-transparent w-full h-[5%] relative rounded-xl flex justify-center items-center">
                        <div className="bg-bg mb-10 w-[80px] h-[80px] mx-auto rounded-[50%] flex items-center justify-center leading-tight text-xs">
                            
                            <img src={Hero} className="w-full h-full rounded-[50%]" alt="photo profile" />
                        </div>
                    </div>
                    {/* section 3 */}
                    <div className="bg-transparent mt-2 w-full h-[45%] relative rounded-xl flex flex-col justify-center items-center">
                        <h2 className="text-primary text-[16px]">Muhammad Rizky Yusril Arasyhi</h2>
                        <h2 className="text-slate-500 text-[16px]">FrontEnd Developer</h2>
                    </div>
                </div>
                <div className="w-full border-b border-dashed border-primary"></div>
                    {/* box tengah */}
                    <div className="bg-transparent w-[100%] h-[36%]">
                        <div className="bg-transparent h-full w-full p-4 relative flex flex-col items-start justify-center">
                            {/* <ul className="flex flex-col items-center gap-4 w-full">
                                {menus.map((menu) => (
                                    <li key={menu.id} className={navMenu === "Home" ? "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out" : "text-primary rounded-md hover:bg-red-500 hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out"}>
                                        <i className={'text-[18px] ' + menu.icon + ''}></i>
                                        <button className="w-full text-start">{menu.title}</button>
                                    </li>
                                ))}
                            </ul> */}
                            <ul className="flex flex-col items-center gap-4 w-full">
                                <li onClick={handleMenuHome} className={navMenu === "Home" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out contain-paint" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out"}>
                                    <i className="text-[18px] cursor-pointer bi bi-house-door"></i>
                                    <button className="w-full text-start">Home</button>
                                </li>
                                <li onClick={handleMenuAbout} className={navMenu === "About" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out"}>
                                    <i className="text-[18px] cursor-pointer bi bi-file-earmark-person"></i>
                                    <button className="w-full text-start">About</button>
                                </li>
                                <li onClick={handleMenuProject} className={navMenu === "Project" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out"}>
                                    <i className="text-[18px] cursor-pointer bi bi-trophy"></i>
                                    <button className="w-full text-start">Project</button>
                                </li>
                                <li onClick={handleMenuCertificate} className={navMenu === "Certificate" ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer" : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out"}>
                                    <i className="text-[18px] cursor-pointer bi bi-award"></i>
                                    <button className="w-full text-start">Certificate </button>
                                </li>
                            </ul>
                            {/* <button onClick={handleMenuAbout} className="bg-red-500 text-black">sewyy</button>
                            <p className={navMenu === "About" ? "bg-blue-500 text-black" : "bg-red-400 text-black"}>dd</p> */}
                        </div>
                        <div className="w-full border-b border-dashed border-primary"></div>
                    </div>
                    {/* box bawah */}
                    <div className="bg-transparent w-[100%] h-[30%]">
                        {/* box 1 */}
                        <div className="w-full h-[50%] flex justify-center items-center px-4 gap-2 border-b border-dashed border-primary">
                            <q className="text-center text-primary italic font-thin">There is nothing impossible to him who will try</q>
                        </div>
                        {/* box2 */}
                        <div className="w-full h-[50%] flex justify-center items-center px-4 gap-4">
                            <BtnSosmed />
                        </div>
                    </div>
            </div>
        </>
    )
}