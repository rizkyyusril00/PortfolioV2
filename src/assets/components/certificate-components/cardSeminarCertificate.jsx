import S_Certi1 from '../../img/seminar-certi_skill1.png'
import S_Certi2 from '../../img/seminar-certi_skill2.jpg'
import S_Certi3 from '../../img/seminar-certi_skill3.jpg'

export default function CardSeminarCertificate() {
    const seminarCertificate = [
        {
            id: 1,
            img: S_Certi1,
            Number: "bi bi-1-circle",
            title: "Company Visit QWords"
        },
        {
            id: 2,
            img: S_Certi2,
            Number: "bi bi-2-circle",
            title: "Seminar Looping By University Lecturer"
        },
        {
            id: 3,
            img: S_Certi3,
            Number: "bi bi-3-circle",
            title: "Seminar Cakap Digital By Kominfo"
        }
    ]
    return (
        <>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 lg:gap-x-3">
                {/* 1 */}
                {seminarCertificate.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 border border-primary rounded-md p-4 w-full md:w-[48%] lg:w-[49%] group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
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