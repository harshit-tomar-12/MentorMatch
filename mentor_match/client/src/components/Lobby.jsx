import React, { useState } from 'react';

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  handleClose
}) => {
  const [ismodalopen, setModal] = useState(true);

  const handleCloseModal = (event) => {
    handleClose(event);
    setModal(false);
  };

  const handleFormSubmit = (event) => {
    handleSubmit(event);
    handleClose(event);
    setModal(false); // Close the modal after submitting the form
  };

  return (
    ismodalopen && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-xl mb-4">Enter a room</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="field"
              value={username}
              onChange={handleUsernameChange}
              required
              className="block w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="room"
              className="block text-gray-700 font-semibold mb-2"
            >
              Room name:
            </label>
            <input
              type="text"
              id="room"
              value={roomName}
              onChange={handleRoomNameChange}
              required
              className="block w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>

          <button
            type="button"
            onClick={handleFormSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    )
  );
};

export default Lobby;
