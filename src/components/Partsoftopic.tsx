import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { FaRegQuestionCircle } from "react-icons/fa";
import {motion} from 'framer-motion';
import { FaHome } from "react-icons/fa";


interface Question {
    id: string,
    english_st: string,
    vietnamese_st: string,
    topic: string,
}

interface Questions {
    questionss: Question[];
}

const initializeQuestions: Questions = {
    questionss: [],
}

const Partsoftopic = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [topic] = useState(state);
    const [questions, setQuestions] = useState<Questions>(initializeQuestions); 

    const handleReviewVSTEP = (index: number) => {
        navigate(`/questions/${topic}`, {
            state: {i: index, tp: topic} 
          });
    }
    const addTopic = async () => {
        await getDocs(collection(db, state)).then((response) => {
            const resultArray: Array<Question> = [];

            response.docs.forEach((doc) => {
                resultArray.push(
                    {
                        id: doc.id,
                        english_st: doc.data().english_st,
                        vietnamese_st: doc.data().vietnamese_st,
                        topic: doc.data().topic,
                    }
                )
            })

            setQuestions({
                questionss: resultArray
            });
        });
    };

    useEffect(() => {
        addTopic();
    }, []);

    const theNumberOfPart = questions.questionss.length > 0 ? Math.ceil(questions.questionss.length / 5) : 0;

    // Create an array of theNumberOfPart length
    const partArray = Array.from({ length: theNumberOfPart });


    return (
        <motion.div 
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ x: "-100%" }}
        className="min-h-screen w-full max-w-[1024px] px-5 sm:px-20 py-10 font-custom">
            <h1 className="text-4xl font-bold text-white drop-shadow-md uppercase flex justify-between items-center"><span>{state} topic</span><Link to="/home"><FaHome /></Link></h1>
            <div className="mt-10">
                {
                    questions.questionss.length > 0 ?
                        partArray.map((_, index) => (
                            <div onClick={() => handleReviewVSTEP(index + 1)} key={index} className="group w-full bg-white h-[80px] rounded-lg shadow-lg flex justify-between px-10 py-2 border-[2px] border-solid border-slate-200 mt-4 cursor-pointer hover:bg-[#071952] ">
                                <div className="flex justify-start items-center gap-x-4 font-bold text-xl text-[#088395] group-hover:text-white">   <span>{index + 1}. </span> <span><FaRegQuestionCircle /></span> <span>Phần {index + 1}</span></div>
                                <div className="font-bold text-xl text-[#088395] flex justify-center items-center group-hover:text-white"> 5 câu </div>
                            </div>
                        ))
                        : <div className="w-full bg-white h-[80px] rounded-lg shadow-lg flex justify-center items-center font-bold text-[#071952]">
                            <p>Chưa có dữ liệu cho chủ đề này</p>
                        </div>

                }

            </div>
        </motion.div>
    )
}

export default Partsoftopic