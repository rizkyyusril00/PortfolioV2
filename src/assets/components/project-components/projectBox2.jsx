import LogoTailwind from "../../img/tailwind-logo.svg"
import LogoNextJs from "../../img/nextJs.png"
import LogoFigma from "../../img/figma.svg";
import Project1 from '../../img/project_1.png'
import Project2 from '../../img/project_2.png'
import Project3 from '../../img/project_3.png'
import Project4 from '../../img/project_4.png'
import Project5 from '../../img/project_5.png' 

export default function ProjectBox2 () {
    const projects = [
        {
            id: 1,
            link: "https://homelens-gamma.vercel.app/",
            img: Project1,
            number: "bi bi-1-circle",
            title: "Landing Page For Studio Photo",
            logo : LogoTailwind,
            logo2 : "fa-brands fa-react",
            logo3 : "",
            have3logo: false
        },
        {
            id: 2,
            link: "https://anime-list-ooc7kt6mq-rizkyyusril00s-projects.vercel.app/",
            img: Project2,
            number: "bi bi-2-circle",
            title: "Anime List With Jikan API",
            logo : LogoTailwind,
            logo2 : "fa-brands fa-react",
            logo3 : LogoNextJs,
            have3logo: true
        },
        {
            id: 3,
            link: "https://likearth.co/",
            img: Project3,
            number: "bi bi-3-circle",
            title: "Landing Page Likearth Studio",
            logo : LogoTailwind,
            logo2 : "fa-brands fa-react",
            logo3 : "",
            have3logo: false
        },
        {
            id: 4,
            link: "https://mentalhealing.id/home",
            img: Project4,
            number: "bi bi-4-circle",
            title: "Web App For Mental Health",
            logo : LogoTailwind,
            logo2 : "fa-brands fa-react",
            logo3 : LogoNextJs,
            have3logo: true
        },
        {
            id: 5,
            link: "https://www.figma.com/design/c8c565UzE2nTdxNiIAZ7kg/skripsi?node-id=791-20664&t=cnmQVsNRk4Z1GRgQ-1",
            img: Project5,
            number: "bi bi-5-circle",
            title: "Design UI/UX Travel",
            logo : LogoFigma,
            logo2 : "",
            logo3 : LogoFigma,
            have3logo: false
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-6 py-4 border-t border-dashed border-primary">
                <div className="flex gap-2 lg:gap-3 flex-wrap">
                    {projects.map((project) => (
                        <a href={project.link} target="_blank" key={project.id} className="flex flex-col gap-4 border border-primary rounded-md p-4 w-full md:w-[48%] lg:w-[49%] group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                            <figure className="bg-white w-full md:h-auto aspect-video">
                                <img src={project.img} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="project" />
                            </figure>
                            <div className="flex gap-2">
                                <i className={project.number + ` text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg`}></i>
                                <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">{project.title}</h2>
                            </div>
                            <div className='flex gap-2'>
                                <figure className="w-[20px] h-[20px] lg:w-6 lg:h-6 xl:w-7 xl:h-7">
                                    <img src={project.logo } alt="" className="w-full h-full object-fit"/>
                                </figure>
                                <figure className={`${project.have3logo === true ? "block" : "hidden"} w-[20px] h-[20px] lg:w-6 lg:h-6 xl:w-7 xl:h-7`}>
                                    <img src={project.logo3 } alt="" className="w-full h-full object-fit"/>
                                </figure>
                                <i className={ project.logo2 + ` text-[20px] lg:text-[24px] xl:text-[28px] text-[#00d8ff]`}></i>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}