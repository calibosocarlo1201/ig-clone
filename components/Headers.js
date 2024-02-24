import Image from "next/image"
import React from 'react'
import { SearchIcon } from "@heroicons/react/outline"

const Headers = () => {
  return (
        
    <div className="flex items-center justify-between max-w-6xl">
        {/* Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png" layout="fill" className="object-contain" />
        </div>
        <div className="cursor-pointer h-24 w-24 relative lg:hidden">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" layout="fill" className="object-contain" />
        </div>

        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute left-3 top-3">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
        </div>

        {/* right */}
        test
        
    </div>
       
  )
}

export default Headers
