import LogoTailwind from "../img/tailwind-logo.svg"
import Project1 from '../img/project_1.png'
import Project2 from '../img/project_2.png'
import Project3 from '../img/project_3.png'
import Project4 from '../img/project_4.png'
import Project5 from '../img/project_5.png'


export default function Project(){
    return(
        <>
            {/* box 1 */}
            <div className="flex flex-col gap-4 pb-4">
                <h2 className="text-[36px] text-primary">List of My <span>Project</span></h2>
            </div>

            {/* box 2 */}
            <div className="flex flex-col gap-6 py-4 border-t border-dashed border-primary">
                {/* 1 */}
                <div className="flex items-center gap-2">
                    {/* 1 */}
                    <a href="https://homelens-gamma.vercel.app/" target="_blank" className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden cursor-pointer">
                        <figure className="bg-white w-full">
                            <img src={Project1} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex items-center gap-2">
                            <i className="bi bi-1-circle text-[16px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] text-primary group-hover:text-bg">Landing Page For Studio Photo</h2>
                        </div>
                        <div className='flex gap-2'>
                            <figure className="w-[20px] h-[20px]">
                                <img src={LogoTailwind } alt="" className="w-full h-full object-fit"/>
                            </figure>
                            <i className="fa-brands fa-react text-[20px] text-[#00d8ff]"></i>
                        </div>
                    </a>
                    {/* 2 */}
                    <a href="https://nugraha.me/index.html" target="_blank" className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden cursor-pointer">
                        <figure className="bg-white w-full">
                            <img src={Project2} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex items-center gap-2">
                            <i className="bi bi-2-circle text-[16px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] text-primary group-hover:text-bg">Portfolio For Owner Mangcoding</h2>
                        </div>
                        <div className='flex gap-2'>
                            <figure className="w-[20px] h-[20px]">
                                <img src={LogoTailwind } alt="" className="w-full h-full object-fit"/>
                            </figure>
                            <i className="fa-brands fa-react text-[20px] text-[#00d8ff]"></i>
                        </div>
                    </a>
                </div>

                {/* 2 */}
                <div className="flex items-center gap-2">
                    {/* 1 */}
                    <a href="https://nexcent-red.vercel.app/" target="_blank" className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden cursor-pointer">
                        <figure className="bg-white w-full">
                            <img src={Project3} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex items-center gap-2">
                            <i className="bi bi-3-circle text-[16px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] text-primary group-hover:text-bg">Ordinary Landing Page</h2>
                        </div>
                        <div className='flex gap-2'>
                            <figure className="w-[20px] h-[20px]">
                                <img src={LogoTailwind } alt="" className="w-full h-full object-fit"/>
                            </figure>
                            <i className="fa-brands fa-react text-[20px] text-[#00d8ff]"></i>
                        </div>
                    </a>
                    {/* 2 */}
                    <a href="https://m-kasir.vercel.app/" target="_blank" className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden cursor-pointer">
                        <figure className="bg-white w-full">
                            <img src={Project4} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex items-center gap-2">
                            <i className="bi bi-4-circle text-[16px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] text-primary group-hover:text-bg">Landing Page For Point of Sale</h2>
                        </div>
                        <div className='flex gap-2'>
                            <figure className="w-[20px] h-[20px]">
                                <img src={LogoTailwind } alt="" className="w-full h-full object-fit"/>
                            </figure>
                            <i className="fa-brands fa-react text-[20px] text-[#00d8ff]"></i>
                        </div>
                    </a>
                </div>

                {/* 3 */}
                <div className="flex items-center justify-center gap-2">
                    {/* 1 */}
                    <a href="https://mangstore-react.vercel.app/" target="_blank" className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={Project5} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex items-center gap-2">
                            <i className="bi bi-5-circle text-[16px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] text-primary group-hover:text-bg">Static E Commerce</h2>
                        </div>
                        <div className='flex gap-2'>
                            <figure className="w-[20px] h-[20px]">
                                <img src={LogoTailwind } alt="" className="w-full h-full object-fit"/>
                            </figure>
                            <i className="fa-brands fa-react text-[20px] text-[#00d8ff]"></i>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}