import { storage } from "../../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


export const upload = (image: File | null) => {
    let url = "";
    if (image) {
        const storageRef = ref(storage, `/topics/${image.name}`); // create reference to storage in products folder
        const uploadTask = uploadBytesResumable(storageRef, image); // upload image to storage

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
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((rurl) => {
                    url = rurl; 
                });
            }
        );
    }
    return url;
};