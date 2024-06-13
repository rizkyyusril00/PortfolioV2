import BtnSosmed from "./btnSosmed"


export default function Sidebar() {
    const menus = [
        {
            id: 1,
            title: "Home",
            icon: "bi bi-house-door",
            url: "/",
        },
        {
            id: 2,
            title: "About",
            icon: "bi bi-file-earmark-person",
            url: "/about",
        },
        {
            id: 3,
            title: "Project",
            icon: "bi bi-trophy",
            url: "/project",
        },
        {
            id: 4,
            title: "Contact",
            icon: "bi bi-chat-dots",
            url: "/contact",
        },
    ]
    return (
        <>
            <div className="bg-transparent flex flex-col gap-1 h-full w-[30%] sticky">
                {/* box atas */}
                <div className="bg-transparent w-[100%] h-[33%]">
                    {/* section 1 */}
                    <div className="bg-gradient-to-r from-[#38b5f2] to-[#843cf6] w-full h-[50%] relative rounded-xl flex justify-center items-center">
                        <button className="bg-bg btn-wa w-[40px] h-[40px]  absolute top-0 right-0 rounded-bl-xl rounded-tr-md flex items-center justify-center leading-tight text-[12px] group">
                            <a className="bi bi-whatsapp group-hover:animate-pulse group-hover:text-green-500 group-hover:font-bold text-primary text-center text-[14px] transition-all duration-300 ease-in-out"></a>
                        </button>
                    </div>
                    {/* section 2 */}
                    <div className="bg-transparent w-full h-[5%] relative rounded-xl flex justify-center items-center">
                        <div className="bg-bg mb-10 w-[80px] h-[80px] mx-auto rounded-[50%] flex items-center justify-center leading-tight text-xs">
                            <p className="text-white text-center"><i className="bi bi-whatsapp text-[14px]"></i></p>
                        </div>
                    </div>
                    {/* section 3 */}
                    <div className="bg-transparent mt-2 w-full h-[45%] relative rounded-xl flex flex-col justify-center items-center">
                        <h2 className="text-primary text-[16px]">Muhammad Rizky Yusril Arasyhi</h2>
                        <h2 className="text-slate-500 text-[16px]">FrontEnd Developer</h2>
                    </div>
                        </div>
                    <div className="w-full border-b border-dashed border-primary"></div>
                    {/* box tengah */}
                    <div className="bg-transparent w-[100%] h-[36%]">
                        <div className="bg-transparent h-full w-full p-4 relative flex flex-col items-start justify-center">
                            <ul className="flex flex-col items-center gap-4 w-full">
                                {menus.map((menu) => (
                                    <li key={menu.id} className="text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out">
                                        <i className={'text-[18px] ' + menu.icon + ''}></i>
                                        <a href={menu.url} className="w-full text-start">{menu.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full border-b border-dashed border-primary"></div>
                    </div>
                    {/* box bawah */}
                    <div className="bg-transparent w-[100%] h-[30%]">
                        {/* box 1 */}
                        <div className="w-full h-[50%] flex justify-center items-center px-4 gap-2 border-b border-dashed border-primary">
                            <q className="text-center text-primary italic font-thin">There is nothing impossible to him who will try</q>
                        </div>
                        {/* box2 */}
                        <div className="w-full h-[50%] flex justify-center items-center px-4 gap-4">
                            <BtnSosmed />
                        </div>
                    </div>
            </div>
        </>
    )
}