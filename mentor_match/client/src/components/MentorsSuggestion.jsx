import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook to navigate programmatically
import MentorCard from './MentorCard'; // Import the MentorCard component

const MentorSuggestions = () => {
  const navigate = useNavigate(); // Initialize useHistory hook

  // Dummy mentor data
  const mentors = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Senior Developer',
      email: 'john@example.com',
      //   image: 'https://example.com/john_doe.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'UX Designer',
      email: 'jane@example.com',
    },
    {
      id: 3,
      name: 'Jane ',
      position: 'UX Designer',
      email: 'jane@example.com',
    },
    // Add more mentor objects as needed
  ];

  // Function to handle click on mentor card
  const handleMentorClick = (mentor) => {
    // Navigate to ProfileCard component passing the mentor's data
    
    navigate(`/profile`,  { state: { mentor } });
  };

  return (
    <div className="mentor-page">
      <div className="dark:bg-slate-800 gap-6 flex-col items-end justify-end" style={{ alignItems: 'flex-end' }}>
        {mentors.map((mentor, index) => (
          // Wrap MentorCard with a clickable element and attach onClick event handler
          <div key={index} onClick={() => handleMentorClick(mentor)} className='h-1/2 cursor-pointer'>
            <MentorCard mentor={mentor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSuggestions;
