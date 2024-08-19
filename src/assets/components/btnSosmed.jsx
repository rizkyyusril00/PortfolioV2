


export default function BtnSosmed (){
    
    const sosmeds = [
        {
            id: 1,
            icon: "bi bi-whatsapp",
            url: "/",
        },
        {
            id: 2,
            icon: "bi bi-instagram",
            url: "/",
        },
        {
            id: 3,
            icon: "bi bi-facebook",
            url: "/about",
        },
        {
            id: 4,
            icon: "bi bi-github",
            url: "/project",
        },
        {
            id: 5,
            icon: "bi bi-linkedin",
            url: "/contact",
        },
    ]
    return(
        <>
            {sosmeds.map((sosmed) => (
                <button key={sosmed.id} className="btn-sosmed flex items-center justify-center">
                    <i className={sosmed.icon + " text-[18px] text-primary"}></i>
                </button>
            ))}
        </>
    )
}