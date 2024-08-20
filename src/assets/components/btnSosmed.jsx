


export default function BtnSosmed (){
    const sosmeds = [
        {
            id: 1,
            icon: "bi bi-whatsapp",
            url: "https://wa.me/6281314073618",
        },
        {
            id: 2,
            icon: "bi bi-instagram",
            url: "https://www.instagram.com/rzkyysril_?igsh=M3MxZnNyMjc2OTZq",
        },
        {
            id: 3,
            icon: "bi bi-facebook",
            url: "https://www.facebook.com/profile.php?id=100006225436351&mibextid=ZbWKwL",
        },
        {
            id: 4,
            icon: "bi bi-github",
            url: "https://github.com/rizkyyusril00",
        },
        {
            id: 5,
            icon: "bi bi-linkedin",
            url: "https://www.linkedin.com/in/muhammad-rizky-yusril-arasyhi-6874422b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    ]
    return(
        <>
            {sosmeds.map((sosmed) => (
                <a href={sosmed.url} target="_blank" key={sosmed.id} className="btn-sosmed flex items-center justify-center">
                    <i className={sosmed.icon + " text-[18px] text-primary"}></i>
                </a>
            ))}
        </>
    )
}