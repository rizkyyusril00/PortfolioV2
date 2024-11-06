import Certi1 from '../../img/certi_skill1.jpeg'
import Certi2 from '../../img/certi_skill2.jpg'
import Certi3 from '../../img/certi_skill3.jpg'
import Certi4 from '../../img/certi_skill4.jpg'
export default function CardSkillCertificate() {
    const skillCertificate = [
        {
            id: 1,
            img: Certi1,
            Number: "bi bi-1-circle",
            title: "Haltev Intoduction To Programming"
        },
        {
            id: 2,
            img: Certi2,
            Number: "bi bi-2-circle",
            title: "DQLab Python, R, SQL Fundamental"
        },
        {
            id: 3,
            img: Certi3,
            Number: "bi bi-3-circle",
            title: "GTTC Database Fundamental"
        },
        {
            id: 4,
            img: Certi4,
            Number: "bi bi-4-circle",
            title: "GTTC Artificial Intelligence Fundamental"
        },
    ]
    return (
        <>
            <div className="flex gap-2 lg:gap-3 flex-wrap">
                    {/* 1 */}
                    {skillCertificate.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4 border border-primary rounded-md p-4 w-full md:w-[48%] lg:w-[49%] group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out overflow-hidden">
                            <figure className="bg-white w-full">
                                <img src={item.img} className='w-full h-full transition-all duration-500 ease-in-out hover:scale-110' alt="certificate" />
                            </figure>
                            <div className="flex gap-2">
                                <i className={item.Number + ` bi bi-1-circle text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg`}></i>
                                <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}