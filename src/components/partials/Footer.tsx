const Footer = () => {
    return (
        <div className='absolute bottom-0 max-w-[1024px] px-5 sm:px-20 py-5 bg-[#071952] mt-20 rounded-tr-3xl rounded-tl-3xl shadow-xl flex flex-col sm:flex-row gap-x-10 text-white font-custom'>
            <div className='basis-1/2'>
                <p className='font-bold text-xl'><span className="text-[#37B7C3]">VSTEP</span>REVIEW</p>
                <p className='mt-5 font-semibold'>
                    VSTEPREVIEW dùng để ôn luyện các mẫu câu tiếng anh hay và thường gặp. Giúp tự tin hơn khi bước vào kì thi
                </p>
            </div>
            <div className='basis-1/2 mt-10 sm:mt-0'>
                <p className='font-bold text-xl text-[#37B7C3]'>Liên Hệ</p>
                <p className='mt-5'>
                    Email: <span className='font-bold'>tovanhuong007@gmail.com</span>
                </p>
                <p>
                    SĐT: <span className='font-bold'>033 4745 377</span>
                </p>
                <p>
                    Design: <span className='font-bold'>lehuuhoanganh@gmail.com</span>
                </p>
                <p>
                    Last updated: <span className='font-bold'>July 17, 2024</span>
                </p>
            </div>
        </div>
    )
}

export default Footer