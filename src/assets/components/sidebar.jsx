import SidebarBoxTop from "./sidebar-components/sidebar-box-top"
import SidebarBoxBottom from "./sidebar-components/sidebar-box-bottom"
import SidebarBoxMidle from "./sidebar-components/sidebar-box-midle"
import Cat from "../img/cat.gif"


export default function Sidebar({valueMain, blobShow, togleClickMain, navMenu, handleMenuHome, handleMenuAbout, handleMenuProject, handleMenuCertificate}) {


    return (
        <>
            <div className={"bg-transparent flex flex-col gap-3 slg:gap-4 lg:gap-6 xl:gap-8 h-full w-[30%] sticky"}>
                <div className="w-10 h-10 absolute -top-[27px] left-0 z-10">
                    <img src={Cat} alt="cat gif" className="w-full h-full"/>
                </div>
                {/* box atas */}
                <SidebarBoxTop valueMain={valueMain} togleClickMain={togleClickMain} />
                {/* box tengah */}
                <SidebarBoxMidle blobShow={blobShow} navMenu={navMenu} handleMenuHome={handleMenuHome} handleMenuAbout={handleMenuAbout} handleMenuProject={handleMenuProject} handleMenuCertificate={handleMenuCertificate} />
                {/* box bawah */}
                <SidebarBoxBottom />
            </div>
        </>
    )
}