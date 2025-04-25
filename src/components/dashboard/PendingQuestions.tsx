import React from "react";

/**
 * Pending Questions component showing user questions
 */
const PendingQuestions = () => {
  // Questions data
  const questions = [
    {
      user: "Phoenix Baker",
      username: "@phoenix",
      time: "5min ago",
      avatar: "/img2.svg",
      question: "What are the requirements for opening a new store?",
      online: true,
    },
    {
      user: "Koray Okumus",
      username: "@koray",
      time: "4hr ago",
      avatar: "/img7.svg",
      question: "How do I manage inventory effectively?",
      online: true,
    },
  ];

  return (
    <div className="bg-white h-full shadow overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-medium">Pending Questions</h2>
        <div className="bg-[#2fbdff] text-white px-2 py-0.5 rounded-md text-sm">
          02
        </div>
      </div>

      <div className="divide-y">
        {questions.map((question, idx) => (
          <div key={idx} className="p-3">
            <div className="flex items-start mb-2">
              <div className="flex flex-row items-center justify-center space-x-2">
                {question.online && (
                  <span className="w-3 h-3 bg-[#2fbdff] rounded-full border-2 border-white"></span>
                )}
                <img
                  src={question.avatar}
                  alt={question.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              <div>
                <div className="flex flex-col space-x-3 items-baseline">
                  <div className="flex flex-row justify-around space-x-16 items-center">
                    <span className="font-medium mr-4">{question.user}</span>
                    <div className="text-sm text-gray-500">{question.time}</div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {question.username}
                  </span>
                </div>
              </div>
            </div>

            <div className="chat-bubble">
              <p className="text-gray-700">{question.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingQuestions;
