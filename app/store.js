import { create } from "zustand";
import { uploadFile } from "./controllers";

const useStore = create((set) => ({
  wordCounts: [],

  calculateWord: (fileContent, fileName) => {
    const lines = fileContent.split("\n");
    const wordCounts = {};

    let currentUser = "";

    lines.forEach((line) => {
      const parts = line.trim().split(/\s+/);
      if (parts.length > 0) {
        if (parts[0].startsWith("<") && parts[0].endsWith(">")) {
          currentUser = parts[0].slice(1, -1);
          wordCounts[currentUser] =
            (wordCounts[currentUser] || 0) + parts.length - 1;
        } else {
          wordCounts[currentUser] =
            (wordCounts[currentUser] || 0) + parts.length;
        }
      }
    });

    const sortedData = Object.entries(wordCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([user, count]) => `${user}: ${count + " words"}`);

    uploadFile(fileName, sortedData, lines);
    set({ wordCounts: sortedData });
  },
}));

export { useStore };
