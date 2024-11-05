import Blob from "../../img/blob.svg"


export default function SidebarBoxMidle({blobShow, navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {
    return (
        <>
            <div className="bg-transparent w-[100%] h-auto">
                <div className="w-full border-b border-dashed border-primary"></div>
                    <div className="bg-transparent h-full w-full px-2 slg:px-4 py-2 slg:py-4 lg:py-6 xl:py-8 relative flex flex-col items-start justify-center overflow-hidden">
                        <ul className="flex flex-col items-center gap-4 w-full overflow-hidden relative">
                            <li
                            onClick={handleMenuHome}
                            className={
                                navMenu === "Home"
                                ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden"
                                : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"
                            }
                            >
                            <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-house-door"></i>
                            <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">
                                Home
                            </button>
                            {blobShow === "Home" ? (
                                <img
                                src={Blob}
                                className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10"
                                alt="blob"
                                />
                            ) : null}
                            </li>
                            <li
                            onClick={handleMenuAbout}
                            className={
                                navMenu === "About"
                                ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden"
                                : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"
                            }
                            >
                            <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-file-earmark-person"></i>
                            <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">
                                About
                            </button>
                            {blobShow === "About" ? (
                                <img
                                src={Blob}
                                className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10"
                                alt="blob"
                                />
                            ) : null}
                            </li>
                            <li
                            onClick={handleMenuProject}
                            className={
                                navMenu === "Project"
                                ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden"
                                : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"
                            }
                            >
                            <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-trophy"></i>
                            <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">
                                Project
                            </button>
                            {blobShow === "Project" ? (
                                <img
                                src={Blob}
                                className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10"
                                alt="blob"
                                />
                            ) : null}
                            </li>
                            <li
                            onClick={handleMenuCertificate}
                            className={
                                navMenu === "Certificate"
                                ? "rounded-md bg-primary pl-2 text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden"
                                : "text-primary rounded-md hover:bg-primary hover:pl-2 hover:text-bg py-1 w-full text-center flex items-start text-[18px] gap-4 transition-all duration-500 ease-in-out relative overflow-hidden"
                            }
                            >
                            <i className="text-[14px] slg:text-[18px] lg:text-[22px] cursor-pointer bi bi-award"></i>
                            <button className="w-full text-start text-[14px] slg:text-[16px] lg:text-[20px]">
                                Certificate{" "}
                            </button>
                            {blobShow === "Certificate" ? (
                                <img
                                src={Blob}
                                className="w-24 h-24 animate-spins xl:w-32 xl:h-32 absolute -top-7 -right-9 xl:-top-10 xl:-right-10"
                                alt="blob"
                                />
                            ) : null}
                            </li>
                        </ul>
                    </div>
                <div className="w-full border-b border-dashed border-primary"></div>
            </div>
        </>
    );
}
