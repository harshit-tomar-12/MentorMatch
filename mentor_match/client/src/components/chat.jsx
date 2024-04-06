import React, { useState, useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import './chatbox.css';
import { Chat, Channel, Window, MessageList, MessageInput } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import VideoChat from './VideoChat'; // Import your VideoChat component

const RealChat = ({ senderId, receiverId }) => {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat visibility
  const [isVideoChatOpen, setIsVideoChatOpen] = useState(false); // State to manage video chat visibility

  useEffect(() => {
    const fetchToken = async (userId) => {
      try {
        const response = await fetch('http://localhost:5000/chat/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });
        const { token } = await response.json();
        
        // Initialize StreamChat client
        const client = new StreamChat('cdus5hfdbznq');
        
        // Connect the user using connectUser function
        await client.connectUser({ id: userId }, token);
        
        return client;
      } catch (error) {
        console.error('Error fetching token:', error);
        return null;
      }
    };

    const initializeChat = async () => {
      const senderClient = await fetchToken(senderId);
      const receiverClient = await fetchToken(receiverId);
      
      if (senderClient && receiverClient) {
        setChatClient(senderClient);

        // Create or retrieve the channel where the users can communicate
        const channelId = `room`;
        const senderChannel = senderClient.channel('messaging', channelId, {
          members: [senderId, receiverId],
        });
        await senderChannel.watch();
        setChannel(senderChannel);
      }
    };

    initializeChat();
  }, [senderId, receiverId]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Toggle chat box visibility
  };

  const toggleVideoChat = () => {
    setIsVideoChatOpen(!isVideoChatOpen); // Toggle video chat visibility
  };

  const customStyles = {
    '--primary-color': 'green',
    '--md-font': '1.2rem',
    '--xs-m': '1.2rem',
    '--xs-p': '1.2rem',
  };

  return (
    <div className="chat-container">
      <div className='fixed bottom-0 right-0 mb-10 mr-10'>
        {!isChatOpen && (
          <button onClick={toggleChat} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Open Chat
          </button>
        )}
      </div>
      {isChatOpen && (
        <div className='fixed bottom-0 right-0 mb-10 mr-10'>
          <div className='h-64 w-64'>
          <div className="flex justify-between items-center mb-2 rounded-lg py-2 px-4 bg-gradient-to-r from-blue-400 to-green-400 shadow-md">
  <h3 className="text-lg font-semibold text-white">Chat Header</h3>
  
  <button onClick={toggleVideoChat} className="text-white hover:text-gray-200 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
    </svg>
  </button>
  
  <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>
            <Chat client={chatClient} >
              <Channel channel={channel}>
                <Window>
                  <MessageList></MessageList>
                  <MessageInput></MessageInput>
                </Window>
              </Channel>
            </Chat>
          </div>
        </div>
      )}
      {isVideoChatOpen && <VideoChat />} {/* Render VideoChat component if isVideoChatOpen is true */}
    </div>
  );
};

export default RealChat;
