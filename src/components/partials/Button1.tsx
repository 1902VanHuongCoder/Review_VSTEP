import { IoIosArrowForward } from "react-icons/io";

const Button1 = () => {
  return (
    <div className="mt-[20px] sm:mt-0 px-10 bg-white rounded-lg py-3 shadow-md hover:shadow-xl hover:opacity-80 transition-shadow cursor-pointer font-bold text-xl group ">
    <button className="text-[#071952] flex justify-center items-center">
      {" "}
      <span>Bắt đầu</span>{" "}
      <span className="group-hover:translate-x-2 transition-transform">
        <IoIosArrowForward />
      </span>
    </button>
  </div>
  )
}

export default Button1