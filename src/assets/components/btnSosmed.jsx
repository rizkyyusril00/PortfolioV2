


export default function BtnSosmed (){
    const sosmeds = [
        {
            id: 1,
            icon: "bi bi-whatsapp",
            url: "https://wa.me/6281317073618",
            hoverStyle:"bg-gradient-to-br from-green-300 via-green-500 to-green-300"
        },
        {
            id: 2,
            icon: "bi bi-instagram",
            url: "https://www.instagram.com/rzkyysril_?igsh=M3MxZnNyMjc2OTZq",
            hoverStyle:"bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
        },
        {
            id: 3,
            icon: "bi bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100006225436351&mibextid=ZbWKwL",
            hoverStyle:"bg-[#4267b2]"
        },
        {
            id: 4,
            icon: "bi bi-github",
            url: "https://github.com/rizkyyusril00",
            hoverStyle:"bg-[#000000]"
        },
        {
            id: 5,
            icon: "bi bi-linkedin",
            url: "https://www.linkedin.com/in/muhammad-rizky-yusril-arasyhi-6874422b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            hoverStyle:"bg-[#0A66C2]"
        },
    ]
    return(
        <>
            {sosmeds.map((sosmed) => (
                <a href={sosmed.url} target="_blank" key={sosmed.id} className="w-6 h-6 slg:w-9 slg:h-9 lg:w-12 lg:h-12 bg-[#00010D] rounded-full flex items-center justify-center relative group">
                    <i className={sosmed.icon + " text-[14px] slg:text-[18px] lg:text-[22px] text-primary relative z-20"}></i>
                    <div className={`${sosmed.hoverStyle} absolute -top-1 w-0 h-0 scale-0 opacity-0 rounded-full group-hover:w-6 group-hover:h-6 slg:group-hover:w-9 slg:group-hover:h-9 lg:group-hover:w-12 lg:group-hover:h-12 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:opacity-100 group-hover:scale-100`}></div>
                </a>
            ))}
        </>
    )
}