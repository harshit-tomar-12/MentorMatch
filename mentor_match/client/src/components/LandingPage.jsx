import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
const LandingPage = () => {
  return (
    <>
    <Navigation/>
    <div class="heroine min-h-screen">
      <div class="relative isolate px-6 pt-0 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-34 lg:py-15">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-300 ring-1 ring-zinc-100/20 hover:ring-zinc-200/10">
              Announcing our next round of funding.{" "}
              <Link to="#" class="font-semibold text-red-600">
                <span class="absolute inset-0" aria-hidden="true"></span>Read
                more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Ready to find your perfect mentor?
            </h1>
            <p class="mt-6 text-lg leading-8 text-zinc-400">
            Mentor Match is a platform designed to facilitate meaningful connections between mentors and mentees. Whether you're seeking guidance in your career, education, or personal development, Mentor Match is here to help.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/feed"
              >
               <button className="animate-bounce focus:animate-none hover:animate-bounce inline-flex text-md font-medium bg-red-600 mt-3 px-3 py-2 rounded-lg tracking-wide text-white hover:bg-white hover:text-black">Explore </button>
              </Link>
              <Link to="/about" class="text-sm font-semibold leading-6 text-zinc-300 hover:text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
    </>
  );
};

export default LandingPage;
