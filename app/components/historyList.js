export const HistoryList = ({
  isLoading,
  data,
  selectedButton,
  buttonHandler,
}) => {
  return isLoading ? (
    <h1>Loading.....</h1>
  ) : (
    data &&
      data.map((item, index) => (
        <button
          onClick={() => buttonHandler(item.id)}
          className={`h-8 bg-cyan-100 rounded-xl border-2 ${
            item.id === selectedButton ? "border-cyan-500" : ""
          }`}
          key={index}
        >
          {item.fileName}
        </button>
      ))
  );
};
