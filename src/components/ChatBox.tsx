import { useState } from 'react';
import ChatInput from './Input';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (message: string) => {
    // Add user message to history
    const newMessages = [...messages, { sender: 'user' as 'user', text: message }];
    setMessages(newMessages);

    // Simulate bot response (you can replace this with real API)
    setTimeout(() => {
      const botMessage = { sender: 'bot' as 'bot', text: `You said: "${message}"` };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div style={{ padding: '10px', height: 'calc(100vh - 120px)', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <div
              className={`message-bubble ${
                msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
              }`}
              style={{
                display: 'inline-block',
                padding: '10px 15px',
                borderRadius: '20px',
                maxWidth: '70%',
                wordWrap: 'break-word',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default Chat;
