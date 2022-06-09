import React from 'react';
import Image from 'next/image';
import {
    HomeIcon,
    ClockIcon,
    DotsHorizontalIcon,
    ChartBarIcon
} from "@heroicons/react/solid";
import {FaMicrophoneAlt} from "react-icons/fa";
import {RiCompassFill } from "react-icons/ri"

const Sidebar = () => {
  return (
    <section className='fixed top-0 z-40 flex-col items-center p-4 bg-black h-screen w-[90px] space-y-4'>
      <Image 
      src='https://rb.gy/xkacau'
      width={50} height={50}
      objectFit='contain'
      />
      <div className='space-y-8'>
          <HomeIcon className='sidebarIcon text-white opacity-[0.85]  '/>
          <RiCompassFill className='sidebarIcon text-xl'/>
          <FaMicrophoneAlt className='sidebarIcon ml-3'/>
          <ChartBarIcon className='sidebarIcon '/>
          <ClockIcon className='sidebarIcon '/>
          <DotsHorizontalIcon className='sidebarIcon '/>
      </div>
    </section>
  )
}

export default Sidebar