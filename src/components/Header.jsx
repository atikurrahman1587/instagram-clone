import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { PiPlusCircleBold } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image src="/Instagram_logo_black.webp" alt="Instagram logo" layout="fill" className="object-contain"/>
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
            <Image src="/800px-Instagram_logo_2016.webp" alt="Instagram logo" layout="fill" className="object-contain"/>
        </div>
        {/* Middle */}
        <div className="relative mt-1">
            <div className="absolute top-2 left-2">
                <HiMagnifyingGlass className="h-5 text-gray-500"/>
            </div>
            <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md ease-out"/>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
            <AiFillHome className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200"/>
            <PiPlusCircleBold className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200"/>
            <img src="/atikur.jpg" alt="avater" className="h-10 rounded-full cursor-pointer"/>
        </div>
    </div>
  )
}
