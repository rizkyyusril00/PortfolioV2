import Hero from "../../img/Hero.jpg"


export default function SidebarBoxTop ({valueMain, togleClickMain}) {
    return(
        <>
            <div className="bg-transparent w-[100%] h-auto">
                {/* section 1 */}
                <div className="bg-gradient-to-r from-[#091384] to-[#215BB8] w-full h-[40%] slg:h-[50%] relative rounded-xl flex justify-center items-center">
                    <button id="toggle-particles" aria-label="Toggle Particles" onClick={togleClickMain} className="bg-bg btn-wa w-8 h-8 slg:w-10 slg:h-10 xl:w-12 xl:h-12 absolute top-0 right-0 rounded-bl-xl rounded-tr-md flex items-center justify-center leading-tight text-[12px] group">
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
        </>
    )
}