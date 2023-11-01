import Image from "next/image";

export default function Header() {
  return (
    <div>
        {/* Left */}
        <div className="">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image src="/Instagram_logo_black.webp" alt="Instagram logo" layout="fill" className="object-contain"/>
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image src="/800px-Instagram_logo_2016.webp" alt="Instagram logo" layout="fill" className="object-contain"/>
            </div>
        </div>
        {/* Middle */}

        {/* Right */}
    </div>
  )
}
