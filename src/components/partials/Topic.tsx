import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Topic = ({ id, topic, topicImg }: { id: string; topic: string; topicImg: string }) => {
  const navigate = useNavigate();

  const handleNavigateToQuestionPage = (topic: string) => {
    navigate(`/partsoftopic/${topic}`, {
      state: topic,
    });
  }
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      key={id} onClick={() => handleNavigateToQuestionPage(topic)} className="font-custom text-black hover:text-white bg-[#ffffff] w-full sm:w-[230px] py-5 rounded-md shadow-lg transition-shadow cursor-pointer flex gap-x-3 px-2 sm:px-3 items-center hover:bg-[#071952] hover:border-[2px] border-solid border-slate-300">
      <div className="w-[60px] h-[60px] rounded-md bg-[#071952] flex justify-center items-center object-contain overflow-hidden">
        <img src={topicImg} alt="icon" className='' />
      </div>
      <div>
        <p className='font-bold'>{topic}</p>
        <p className='text-sm'>VSTEPREVIEW</p>
      </div>
    </motion.div>
  )
}

export default Topic