import Certi1 from '../img/certi_skill1.jpeg'
import Certi2 from '../img/certi_skill2.jpg'
import Certi3 from '../img/certi_skill3.jpg'
import Certi4 from '../img/certi_skill4.jpg'
import I_Certi1 from '../img/intern-certi_skill1.jpg'
import S_Certi1 from '../img/seminar-certi_skill1.png'
import S_Certi2 from '../img/seminar-certi_skill2.jpg'
import S_Certi3 from '../img/seminar-certi_skill3.jpg'


export default function Certificate() {
    return (
        <>
            {/* box 1 */}
            <div className="flex flex-col gap-4 pb-4">
                <h2 className="text-[36px] lg:text-[40px] xl:text-[44px] text-primary">List of My <span>Certificate</span></h2>
            </div>
            {/* box 2 */}
            <div className="flex flex-col gap-6 py-4 border-t border-dashed border-primary">
                {/* skill */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <i className="bi bi-stars text-[24px] lg:text-[28px] xl:text-[32px] text-primary"></i>
                        <h2 className="text-[24px] lg:text-[28px] xl:text-[32px] text-primary">Skills Certicate</h2>
                    </div>
                </div>
                {/* card skill */}
                {/* 1 */}
                <div className="flex gap-2">
                    {/* 1 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={Certi1} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-1-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">Haltev Intoduction To Programming</h2>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={Certi2} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-2-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">DQLab Python, R, SQL Fundamental</h2>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex gap-2">
                    {/* 1 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={Certi3} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-3-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">GTTC Database Fundamental</h2>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={Certi4} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-4-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">GTTC Artificial Intelligence Fundamental</h2>
                        </div>
                    </div>
                </div>

                {/* Intern */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <i className="bi bi-stars text-[24px] lg:text-[28px] xl:text-[32px] text-primary"></i>
                        <h2 className="text-[24px] lg:text-[28px] xl:text-[32px] text-primary">Internship Certicate</h2>
                    </div>
                </div>
                {/* card intern */}
                {/* 1 */}
                <div className="flex items-center justify-center gap-2">
                    {/* 1 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={I_Certi1} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-1-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">Intership at PT Anugrah Kreasi Digital </h2>
                        </div>
                    </div>
                </div>

                {/* seminar */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <i className="bi bi-stars text-[24px] lg:text-[28px] xl:text-[32px] text-primary"></i>
                        <h2 className="text-[24px] lg:text-[28px] xl:text-[32px] text-primary">Seminar Certicate</h2>
                    </div>
                </div>
                {/* card seminar */}
                {/* 1 */}
                <div className="flex gap-2">
                    {/* 1 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={S_Certi1} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-1-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">Company Visit QWords</h2>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={S_Certi2} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-2-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">Seminar Looping By University Lecturer</h2>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex items-center justify-center gap-2">
                    {/* 1 */}
                    <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                        <figure className="bg-white w-full">
                            <img src={S_Certi3} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                        </figure>
                        <div className="flex gap-2">
                            <i className="bi bi-3-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
                            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">Seminar Cakap Digital By Kominfo</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}