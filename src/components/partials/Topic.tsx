import { useNavigate } from "react-router-dom";
const Topic = ({id, topic, topicImg } :{id: string; topic:string; topicImg: string}) => {
  const navigate = useNavigate();

  const handleNavigateToQuestionPage = (topic: string) => {
    navigate(`/partsoftopic/${topic}`, {
      state: topic,
    });
  }
  return (
    <div key={id} onClick={() => handleNavigateToQuestionPage(topic)} className="font-custom text-white bg-[#37B7C3] w-full sm:w-[230px] py-5 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex gap-x-3 px-2 sm:px-3 items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#071952] flex justify-center items-center object-contain overflow-hidden">
                <img src={topicImg} alt="icon" className=''/>
            </div>
            <div>
                <p className='font-bold'>{topic}</p>
                <p className='text-sm'>VSTEPREVIEW</p>
            </div>
    </div>
  )
}

export default Topic