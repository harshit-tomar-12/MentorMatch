import React, { useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './room';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [showVideoChat, setShowVideoChat] = useState(true); // State to manage modal visibility

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const data = await fetch('http://localhost:5000/video/token', {
        method: 'POST',
        body: JSON.stringify({
          identity: username,
          room: roomName
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
      setToken(data.token);
      setShowModal(false); // Hide modal after submitting
    },
    [roomName, username]
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  const handleCloseVideoChat = useCallback(() => {
    setShowVideoChat(false);
  }, []);
  

  return (
    <>
      {showVideoChat && (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <Lobby
                username={username}
                roomName={roomName}
                handleUsernameChange={handleUsernameChange}
                handleRoomNameChange={handleRoomNameChange}
                handleSubmit={handleSubmit}
                handleClose={handleCloseVideoChat} // Pass the handleCloseVideoChat function to close the entire VideoChat component
              />
            </div>
          </div>
        </div>
      )}

      {/* Render Room component if token is available */}
      {token && !showVideoChat && <Room roomName={roomName} token={token} handleLogout={handleLogout} />}
    </>
  );
  
};

export default VideoChat;
