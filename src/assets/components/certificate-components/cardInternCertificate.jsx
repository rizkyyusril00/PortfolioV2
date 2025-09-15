import I_Certi1 from '../../img/intern-certi_skill1.jpg'
import I_Certi2 from '../../img/intern-certi_skill2.jpg'

export default function InternCardCertificate() {
    const internCertificate = [
        {
            id: 1,
            img: I_Certi1,
            Number: "bi bi-1-circle",
            title: "Intern at Pt Anugrah Kreasi Digital"
        },
        {
            id: 2,
            img: I_Certi2,
            Number: "bi bi-2-circle",
            title: "Intern at Likearth Studio"
        }
    ]
    return(
        <>
            <div className="flex gap-2">
                    {/* 1 */}
                    {internCertificate.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4 border border-primary rounded-md p-4 w-full md:w-1/2 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                            <figure className="bg-white w-full">
                                <img src={item.img} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate1" />
                            </figure>
                            <div className="flex gap-2">
                                <i className={item.Number + ` text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg`}></i>
                                <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}