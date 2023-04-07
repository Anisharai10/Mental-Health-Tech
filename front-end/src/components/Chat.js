import React, { useState } from 'react';
//import { Chatbot } from '@google-cloud/dialogflow';
import Typing from 'react-typing-effect';

const projectId = 'YOUR_PROJECT_ID';
const sessionId = 'YOUR_SESSION_ID';

const ChatbotComponent = () => {
  const [chat, setChat] = useState([]);

  const handleUserInput = (event) => {
    const newChat = [...chat];
    newChat.push({ user: 'user', message: event.target.value });
    setChat(newChat);
  };

  const handleChatbotResponse = (response) => {
    const newChat = [...chat];
    newChat.push({ user: 'bot', message: response });
    setChat(newChat);
  };

  return (
    <div>
      <div>
        {chat.map((message, index) => (
          <div key={index}>
            {message.user}: {message.message}
          </div>
        ))}
      </div>
      <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/9216421f-76e4-41cf-bae4-db02637fed2b">
</iframe>

<div className="talk-to-us-banner">
      <h1 className="banner-text">Talk to Us</h1>

      
    </div>
      
    </div>
    
    









    
  );
};

export default ChatbotComponent;
