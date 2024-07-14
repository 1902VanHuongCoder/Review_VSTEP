import { IoMdCloseCircleOutline } from "react-icons/io";

const Question = () => {
  return (
    <div className="w-full max-w-[1024px] min-h-screen font-custom py-10 flex flex-col justify-between">
      <div className="w-full">
        <div className="flex justify-between items-start sm:items-center px-4 sm:px-0">
          <div className="basis-10/12 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-4 gap-y-4 sm:gap-y-0">
            <div className="bg-white py-3 px-4 rounded-xl shadow-xl font-bold">Câu hỏi số 1</div>
            <p className="font-semibold text-white">Sắp xếp các từ tiếng Anh cho phù hợp với câu tiếng Việt:</p>
          </div>
          <div className="text-[#071952] text-3xl sm:text-2xl cursor-pointer mt-3 sm:mt-0">
            <IoMdCloseCircleOutline />
          </div>
        </div>
        <div className="w-full mt-5 sm:mt-10 italic text-[#071952] font-semibold px-3 sm:px-0 text-base">
          <p>Những người dân ở khu vực nông thôn thường di chuyển đến các thành phố lớn để tìm kiếm các cơ hội công việc.</p>
        </div>
        <div className="w-full flex justify-start items-center gap-x-2 text-[#071952] font-bold mt-10 px-4 sm:px-0">
          <div className="px-5 py-2 bg-white rounded-2xl">The rural</div>
          <div className="px-5 py-2 bg-white rounded-2xl">population</div>
        </div>
        <div className="bg-white h-[2px] rounded-md my-10"></div>
        <div className="w-full flex flex-wrap justify-center sm:justify-start items-center gap-2 text-[#071952] font-bold px-4 sm:px-0">
          <div className="px-5 py-2 bg-white rounded-2xl">moves</div>
          <div className="px-5 py-2 bg-white rounded-2xl">in search of</div>
          <div className="px-5 py-2 bg-white rounded-2xl">employment</div>
          <div className="px-5 py-2 bg-white rounded-2xl">oppurtunities</div>
          <div className="px-5 py-2 bg-white rounded-2xl">often</div>
          <div className="px-5 py-2 bg-white rounded-2xl">to</div>
          <div className="px-5 py-2 bg-white rounded-2xl">major cities</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  p-4 sm:p-0 w-full mt-10 sm:mt-0 gap-y-3 sm:gap-y-0">
        <div className="flex items-center gap-x-3">
          <div className="h-2 bg-[#071952] w-[300px] rounded-md overflow-hidden shadow-inner">
              <div className="h-full w-[30%] bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-tr-md rounded-br-md"></div>
          </div>
          <p className="text-white font-bold">1/12</p>
        </div>
        <button className="py-3 px-6 bg-[#071952] text-white rounded-xl shadow-xl font-bold">Kiểm tra</button>
      </div>
    </div>
  )
}

export default Question