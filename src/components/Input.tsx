import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && message.trim()) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Send a message..."
        className="form-control"
      />
      <button
        onClick={handleSend}
        disabled={!message.trim()}
        className="btn btn-primary"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
