import { useState } from 'react';
import Navigation from './Navigation';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePhotoUpload = (event) => {
    // Handle photo upload logic
  };

  const handleVideoUpload = (event) => {
    // Handle video upload logic
  };

  const handlePollOptionChange = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index] = value;
    setPollOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setPollOptions([...pollOptions, '']);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...pollOptions];
    updatedOptions.splice(index, 1);
    setPollOptions(updatedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Create Post</h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded-md p-4 mb-6 focus:outline-none focus:border-blue-500"
          value={postContent}
          onChange={handlePostContentChange}
          placeholder="Write your post here"
          rows="6"
        />
        
        {/* Instructions */}
        <div className="text-gray-600 mb-6">
          <p className="mb-2">Instructions:</p>
          <ul>
            <li>Include relevant information such as event details, announcements, or discussions.</li>
            <li>Ensure the photos are relevant and add value to your content.</li>
            <li>Keep the videos short and focused to maintain viewer interest.</li>
            <li>Use polls to engage with your audience and encourage participation.</li>
           <li> Review your post content and ensure it aligns with the provided instructions.</li>
          </ul>
        </div>

        {/* Photo Upload Section */}
        <div className="mb-6">
          <label className="block mb-2 font-bold text-gray-700">Upload Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>

        {/* Video Upload Section */}
        <div className="mb-6">
          <label className="block mb-2 font-bold text-gray-700">Upload Video</label>
          <input type="file" accept="video/*" onChange={handleVideoUpload} />
        </div>

        {/* Poll Section */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Create Poll</h3>
          {pollOptions.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
                value={option}
                onChange={(event) => handlePollOptionChange(index, event.target.value)}
                placeholder={`Option ${index + 1}`}
              />
              {pollOptions.length > 2 && (
                <button
                  type="button"
                  className="text-red-500 font-semibold focus:outline-none"
                  onClick={() => handleRemoveOption(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md focus:outline-none"
            onClick={handleAddOption}
          >
            Add Option
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  </>
  );
};

export default CreatePost;
