import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <section className='fixed top-0 z-40 flex-col items-center p-4 bg-black h-screen w-[90px] space-y-4'>
      <Image 
      src='https://rb.gy/xkacau'
      width={50} height={50}
      objectFit='contain'
      />
      <div></div>
    </section>
  )
}

export default Sidebar