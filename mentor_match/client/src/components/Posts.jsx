import React from "react";
import { Link } from "react-router-dom";

import 'remixicon/fonts/remixicon.css'
export default function Posts() {
  return (
    <>
      <div className="ml-4 justify-center self-center">
        <Link
          class="p-3 bg-post max-w-lg  rounded-2xl  flex flex-col items-center"
          to="#"
        >
          <div className=" flex gap-2 self-start px-3 pt-1">
            <h4 class="font-bold text-xl text-red-500">Anser Ahmed</h4>
            <p class="self-center text-xs text-zinc-500">4 days ago</p>
          </div>
          <p class="self-start px-3 pb-1 text-sm text-zinc-500">@anserahmed</p>

          <img
            src="https://loremflickr.com/800/600/girl"
            class=" rounded-lg overflow-hidden "
          />
          <p class="mt-2 text-gray-200 self-start">
            Create Exercises for any subject with the topics you and your
            students care about.
          </p>
          <div class="mt-5  self-start">
            <button
              type="button"
              class="inline-flex rounded-lg mx-2 justify-items-start  border-transparent bg-white text-black px-3 py-2 text-sm font-medium leading-3 hover:text-zinc-100 shadow-sm hover:bg-red-700"
            >
              Like
            </button>
            <button
              type="button"
              class="inline-flex rounded-lg justify-items-start  border-transparent bg-white text-black px-3 py-2 text-sm font-medium leading-3 hover:text-zinc-100 shadow-sm hover:bg-red-700"
            >
              Comments
            </button>
          </div>
        </Link>
        <hr class=" text-red-400 opacity-30 my-3" />
      </div>
      
    </>
  );
}
