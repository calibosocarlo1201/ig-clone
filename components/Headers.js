import Image from "next/image"
import React from 'react'
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid";

const Headers = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 ">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto my-5">
          {/* Left */}
          <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
              <Image src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png" layout="fill" className="object-contain" alt="Instagram" />
          </div>
          <div className="cursor-pointer h-14 w-14 relative lg:hidden">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" layout="fill" className="object-contain" alt="Instagram" />
          </div>

          {/* Middle */}
          <div className="relative mt-1">
            <div className="absolute left-3 top-3">
              <SearchIcon className="h-5 text-gray-500" />
            </div>
            <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
          </div>

          {/* right */}
          <div className="flex items-center space-x-4">
            <HomeIcon className="hidden md:inline-flex h-6 text-gray-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out " />
            <PlusCircleIcon className="h-6 text-gray-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <img src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-1/414925425_2122205534782671_3242666902145637566_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH8DbhNHveCgHaMSCJF7ZcK7MpdtpyzdHnsyl22nLN0eYsO74kiy5U_exEapD61ukl0P0Zypct3450rzKLQ7ECG&_nc_ohc=jCDRiJP7tyIAX8uzcil&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBln7E8DAX8yocgVwL67PasHEihDVH5CXVqEIEzh2oK8A&oe=65E09B2E" alt="user-image" className="h-10 rounded-full" />
          </div>
      </div>

    </div>
    
       
  )
}

export default Headers
