import Sidebar from "./sidebar"
import CV from "../../assets/CV.pdf"
import LogoMangcoding from "../img/logo-mangcoding.png"
import LogoTailwind from "../img/tailwind-logo.svg"
import LogoVite from "../../../public/vite.svg"

export default function Main() {
    const skills =[
        {
            id: 1,
            logo :"fa-brands fa-html5 text-[20px] text-[#E44D26]",
            nama: "HTML"
        },
        {
            id: 2,
            logo :"fa-brands fa-css3-alt text-[20px] text-[#4169E1]",
            nama: "CSS"
        },
        {
            id: 3,
            logo :"fa-brands fa-js text-[20px] text-[#F0DB4F]",
            nama: "Java Script"
        },
        {
            id: 4,
            logo :"fa-brands fa-react text-[20px] text-[#00d8ff]",
            nama: "React JS"
        },
        {
            id: 5,
            logo :"fa-brands fa-vuejs text-[20px] text-[#41b883]",
            nama: "Vue JS"
        },
        {
            id: 6,
            logo :"fa-brands fa-npm text-[20px] text-[#cc3534]",
            nama: "NPM"
        },
        {
            id: 7,
            logo :"fa-brands fa-bootstrap text-[20px] text-[#563d7c]",
            nama: "Bootstrap"
        },
    ]
    return(
        <>
            <div className="main-box">
                <div className="bg-transparent w-[80%] h-screen mx-auto py-8 bg-opacity-85 flex gap-10">
                    {/* sidebar */}
                    <Sidebar />
                    {/* hero */}
                    <div className="bg-transparent w-[70%] h-full overflow-y-auto flex flex-col pr-4">
                        {/* box 1 */}
                        <div className="flex flex-col gap-4 pb-4">
                            <h2 className="text-[36px] text-primary">Supp, Im <span>FrontEnd Developer</span></h2>
                            <ul className="flex items-center text-[16px] text-primary gap-10">
                                <div className="flex items-center">
                                    <i className="bi bi-dot text-[36px] text-primary"></i>
                                    <li className="decoration-dotted text-[16px] text-primary">Lived In Sukabumi</li>
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-dot text-[36px] text-primary"></i>
                                    <li className="decoration-dotted text-[16px] text-primary">Currently Studying at University</li>
                                </div>                              
                            </ul>
                            <div className="bg-transparent w-full flex flex-col gap-1">
                                <p className="text-primary text-[16px] leading-tight">Very interested to working in the field of technology, especially websites</p>
                                <p className="text-primary text-[16px] leading-tight">Experienced in creating responsive websites that focus on the frontend developer</p>
                            </div>
                        </div>
                        {/* box 2 */}
                        <div className="flex flex-col gap-6 py-4 border-y border-dashed border-primary">
                            {/* Journey */}
                            <div className="flex justify-between">
                                {/* box kiri */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <i className="bi bi-suitcase-lg text-[24px] text-primary"></i>
                                        <h2 className="text-[24px] text-primary">My Career</h2>
                                    </div>
                                    <h2 className="text-[16px] text-primary">My Porfesional Journey</h2>
                                </div>
                                {/* box kanan */}
                                <div className="flex items-center justify-center">
                                    <button className="bookmarkBtn p-1">
                                        <a  href={CV} download={CV} className="IconContainer">
                                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-download icon w-[16px] h-[16px]" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                <path className="animate-bounce " d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                            </svg>
                                        </a>
                                        <a href={CV} download={CV} className="text">My CV</a>
                                    </button>
                                </div>
                            </div>
                            {/* card experience */}
                            <div className="flex items-center gap-2">
                                <div className="bg-transparent border border-primary rounded-md p-4 w-[50%] flex flex-col gap-4 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out">
                                    <figure className="w-full">
                                        <img src={LogoMangcoding} alt="logo_mangcoding" className="w-full h-full object-cover"/>
                                    </figure>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-4">
                                            <a href="" target="_blank" className="text-primary text-[16px]  leading-tight group-hover:text-bg">PT. Anugrah Kreasi Digital</a>
                                            <i className="bi bi-dot text-primary text-[16px] leading-tight group-hover:text-bg"></i>                                    
                                            <p className="text-primary text-[16px] leading-tight group-hover:text-bg">Sukabumi</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-primary text-[12px] leading-tight group-hover:text-bg">Frontend Developer</h2>    
                                            <i className="bi bi-dot text-primary text-[16px] leading-tight group-hover:text-bg"></i>
                                            <p className="text-primary text-[12px] leading-tight group-hover:text-bg">February 2024 ~ Juni 2024</p>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Services */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    <i className="bi bi-wrench-adjustable-circle text-[24px] text-primary"></i>
                                    <h2 className="text-[24px] text-primary">My Services</h2>
                                </div>
                            </div>
                            {/* card services */}
                            <div className="flex items-center gap-2">
                                <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-[50%] group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out">
                                    <div className="flex items-center gap-4">
                                        <i className="bi bi-pc-display-horizontal text-[16px] text-primary group-hover:text-bg"></i>
                                        <h2 className="text-[16px] text-primary group-hover:text-bg">Develope Website</h2>
                                    </div>
                                    <p className="text-[16px] text-primary group-hover:text-bg">I offer you i can develope a responsive and attractive website to fulfill your needs</p>
                                </div>
                                <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-[50%] group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out">
                                    <div className="flex items-center gap-4">
                                        <i className="fa-solid fa-users-line text-[16px] text-primary group-hover:text-bg"></i>
                                        <h2 className="text-[16px] text-primary group-hover:text-bg">Collaboration</h2>
                                    </div>
                                    <p className="text-[16px] text-primary group-hover:text-bg">Im very open to collaborating to create a really cool website</p>
                                </div>
                            </div>
                            {/* Skills */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    <i className="bi bi-code-slash text-[24px] text-primary"></i>
                                    <h2 className="text-[24px] text-primary">My Skills</h2>
                                </div>
                            </div>
                            {/* list skills */}
                            <div className="flex flex-wrap items-center gap-4">
                                {skills.map((skill) => (
                                    <div key={skill.id} className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg">
                                        <i className={skill.logo}></i>
                                        <h2 className="text-[16px] text-primary group-hover:text-bg">{skill.nama}</h2>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg">
                                    <figure className="w-[20px] h-[20px]">
                                        <img src={LogoTailwind } alt="" className="w-full h-full object-fit"/>
                                    </figure>
                                    <h2 className="text-[16px] text-primary group-hover:text-bg">Tailwind</h2>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg">
                                    <figure className="w-[20px] h-[20px]">
                                        <img src={LogoVite } alt="" className="w-full h-full object-fit"/>
                                    </figure>
                                    <h2 className="text-[16px] text-primary group-hover:text-bg">Vite</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        </>
    )
}