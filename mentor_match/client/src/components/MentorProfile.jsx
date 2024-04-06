import React from "react";
import ProfileCard from "./ProfileCard";
import ProfilePosts from "./ProfilePosts";
import Navigation from "./Navigation";
import { useLocation } from 'react-router-dom';
export default function MentorProfile() {
    const location = useLocation();
    const { mentor } = location.state;
    
  return (
    <div className="bg-zinc-900">
         <Navigation/>
         <ProfileCard mentor={mentor} />
      <ProfilePosts mentor={mentor} />
    </div>
  );
}
