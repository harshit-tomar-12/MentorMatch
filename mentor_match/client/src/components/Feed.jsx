import picnav from "../asstes/picnav.png";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import { useLocation } from 'react-router-dom';
import Navigation from "./Navigation";
import RealChat from './chat';
import {useEffect,useState} from 'react'
import MentorSuggestions from './MentorsSuggestion'
import './feed.css';

function Feed() {
  const location = useLocation();
  const { email } = location.state;
  const [senderId, setSenderId] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Send a POST request to your backend API
        const response = await fetch('http://localhost:5000/api/user/generaldata', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }), // Ensure email is sent as an object
        });

        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          // Parse the response JSON
          const data = await response.json();
          console.log(data._id);
          setSenderId(data._id);
          if (data._id === '660eb4b5086db9ba0779bfb7') {
            setReceiverId('660d311db972aa8d24e1f3bb');
          } else {
            setReceiverId('660eb4b5086db9ba0779bfb7');
          }
         
          
        } else {
          // Handle errors if the request was not successful
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, [email]);
  return (
    <>
    <Navigation  email={email}/>
      <div class="flex h-screen bg-light">
        {/* <!-- sidebar --> */}
        <div class="hidden md:flex bg-footer flex-col w-60 ">
          <div class="flex flex-col flex-1 bg-footer overflow-y-auto ">
            {/* <button class=" focus:outline-none text-zinc-300 focus:text-zinc-100  self-end pr-2 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button> */}

            <nav class="flex-1 px-2 py-2">
              <div class="relative max-w-sm mx-2  mt-2">
                <input
                  class="w-full py-1 px-4  text-zinc-50 bg-teal-800 border-gray-100 hover:bg-teal-900 rounded-md"
                  type="search"
                  placeholder="Search"
                />
                <button class="absolute inset-y-0 right-0 flex items-center px-4 bg-teal-800  border border-gray-300 rounded-r-md hover:bg-teal-900  focus:ring-2  ">
                <i class="ri-search-line  text-zinc-50 "></i>
                </button>
              </div>




              <Link
                to="#"
                class=" hover:rounded-md flex self-auto items-center px-4 py-2 mt-2 text-gray-100  hover:bg-gray-700"
              >
                <i class="ri-home-2-line self-center px-2"></i>Home
              </Link>

              <Link
                to="#"
                class=" hover:rounded-md flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <i class="ri-user-3-fill px-2"></i> Profile
              </Link>
              <hr class=" text-zinc-400 opacity-30 my-3" />

              <Link
                to="#"
                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md"
              >
                <i class="ri-arrow-right-up-line px-2"></i> Trending
              </Link>
              <details class="group flex items-center px-2 mt-2 ">
                <summary class="flex items-center justify-between p-2   text-gray-100 hover:rounded-md hover:bg-gray-700 hover:cursor-pointer">
                  <span>
                    {" "}
                    <i class="ri-command-line px-2 "></i>Interests
                  </span>

                  <svg
                    class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </summary>

                <article class=" ">
                  <ul class=" ">
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        <i class="ri-basketball-fill px-2"></i>Sports
                      </Link>
                    </li>
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        <i class=" px-2 ri-book-open-fill"></i>Education
                      </Link>
                    </li>
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        {" "}
                        <i class=" px-2 ri-game-fill"></i>Gaming
                      </Link>
                    </li>
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        {" "}
                        <i class=" px-2 ri-building-line"></i>Lifestyle
                      </Link>
                    </li>
                  </ul>
                </article>
              </details>

              <details class="group flex items-center px-2 mt-2 ">
                <summary class="flex items-center justify-between p-2   text-gray-100 hover:rounded-md hover:bg-gray-700 hover:cursor-pointer">
                  <span>
                    {" "}
                    <i class="ri-command-line px-2 "></i>Interests
                  </span>

                  <svg
                    class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </summary>

                <article class=" ">
                  <ul class=" ">
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        <i class="ri-basketball-fill px-2"></i>Sports
                      </Link>
                    </li>
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        <i class=" px-2 ri-book-open-fill"></i>Education
                      </Link>
                    </li>
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        {" "}
                        <i class=" px-2 ri-game-fill"></i>Gaming
                      </Link>
                    </li>
                    <li className=" flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700  hover:rounded-md">
                      <Link to="">
                        {" "}
                        <i class=" px-2 ri-building-line"></i>Lifestyle
                      </Link>
                    </li>
                  </ul>
                </article>
              </details>
            </nav>
          </div>
        </div>
        

        {/* <!-- Main content --> */}

        <div class="flex flex-col flex-1 py-2 bg-dark overflow-y-auto">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
        <MentorSuggestions/>
      </div>
      <hr class=" text-zinc-400 opacity-30 "></hr>
      <RealChat senderId={senderId} receiverId={receiverId} />
    </>
  );
}

export default Feed;
