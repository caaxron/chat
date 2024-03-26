export const HistoryOutput = ({ data, selectedButton }) => {
  return (
    data &&
    data.map((item, index) => (
      <div key={index} className="flex flex-col">
        {item.id === selectedButton && (
          <ul>
            {item.wordCount.map((wordCountItem, wordCountIndex) => {
              const [user, count] = wordCountItem.split(": ");
              return <li key={wordCountIndex}>{`${user}: ${count}`}</li>;
            })}
          </ul>
        )}
      </div>
    ))
  );
};
