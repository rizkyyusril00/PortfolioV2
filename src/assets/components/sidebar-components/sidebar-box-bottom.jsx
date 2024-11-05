import BtnSosmed from "../btnSosmed";

export default function SidebarBoxBottom () {
    return (
        <>
            <div className="bg-transparent w-[100%] h-auto">
                {/* box 1 */}
                <div className="w-full h-[50%] flex justify-center items-center px-4 gap-2 border-b border-dashed border-primary pb-3 slg:pb-4 lg:pb-6 xl:pb-8">
                    <q className="text-center text-primary italic font-thin text-[12px] slg:text-[16px] lg:text-[20px]">There is nothing impossible to him who will try</q>
                </div>
                {/* box2 */}
                <div className="w-full flex justify-center items-center py-2 slg:py-4 lg:py-6 xl:py-7 gap-4">
                    <BtnSosmed />
                </div>
            </div>
        </>
    )
}