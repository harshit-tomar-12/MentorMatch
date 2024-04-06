import { useState } from "react";
import picui from "../asstes/picui.png";
import { Link, useNavigate } from "react-router-dom";

export default function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a data object with email and password
    const data = { email, password };

    try {
      // Send a POST request to your backend API
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Handle successful submission
        console.log("User signed up successfully!");
        // Update state variable to redirect to login page
        navigate('/feed', { state: { email } });
      } else {
        // Handle errors if the request was not successful
        console.error("Failed to sign up:", response.statusText);
      }
     
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/feed">
            <img
              className="mx-auto h-10 w-auto"
              src={picui}
              alt="Mentor Match"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-200">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-zinc-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold leading-6 text-zinc-300"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-300">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-red-600 hover:text-zinc-200"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
