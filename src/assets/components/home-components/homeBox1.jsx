import Cat from "../../img/cat2.gif"


export default function HomeBox1() {
    return (
        <>
            <div className="flex flex-col gap-2 slg:gap-4 pb-4 px-2 md:px-0">
                <div className="flex items-center gap-2">
                    <h2 className="text-[28px] slg:text-[30px] lg:text-[36px] xl:text-[44px] text-primary">
                    Supp, Im <span>FrontEnd Developer ~ UI/UX</span>
                    </h2>
                    <div className="w-10 h-10 hidden md:flex items-center justify-center relative">
                        <img src={Cat} alt="cat gif" className="w-full h-full absolute right-2 -top-2"/>
                    </div>
                </div>
                <div className="flex items-center text-[16px] text-primary gap-10">
                    <div className="flex items-center">
                        <i className="bi bi-dot text-[28px] slg:text-[36px] lg:text-[40px] xl:text-[44px] text-primary"></i>
                        <span className="decoration-dotted text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary">
                        Lived In Sukabumi
                        </span>
                    </div>
                    <div className="flex items-center">
                        <i className="bi bi-dot text-[28px] slg:text-[36px] lg:text-[40px] xl:text-[44px] text-primary"></i>
                        <span className="decoration-dotted text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary">
                        Currently Studying at University
                        </span>
                    </div>
                </div>
                <div className="bg-transparent w-full flex flex-col gap-1">
                    <p className="text-primary text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] leading-tight">
                        Very interested to working in the field of technology, especially
                        websites
                    </p>
                    <p className="text-primary text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] leading-tight">
                        Experienced in creating responsive websites that focus on the
                        frontend developer
                    </p>
                </div>
            </div>
        </>
    );
}
