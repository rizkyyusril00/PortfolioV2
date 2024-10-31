

export default function About(){
    return(
        <>
            {/* box 1 */}
            <div className="flex items-center gap-4 pb-4">
                <h2 className="text-[28px] slg:text-[36px] lg:text-[40px] xl:text-[48px] text-primary">About <span>Me</span></h2>
                <i className="bi bi-person-raised-hand text-[28px] slg:text-[36px] lg:text-[40px] xl:text-[48px] text-primary"></i>
            </div>
            <div className="flex flex-col items-center gap-10 py-8 border-t border-dashed border-primary">
                {/* atas */}
                <div className="w-full">
                    <p className="text-primary text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] leading-tight text-center">A student of Nusa Putra University, S1 Information Systems Study Program, I have found joy in my challenging academic journey. As an individual who enjoys learning new things, my confidence is tested through leadership roles in leading various projects and managing events.</p>
                </div>
                {/* bawah */}
                <div className="w-full">
                    <p className="text-primary text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] leading-tight text-center">Over the course of my studies, my interest has grown in the areas of project management, UI &UX, and website development more specifically in frontend developers. I realize the importance of detail in achieving success, and thats what I focus on every step I take. I am committed to continuing to hone my skills and knowledge!</p>
                </div>
            </div>
        </>
    )
}