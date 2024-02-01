"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = () => {
    if (userMessage.trim() === '') {
      return;
    }

    setMessages([...messages, { type: 'user', text: userMessage }]);
    setUserMessage('');
  };

  useEffect(() => {

    const fetchChatbotMessages = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/chat');
        const data = await response.json();

        // Update messages state with the chatbot messages
        setMessages([...messages, ...data.map(message => ({ type: 'chatbot', text: message }))]);
      } catch (error) {
        console.error('Error fetching chatbot messages:', error);
      }
    };

    fetchChatbotMessages();
  }, []); 
  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between p-4 border-b">
        <Link href={"/dashboard/company"}>
            <svg
              class="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Link>
          <h2 className="text-xl font-bold">Chatbot</h2>
        </header>
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-end space-x-2">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">CB</span>
            </span>
            <div className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800">
              <p className="text-sm">How can I help you?</p>
            </div>
          </div>
          {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-${message.type === 'user' ? 'end' : 'start'} space-x-2`}
          >
            {message.type === 'user' ? (
              <div className="ml-auto p-3 rounded-lg bg-blue-500 text-white">
                <p className="text-sm">{message.text}</p>
              </div>
            ) : (
              <>
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">CB</span>
                </span>
                <div className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800">
                  <p className="text-sm">{message.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
        </main>
        <footer className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <input
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex w-full border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-h-[50px] max-h-[100px] p-3 rounded-lg bg-gray-200 dark:bg-gray-800"
              placeholder="Type your message..."
            ></input>
            <button
              onClick={handleSendMessage}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 py-2 h-10 px-4"
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Chat;
