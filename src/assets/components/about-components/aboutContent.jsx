export default function AboutContent({content}) {
    return (
        <>
            <div className="w-full">
                <p className="text-primary text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] leading-tight text-center">{content}</p>
            </div>
        </>
    )
}