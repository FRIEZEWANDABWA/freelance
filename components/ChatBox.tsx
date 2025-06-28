import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  type Message = {
    text: string;
    sender: 'user' | 'agent';
    time: string;
  };
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: 'Hi 👋 Need help? Ask us anything!', 
      sender: 'agent',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = { 
      text: message, 
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setMessage('');

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage: Message = {
        text: 'Thanks for your message! Our team will get back to you shortly.', 
        sender: 'agent',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...newMessages, agentMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        className="fixed bottom-6 right-6 bg-accent-500 text-primary-100 rounded-full p-4 shadow-lg hover:bg-accent-600 transition-all z-50"
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Popup Notification */}
      {showPopup && !isOpen && (
        <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-bounce-slow z-50">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute -top-2 -right-2 bg-primary-800 text-white rounded-full p-1"
          >
            <X size={14} />
          </button>
          <p className="text-primary-900 font-medium">Hi there! 👋</p>
          <p className="text-primary-700 text-sm">Need help with anything? We're here for you!</p>
        </div>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-xl w-80 sm:w-96 z-50 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-primary-900 text-primary-100 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-accent-500 rounded-full p-2 mr-3">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold">SmartSpark Support</h3>
                <p className="text-xs text-primary-300">We typically reply in a few minutes</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg p-3 max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-accent-500 text-primary-100' 
                      : 'bg-primary-800 text-primary-100'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-primary-200' : 'text-primary-300'
                  }`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={message}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-accent-500"
            />
            <button 
              type="submit"
              className="bg-accent-500 text-primary-100 p-2 rounded-r-lg hover:bg-accent-600"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}