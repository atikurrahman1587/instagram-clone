import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
export default function Post({id, username, userImg, img, caption}) {
  return (
    <div className="bg-white my-7 border rounded-md">
        {/* Post Header */}
        <div className="flex items-center p-5">
          <img className="h-12 rounded-full object-cover border p-1" src={userImg} alt={username}/>
          <p className="font-bold flex-1">{username}</p>
          <BsThreeDots className="h-5"/>
        </div>
        {/* Post image */}
        <img className="object-cover w-full" src={img} alt=""/>
        {/* Post Buttons */}
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <AiOutlineHeart className="btn"/>
            <BsChatDots className="btn"/>
          </div>
          <BiBookmark className="btn"/>
        </div>
    </div>
  )
}
