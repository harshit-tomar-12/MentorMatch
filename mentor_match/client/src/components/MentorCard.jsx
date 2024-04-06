import React from 'react';

// Mentor card component
const MentorCard = ({ mentor }) => {
  return (
    <div class="dark:bg-slate-800 gap-6 flex items-center justify-center my-2 mx-2">
    <div class="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
      <div class="flex items-center gap-4">
        <img 
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
          class="w-14 group-hover:w-14 group-hover:h-18 h-14 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
          alt="Mentor Avatar"
        />
        <div class="flex flex-col">
          <h1 class="text-gray-600 dark:text-gray-200 font-bold text-sm md:text-lg">
            {mentor.name}
          </h1>
          <p class="text-gray-400 text-xs md:text-sm">{mentor.position}</p>
          <a
            class="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500"
          >
            {mentor.email}
          </a>
        </div>
        <button class="follow-button text-xs text-white bg-blue-500 hover:bg-blue-600 rounded-md py-1 px-3 transition-colors duration-300 ease-in-out transform hover:scale-105">
          Follow
        </button>
      </div>
      
    </div>
  </div>
  
  );
};

export default MentorCard;
