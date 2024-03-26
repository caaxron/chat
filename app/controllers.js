import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function uploadFile(fileName, wordCount, fileContent) {
  try {
    await addDoc(collection(db, "chat"), {
      fileName: fileName,
      wordCount: wordCount,
      fileContent: fileContent,
    });
  } catch (error) {
    console.log(error, "Fail to upload");
  }
}
