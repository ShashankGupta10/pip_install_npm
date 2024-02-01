"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [userMessage, setUserMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "system",
      text: "Hello! How can I help you?",
    },
  ]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (userMessage.trim() === "") return;
    setMessages((messages) => {
      return [...messages, { type: "user", text: userMessage }];
    });
    setUserMessage("");
    await axios
      .post("http://127.0.0.1:5000/chat", {
        question: userMessage,
      })
      .then((res) => {
        setMessages((messages) => {
          return [...messages, { type: "system", text: res.data.answer }];
        });
      });
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between p-4 border-b">
        
          <h2 className="text-xl font-bold">Chatbot</h2>
        </header>
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-${
                message.type === "user" ? "end" : "start"
              } space-x-2`}
            >
              {message.type === "user" ? (
                <div className="ml-auto p-3 rounded-lg bg-blue-500 text-white">
                  <p className="text-sm">{message.text}</p>
                </div>
              ) : (
                <>
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      CB
                    </span>
                  </span>
                  <div className="p-3 rounded-lg bg-gray-200 w-[500px]">
                    <p className="text-sm">{message.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </main>
        <footer className="p-4 border-t">
          <form onSubmit={handleSendMessage}>
            <div className="flex items-center space-x-2">
              <input
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="flex w-full border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-h-[50px] max-h-[100px] p-3 rounded-lg bg-gray-200"
                placeholder="Type your message..."
              ></input>
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 py-2 h-10 px-4"
              >
                Send
              </button>
            </div>
          </form>
        </footer>
      </div>
    </>
  );
};

export default Chat;
