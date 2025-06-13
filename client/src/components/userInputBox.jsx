import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsArrowUpCircleFill } from "react-icons/bs";
import RequireAuthButton from "./RequireAuthButton";

const UserInputBox = ({
  value,
  onChange,
  placeholder,
  message,
  textareaRef,
}) => {
  const { sessionId } = useParams();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, textareaRef]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftkey) {
      e.preventDefault();
      message();
    }
  }

  if (sessionId) {
    // Fixed position at bottom when sessionId exists
    return (
      <div className="fixed bottom-0 left-0 right-0 z-20 pb-9 px-5 md:left-56">
        <div className="mx-auto max-w-3xl w-full">
          <div className="border border-gray-300 bg-white rounded-4xl px-6 py-3 shadow-sm">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              rows={1}
              className="w-full flex-grow resize-none outline-none bg-transparent text-sm max-h-70"
            />
            <div className="flex justify-end">
              <RequireAuthButton>
                <button onClick={message} className="text-black">
                  <BsArrowUpCircleFill className="w-8 h-8" />
                </button>
              </RequireAuthButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Centered position when no sessionId
  return (
    <div className="border border-gray-300 bg-white rounded-4xl px-6 py-3 shadow-sm">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
        className="w-full flex-grow resize-none outline-none bg-transparent text-sm max-h-70"
      />
      <div className="flex justify-end">
        <RequireAuthButton>
          <button onClick={message} className="text-black">
            <BsArrowUpCircleFill className="w-8 h-8" />
          </button>
        </RequireAuthButton>
      </div>
    </div>
  );
};

export default UserInputBox;
