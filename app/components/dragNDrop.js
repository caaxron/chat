import { useMemo } from "react";

export const DragNDrop = ({
  getRootProps,
  getInputProps,
  isFocused,
  isHovered,
  setIsHovered,
  fileName,
}) => {
  const style = useMemo(() => {
    return {
      flex: 1,
      display: "flex",
      width: "100%",
      height: "50%",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      borderWidth: 2,
      borderRadius: 16,
      borderColor: isFocused ? "#1e40af" : "#94a3b8",
      borderStyle: "dashed",
      backgroundColor: isHovered ? "#f0f0f0" : "#ffffff",
      color: "#94a3b8",
      outline: "none",
      transition: "border .24s ease-in-out, background-color .24s ease-in-out",
    };
  }, [isFocused, isHovered]);

  return (
    <div
      {...getRootProps({ style })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input className="w-full " {...getInputProps()} />
      <div>
        {fileName ? (
          fileName
        ) : (
          <div className="flex flex-col items-center justify-center">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <h1 className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </h1>
            <span className="text-xs">only for txt file</span>
          </div>
        )}
      </div>
    </div>
  );
};
