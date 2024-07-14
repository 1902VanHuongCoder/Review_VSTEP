import { IoIosArrowDown } from "react-icons/io";
const Navigation = () => {
    return (
        <div className="px-4 sm:px-0 py-3 flex w-full justify-between items-center text-[#37B7C3] font-bold font-custom">
            <p><span className="text-[#000000]">VSTEP</span>REVIEW</p>
            <div className="flex gap-x-4">
                <div className="flex justify-center items-center gap-x-2">
                    <p>EditsAnime</p>
                    <span className="text-black"><IoIosArrowDown /></span>
                </div>
                <div className="w-fit h-fit border-[3px] border-solid border-[#088395] rounded-full flex justify-center items-center">
                    <img src="https://images.unsplash.com/photo-1720440906281-b4367a242a86?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" className=" w-[40px] h-[40px] rounded-full object-center" />
                </div>
            </div>
        </div>
    )
}

export default Navigation