import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../firebase/firebaseConfig';

interface Data {
    english_st: string,
    vietnamese_st: string,
    topic: string,
}

const initializeData: Data = {
    english_st: "",
    vietnamese_st: "",
    topic: "",
}

interface Topic {
    id: string,
    topic: string,
    topicImg: string,
}

interface Topics {
    topicss: Topic[];
}

const initializeTopics: Topics = {
    topicss: [
        { id: "123", topic: "Test", topicImg: "https://plus.unsplash.com/premium_photo-1720798650953-1bb37db7241c?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
}


const AddQuestion = () => {
    const [data, setData] = useState<Data>(initializeData);
    const [topics, setTopics] = useState<Topics>(initializeTopics);

    const handleChangeEnglishInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, english_st: e.target.value })
    }

    const handleChangeVietnameseInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, vietnamese_st: e.target.value })
    }

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

    return (
        <div className="min-h-screen w-full max-w-[1024px] px-5 sm:px-20 py-10 font-custom">
            <h1 className="text-4xl font-bold text-white drop-shadow-md">Thêm câu hỏi</h1>
            <div className="mt-10 flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="english_st" className="font-bold text-[#071952]">Câu tiếng Anh</label>
                    <textarea value={data.english_st} onChange={(event) => handleChangeEnglishInput(event)} rows={4} className="rounded-lg shadow-inner border-[2px] border-solid border-slate-200 outline-none p-2" id="english_st" name="english_st"></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="vietnamese_st" className="font-bold text-[#071952]">Câu tiếng Việt</label>
                    <textarea rows={4} value={data.vietnamese_st} onChange={(event) => handleChangeVietnameseInput(event)} className="rounded-lg shadow-inner border-[2px] border-solid border-slate-200 p-2 outline-none" id="english_st" name="english_st"></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="topic" className="font-bold text-[#071952]">Chọn chủ đề</label>
                    <select className="w-[200px] py-2 text-center rounded-md text-[#071952] font-bold outline-none border-[2px] border-solid border-slate-200">
                        <option>-- Chọn --</option>
                        {
                            topics.topicss.map((item, index) => (
                                <option key={index} value={item.topic}>{item.topic}</option>
                            )
                            )
                        }
                    </select>
                </div>
            </div>
            <div className="w-full flex justify-end mt-10 sm:mt-0"><button className="w-full sm:w-fit px-4 py-2 bg-[#071952] text-white rounded-xl font-bold">Thêm</button></div>
        </div>
    )
}

export default AddQuestion