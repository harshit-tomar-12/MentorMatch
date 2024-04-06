import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import picnav from '../asstes/picnav.png';

export default function Navigation({ email }) {
  const [userName, setUserName] = useState(null);

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
          // Set the userName state with the received data
          setUserName(data.email);
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
  }, [email]); // Add email as a dependency to re-fetch data when it changes

  return (
    <>
      <nav className="py-3 bg-footer border-solid shadow-2xl min-h-20 max-h-20">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="max-h-14 min-h-8 flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap pt-2 text-white">
              <img
                src={picnav}
                className="max-h-44 min-h-44"
                alt="M M Logo"
              />
            </span>
          </Link>

          <div className="flex items-center pt-2 lg:order-2">
            {userName ? (
              <span className="text-white font-medium rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-1 sm:mr-2 lg:mr-0 dark:bg-red-600 dark:hover:bg-red-500">
                {userName}
              </span>
            ) : (
              <Link
                to="/login"
                className="text-white bg-red-700 hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-1 sm:mr-2 lg:mr-0 dark:bg-red-600 dark:hover:bg-red-500"
              >
                Login <i className="ri-login-box-line"></i>
              </Link>
            )}

            <Link
              to="/create-post"
              className="text-white bg-green-700 hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-1 sm:mr-2 lg:mr-0 dark:bg-green-600 dark:hover:bg-green-500"
            >
              Create Post
            </Link>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-zinc-600 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
