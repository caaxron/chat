export const FileOuput = (wordCounts) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {Object.entries(wordCounts).map(([index, wordCount]) => (
        <ul key={index}>
          {wordCount.map((wordCountItem, wordCountIndex) => {
            const [user, count] = wordCountItem.split(": ");
            return <li key={wordCountIndex}>{`${user}: ${count}`}</li>;
          })}
        </ul>
      ))}
    </div>
  );
};
