import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase/firebaseConfig";
import { FaImage } from "react-icons/fa";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { LoadingContext } from "../contexts/LoadingContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { NocompleteContext } from "../contexts/Nocomplete";
import { useNavigate } from "react-router-dom";

interface TopicImage {
  urlToDisplay: string;
  imgDetails: File | null;
  error: string;
}

const initialTopicImageState: TopicImage = {
  urlToDisplay: "",
  imgDetails: null,
  error: "",
};

const AddTopic = () => {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoadingContext);
  const { notifyNocomplete } = useContext(NocompleteContext);
  const { notify } = useContext(NotificationContext);

  const [topic, setTopic] = useState("");
  const [topicImage, setTopicImage] = useState<TopicImage>(initialTopicImageState);

  const handleChangeTopic = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTopic(e.target.value);
  }


  const handleAddTopic = async () => {
    setLoading(true);
    const imgD = topicImage.imgDetails;
    const storageRef = ref(storage, `/topics/${imgD?.name}`); // create reference to storage in products folder
    if (imgD !== null && topic !== "") {
      try {
        const uploadTask = uploadBytesResumable(storageRef, imgD); // upload image to storage
        uploadTask.on(
          //keep tracking upload process to display nescessary informations
          "state_changed",
          (snapshot) => {
            // return percent of completed upload
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(percent);
          },
          (error) => {
            console.log(error);
            console.log("Error");
            setLoading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (rurl) => {
              try {
                await addDoc(collection(db, "topics"), {
                  topic: topic,
                  topicImg: rurl,
                });
              } catch (error) {
                console.log(error);
                notifyNocomplete();
                setLoading(false);
              }
              setLoading(false);
              notify();
              setTopic("");
              navigate(`/home`);
            });
          }
        );
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const tempURL = URL.createObjectURL(selectedFile);
      setTopicImage({
        imgDetails: selectedFile,
        urlToDisplay: tempURL,
        error: "",
      });
    }
  }

  return (
    <div className="min-h-screen w-full max-w-[1024px] px-5 sm:px-20 py-10 font-custom">
      <h1 className="text-4xl font-bold text-white drop-shadow-md">Thêm chủ đề</h1>
      <div className="mt-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="english_st" className="font-bold text-[#071952]"> Tên chủ đề </label>
          <textarea value={topic} onChange={(event) => handleChangeTopic(event)} rows={4} className="rounded-lg shadow-inner border-[2px] border-solid border-slate-200 outline-none p-2" id="english_st" name="english_st"></textarea>
        </div>
        <div>
          <p className="font-bold text-[#071952]"> Chọn ảnh chủ đề </p>
          <div className="bg-white w-[120px] h-[40px] relative rounded-md border-[2px] border-solid border-slate-200 outline-none cursor-pointer mt-2">
            <input id="topicImg" name="topicImg" type="file" className="opacity-0 w-full h-full cursor-pointer" onChange={(event) => handleUploadImage(event)} />
            <label htmlFor="topicImg" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer">Chọn</label>
          </div>
        </div>
        <div>
          <p className="font-bold text-[#071952]"> Ảnh bạn đã chọn</p>
          <div className="w-full min-h-[200px] border-[2px] border-dashed border-white rounded-md flex justify-center items-center p-2 mt-2">
            {
              topicImage.urlToDisplay === "" ? <span className="flex flex-col items-center gap-y-2 font-bold text-[#071952]">
                <span className="flex justify-center items-center p-5 border-[3px] border-white border-solid rounded-md text-[#071952]">
                  <FaImage /></span>
                <span>Rỗng</span>
              </span> : <img src={topicImage.urlToDisplay} alt="topic image" />
            }
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-10 sm:mt-5"><button onClick={handleAddTopic} className="hover:opacity-80 w-full sm:w-fit px-4 py-2 bg-[#071952] text-white rounded-xl font-bold">Thêm</button></div>
    </div>
  )
}

export default AddTopic