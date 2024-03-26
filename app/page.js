"use client";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useCallback, useEffect, useState } from "react";
import { DragNDrop } from "./components/dragNDrop";
import { useStore } from "./store";
import { useDropzone } from "react-dropzone";
import { FileOuput } from "./components/fileOutput";
import { HistoryList } from "./components/historyList";
import { HistoryOutput } from "./components/historyOutput";

export default function Home() {
  const { wordCounts, calculateWord } = useStore();

  const [isHovered, setIsHovered] = useState(false);

  const [fileName, setFileName] = useState("");

  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState();

  const [selectedButton, setSelectedButton] = useState();

  const getData = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "chat"));
      const item = [];
      querySnapshot.forEach((doc) => {
        item.push({ id: doc.id, ...doc.data() });
      });
      setData(item);
      return data;
    } catch (e) {
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = async () => {
          const fileContent = reader.result;
          setFileName(file.name);
          calculateWord(fileContent, file.name);
        };
        reader.readAsText(file);
      });
    },
    [wordCounts]
  );

  const { getRootProps, getInputProps, isFocused } = useDropzone({
    onDrop,
    accept: {
      "text/html": [".txt"],
    },
  });

  const buttonHandler = (id) => {
    setSelectedButton(id);
  };

  useEffect(() => {
    getData();
  }, [wordCounts]);

  return (
    <main className="w-full h-screen grid grid-cols-2 gap-6 p-10">
      <div>
        <DragNDrop
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isFocused={isFocused}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          fileName={fileName}
          setFileName={setFileName}
        />
        <FileOuput wordCounts={wordCounts} />
      </div>
      <div>
        <div className="p-10 grid grid-cols-5 gap-6 bg-slate-200 rounded-2xl">
          <HistoryList
            isLoading={isLoading}
            data={data}
            selectedButton={selectedButton}
            buttonHandler={buttonHandler}
          />
        </div>
        <div className="p-10">
          <HistoryOutput data={data} selectedButton={selectedButton} />
        </div>
      </div>
    </main>
  );
}
