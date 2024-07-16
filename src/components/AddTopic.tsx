
const AddTopic = () => {
  return (
    <div className="min-h-screen w-full max-w-[1024px] px-5 sm:px-20 py-10 font-custom">
      <h1 className="text-4xl font-bold text-white drop-shadow-md">Thêm chủ đề</h1>
      <div className="mt-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="english_st" className="font-bold text-[#071952]"> Tên chủ đề </label>
          <textarea rows={4} className="rounded-lg shadow-inner border-[2px] border-solid border-slate-200 outline-none p-2" id="english_st" name="english_st"></textarea>
        </div>
      </div>
      <div className="w-full flex justify-end mt-10 sm:mt-5"><button className="w-full sm:w-fit px-4 py-2 bg-[#071952] text-white rounded-xl font-bold">Thêm</button></div>
    </div>
  )
}

export default AddTopic