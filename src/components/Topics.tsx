import Topic from "./partials/Topic";

const Topics = () => {
    const testArray= ["Môi trường", "Giáo dục", "Tương tác", "Giải trí", "Thể chất", "Dân số"]; 
  return (
    <div className="">
        <h1 className='font-custom text-[#37B7C3] font-bold px-3 sm:px-0 text-3xl sm:text-4xl drop-shadow-md text-left mt-10'>TẤT CẢ CÁC CHỦ ĐỀ</h1>
        <div className="px-3 sm:px-0 w-full grid grid-cols-2 sm:grid-cols-4 mt-10 gap-5 sm:gap-10">
        {
            testArray.map((item) => (
                <Topic topic={item}/>
            ))
        }
        </div>
      
    </div>
  )
}

export default Topics