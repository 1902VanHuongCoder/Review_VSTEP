
import { collection, getDocs } from "firebase/firestore";
import { withDataFetching, WithDataFetchingProps } from "../HOCs";
import TopicWithAnalytics from "./partials/Topic";
import { db } from "../firebase/firebaseConfig";

interface Topic {
  id: string,
  topic: string,
  topicImg: string,
}


const fetchTopics = async () => {
  const resultArray: Array<Topic> = [];
  await getDocs(collection(db, "topics")).then((response) => {

    response.docs.forEach((doc) => {
      resultArray.push(
        {
          topic: doc.data().topic,
          topicImg: doc.data().topicImg,
          id: doc.id,
        }
      )
    })
  });
  return resultArray;
};


const Topics: React.FC<WithDataFetchingProps<Topic[]>> = ({ data, isLoading, error, refetch }) => {
  if (isLoading) {
    return <div className="text-white font-custom text-lg">Đang tải chủ đề...</div>;
  }
  if (error) {
    return <div className="text-red-500 font-custom text-lg">
      <p>Lỗi khi tải chủ đề: {error}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={refetch}>Thử lại</button>
    </div>;
  }
  if (!data || data.length === 0) {
    return <div className="text-white font-custom text-lg">Chưa có dữ liệu chủ đề</div>;
  }
  return (
    <div className="mb-[425px] sm:mb-0 dark:bg-black light:bg-white">
      <h1 className='font-custom text-[#ffffff] font-bold px-3 sm:px-0 text-3xl sm:text-4xl drop-shadow-md text-left mt-10'>TẤT CẢ CÁC CHỦ ĐỀ</h1>
      <div className="px-3 sm:px-0 w-full grid grid-cols-1 sm:grid-cols-4 mt-5 gap-5 sm:gap-10">
        {
          data ? data.map((item, index) => (
              <TopicWithAnalytics key={index} id={item.id} topic={item.topic} topicImg={item.topicImg} />
            )) : <div className="font-custom text-white bg-[#37B7C3] w-full sm:w-[230px] py-5 rounded-md shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex gap-x-3 px-2 sm:px-3 items-center justify-center">
              <p>Chưa có dữ liệu chủ đề</p>
            </div>
        }
      </div>
    </div>
  )
}

const TopicsWithFetchingHOC = withDataFetching(Topics, fetchTopics, {refetchInterval: 3000, timesToStopRefresh: 5}); // No HOC applied here, just a direct assignment
export default TopicsWithFetchingHOC;