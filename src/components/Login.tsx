import Button2 from "./partials/Button2"
import workingImage from '../assets/working.png';
const Login = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="basis-10/12 sm:basis-8/12 h-full bg-white p-10 sm:px-32  rounded-tl-2xl sm:rounded-tl-none rounded-bl-2xl sm:rounded-bl-none rounded-br-2xl rounded-tr-2xl">
                <div className="sm:p-20 font-custom flex flex-col gap-y-10">
                    <div className="text-3xl hidden sm:flex flex-col gap-y-2 ">
                        <p className="font-bold drop-shadow-md">ÔN TẬP <span className="bg-gradient-to-tr from-[#071952] from-70% to-[#088395] to-80% text-transparent bg-clip-text">V-STEP</span></p>
                        <p className="font-medium drop-shadow-md">LET'S RERIEW V-STEP</p>
                    </div>
                    <div className="z-50">
                        <h1 className="text-4xl font-bold text-[#37B7C3] drop-shadow-md sm:text-left text-center">ĐĂNG NHẬP</h1>
                        <div className="w-full sm:w-10/12 h-fit flex flex-col gap-y-2 mt-8">
                            <label className="font-semibold text-lg flex gap-x-1" htmlFor="email"><span>Email</span><span className="text-red-500">*</span></label>
                            <input className="bg-[#37B7C3] text-white pl-2 py-3 outline-none placeholder:text-white placeholder:font-semibold rounded-md" type="email" required placeholder="Login@gmail.com" />
                        </div>
                        <div className="w-full sm:w-10/12 h-fit flex flex-col gap-y-2 mt-8">
                            <label className="font-semibold text-lg flex gap-x-1" htmlFor="email"><span>Password</span><span className="text-red-500">*</span></label>
                            <input className="bg-[#37B7C3] text-white pl-2 py-3 outline-none placeholder:text-white placeholder:font-semibold rounded-md" type="email" required placeholder="*****************" />
                        </div> 
                    </div>
                    <Button2 label="Đăng nhập" />
                    <p className="font-semibold">Nếu bạn chưa có tài khoản? <span className="text-[#37B7C3] cursor-pointer hover:underline">Đăng ký ngay</span></p>
                </div>
            </div>
            <div className="basis-4/12 relative hidden sm:block">
                <div className="w-[700px] h-full absolute flex flex-col justify-center items-center left-[-70%]">
                    <img src={workingImage} alt="Woman is using laptop image" className="w-full"/>
                </div>
            </div>
        </div>
    )
}

export default Login