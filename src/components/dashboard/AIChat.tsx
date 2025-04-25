import React from "react";
import { SendHorizontal } from "lucide-react";

/**
 * AI Chat Assistant component
 */
const AIChat = () => {
  return (
    // <div className="bg-white shadow-sm h-full flex flex-col overflow-hidden">
    //   <div className="bg-white p-4 border-b flex flex-col items-center">
    //     <div className="mb-2">{/* Placeholder for logo */}</div>
    //     <h2 className="text-2xl font-bold text-center">
    //       Welcome to the AI Chat Assistant
    //     </h2>
    //   </div>

    //   <div className="mt-auto p-4 border-t">
    //     <div className="flex items-center bg-gray-100 rounded-lg p-2">
    //       <input
    //         type="text"
    //         placeholder="Ask your question here.."
    //         className="flex-1 bg-transparent border-0 focus:ring-0 outline-none px-4 py-2"
    //       />
    //       <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
    //         <Send size={18} />
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center mb-10">
        <img src="/Logo.svg" alt="" className="mb-4" />
        <h2 className="text-2xl font-bold text-center">
          Welcome to the AI Chat Assistant
        </h2>
      </div>
      <div className="relative flex w-[630px] h-[44px] items-center rounded-lg p-2">
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
