import React from 'react';
import {MdOutlineShortText} from 'react-icons/md';

const Search = ({search, setSearch}) => {
  return (
    <div className='max-w-[1150px] bg-[#1a1a1a] px-5 pr-8 flex items-center rounded-full overflow-hidden border-2 border-[#333333]'>
        <div className='h-4 w-4 rounded-full border-2 flex-shrink-0 outline-none  animate-pulse' />

          <input 
          type='text' value={search} onChange={(e) => setSearch(e.target.value)}
          className=' bg-transparent  flex-grow text-white border-none  focus:ring-0 outline-none lg:w-full'
          placeholder='Search...'
          />
          
        
       
        <div className='flex items-center flex-grow divide-x-2 divide-dotted divide-[#333] ml-auto'>
            <div className='flex space-x-2 pr-5'>
            <button className='tag'>Minimal</button>
            <button className='tag'>House </button>
            <button className='tag'>Minimal</button>
            </div>
            <div className='flex items-center space-x-1.5 text-[#cecece] pl-4'>
              <MdOutlineShortText className='text-2xl animate-pulse'/>
              <span className='font-medium text-xm'>Filters</span>
            </div>
        </div>
        
    </div>
  )
}

export default Search