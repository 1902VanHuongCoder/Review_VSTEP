import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
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

interface AnswerWasRandomed {
  answerWasRandomed: string[],
  sort: boolean,
}

const initializeAnswerWasRandomed: AnswerWasRandomed = {
  answerWasRandomed: [],
  sort: false,
}

interface Answer {
  answer: string[],
}

const initializeAnswer: Answer = {
  answer: [],
}



const Question = () => {
  const { state } = useLocation();
  const [questions, setQuestions] = useState<Questions>(initializeQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(state.i - 5);
  const [answer, setAnswer] = useState<Answer>(initializeAnswer);
  const [answerWasRandomed, setAnswerWasRandomed] = useState<AnswerWasRandomed>(initializeAnswerWasRandomed);

  console.log(answer);

  const handleAnswerTheQuestion = (index: number) => {
    const newAnswerArray = [...answer.answer, answerWasRandomed.answerWasRandomed[index]];
    const newAnswerWasRandomed = answerWasRandomed.answerWasRandomed.filter((_, i) => i !== index);

    setAnswerWasRandomed({ ...answerWasRandomed, answerWasRandomed: newAnswerWasRandomed });
    setAnswer({ ...answer, answer: newAnswerArray });
  };

  const loadQuestion = async () => {
    await getDocs(collection(db, state.tp)).then((response) => {
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
    loadQuestion();
  }, []);

  // Function to shuffle an array
  function shuffleArray(array: Array<string>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let charactersArrayShuffled;

  if (currentQuestion < 0) {
    setCurrentQuestion(0);
  }

  if (questions.questionss.length > 0) {
    if (questions.questionss[currentQuestion] && !answerWasRandomed.sort) {
      const str = questions.questionss[currentQuestion].english_st;
      const charactersArrayNoShuffle = str.split(" ");
      charactersArrayShuffled = shuffleArray(charactersArrayNoShuffle);
      setAnswerWasRandomed({ answerWasRandomed: charactersArrayShuffled, sort: true });
    }
  }

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
          <p>
            {questions.questionss[currentQuestion]?.vietnamese_st}
          </p>
        </div>
        <div className="w-full flex justify-start items-center gap-x-2 text-[#071952] font-bold mt-10 px-4 sm:px-0">
          {answer.answer?.map((item, index) => (
            <div onClick={() => handleAnswerTheQuestion(index)} key={index} className="px-5 py-2 bg-white rounded-2xl">{item}</div>
          ))
          }
        </div>
        <div className="bg-white h-[2px] rounded-md my-10"></div>
        <div className="w-full flex flex-wrap justify-center sm:justify-start items-center gap-2 text-[#071952] font-bold px-4 sm:px-0">
          {answerWasRandomed.answerWasRandomed?.map((item, index) => (
            <div onClick={() => handleAnswerTheQuestion(index)} key={index} className="px-5 py-2 bg-white rounded-2xl">{item}</div>
          ))
          }
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  p-4 sm:p-0 w-full mt-10 sm:mt-0 gap-y-3 sm:gap-y-0">
        <div className="flex items-center gap-x-3">
          <div className="h-2 bg-[#071952] w-[300px] rounded-md overflow-hidden shadow-inner">
            <div className="h-full w-[30%] bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-tr-md rounded-br-md"></div>
          </div>
          <p className="text-white font-bold">1/12</p>
        </div>
        <button className="w-full sm:w-fit mt-4 sm:mt-0 py-3 px-6 bg-[#071952] text-white rounded-xl shadow-xl font-bold">Kiểm tra</button>
      </div>
    </div>
  )
}

export default Question