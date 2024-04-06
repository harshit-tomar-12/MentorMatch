import React from "react";
import ProfileCard from "./ProfileCard";
import ProfilePosts from "./ProfilePosts";
import Navigation from "./Navigation";
export default function AdminProfile() {
  return (
    <div className="bg-zinc-900">
        <Navigation/>
      <ProfileCard />
      <ProfilePosts />
    </div>
  );
}