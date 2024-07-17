import { useEffect, useState } from "react";
import Topic from "./partials/Topic";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

interface Topic {
  id: string,
  topic: string,
  topicImg: string,
}

interface Topics {
  topicss: Topic[];
}

const initializeTopics: Topics = {
  topicss: [],
}

const Topics = () => {

  const [topics, setTopics] = useState<Topics>(initializeTopics);

  const addTopic = async () => {
    await getDocs(collection(db, "topics")).then((response) => {
      const resultArray: Array<Topic> = [];

      response.docs.forEach((doc) => {
        resultArray.push(
          {
            topic: doc.data().topic,
            topicImg: doc.data().topicImg,
            id: doc.id,
          }
        )
      })

      console.log(resultArray);

      setTopics({
        topicss: resultArray
      });
    });
  };
  useEffect(() => {
    addTopic();
  }, []);

  console.log(topics);
  return (
    <div className="">
      <h1 className='font-custom text-[#37B7C3] font-bold px-3 sm:px-0 text-3xl sm:text-4xl drop-shadow-md text-left mt-10'>TẤT CẢ CÁC CHỦ ĐỀ</h1>
      <div className="px-3 sm:px-0 w-full grid grid-cols-1 sm:grid-cols-4 mt-10 gap-5 sm:gap-10">
        {
          topics.topicss.map((item, index) => (
            <Topic key={index} id={item.id} topic={item.topic} topicImg={item.topicImg} />
          ))
        }
      </div>

    </div>
  )
}

export default Topics