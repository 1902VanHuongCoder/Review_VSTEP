import cake from '../../assets/humburger.png';
const Topic = ({topic}: {topic: string}) => {
  return (
    <div className="font-custom text-white bg-[#37B7C3] w-[170px] sm:w-[200px] py-5 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex gap-x-3 px-2 sm:px-3 items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#071952] flex justify-center items-center">
                <img src={cake} alt="icon" className='w-[80%]'/>
            </div>
            <div>
                <p className='font-bold'>{topic}</p>
                <p className='text-sm'>VSTEPREVIEW</p>
            </div>
    </div>
  )
}

export default Topic