import React from "react";
import { SendHorizontal } from "lucide-react";

/**
 * AI Chat Assistant component
 */
const AIChat = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center mb-10">
        <img
          src="/Logo.svg"
          alt=""
          className="mb-4 md:mt-0 lg:mt-0 mt-5 md:w-auto md:h-auto lg:w-auto lg:h-auto w-10 h-10"
        />
        <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-center">
          Welcome to the AI Chat Assistant
        </h2>
      </div>
      <div className="relative flex w-[360px] h-auto lg:w-[630px] lg:h-[44px] md:w-[630px] md:h-[44px] items-center rounded-lg p-2">
        <input
          type="text"
          placeholder="Ask your question here.."
          className="flex-1 w-full bg-white border border-[#d7dfe9] focus:ring-0 outline-none px-4 py-2"
        />
        <button className="absolute right-4 bg-transparent text-[#bbbdc0] p-2 rounded-md transition-colors">
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;
