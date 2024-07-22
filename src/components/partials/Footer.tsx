import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className='absolute bottom-0 max-w-[1024px] px-5 sm:px-20 py-5 bg-[#071952] mt-20 rounded-tr-none sm:rounded-tr-3xl rounded-tl-none sm:rounded-tl-3xl shadow-xl flex flex-col sm:flex-row gap-x-10 text-white font-custom'>
            <div className='basis-1/2'>
                <p className='font-bold text-xl'><span className="text-[#37B7C3]">VSTEP</span>REVIEW</p>
                <p className='mt-5 font-semibold'>
                    Hệ thống giúp các bạn đang ôn thi B1 - VSTEP luyện tập các mẫu câu quen thuộc hỗ trợ Speaking - Writting - Reading
                </p>
                <div className="flex gap-x-4 font-bold mt-4"><Link to="/add/topic" className="">Thêm chủ đề</Link><Link to="/add/question" className="">Thêm câu hỏi</Link></div>
            </div>
            <div className='basis-1/2 mt-10 sm:mt-0'>
                <p className='font-bold text-xl text-[#37B7C3]'>Liên hệ hỗ trợ </p>
                <p className='mt-5'>
                    Email:  <span className='font-bold'>tovanhuong007@gmail.com</span>
                </p>
                <p>
                    SĐT:  <span className='font-bold'>033 4745 377</span>
                </p>
                <p>
                    Designer:  <span className='font-bold'>lehuuhoanganh@gmail.com</span>
                </p>
                <p>
                    Last updated: <span className='font-bold'>ngày 23 tháng 07 năm 2024</span>
                </p>
            </div>
        </div>
    )
}

export default Footer