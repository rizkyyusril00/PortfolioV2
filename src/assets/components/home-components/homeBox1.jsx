export default function HomeBox1() {
    return (
        <>
            <div className="flex flex-col gap-2 slg:gap-4 pb-4 px-2 md:px-0">
                <h2 className="text-[28px] slg:text-[36px] lg:text-[40px] xl:text-[44px] text-primary">
                Supp, Im <span>FrontEnd Developer</span>
                </h2>
                <ul className="flex items-center text-[16px] text-primary gap-10">
                    <div className="flex items-center">
                        <i className="bi bi-dot text-[28px] slg:text-[36px] lg:text-[40px] xl:text-[44px] text-primary"></i>
                        <li className="decoration-dotted text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary">
                        Lived In Sukabumi
                        </li>
                    </div>
                    <div className="flex items-center">
                        <i className="bi bi-dot text-[28px] slg:text-[36px] lg:text-[40px] xl:text-[44px] text-primary"></i>
                        <li className="decoration-dotted text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary">
                        Currently Studying at University
                        </li>
                    </div>
                </ul>
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
