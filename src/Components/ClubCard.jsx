import React from 'react'
import { SearchIcon } from 'lucide-react'

const ClubCard = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full mb-4'>
        <input 
          className='shadow-inner shadow-gray-500 rounded-l-md p-2 outline-0 focus:ring-1 focus:ring-blue-400 transition-all w-3xl' 
          type="text" 
          placeholder='Search here' 
        />
        <div className='shadow-inner shadow-gray-500 rounded-r-md p-2 bg-white cursor-pointer'>
          <SearchIcon className='text-gray-600' />
        </div>
      </div>

     <div className='flex flex-col justify-center items-center p-10 gap-4'>
      
     <div className='flex items-center justify-between bg-white p-4 rounded-md shadow shadow-gray-600 w-3xl '>
        <div className='flex items-center gap-4'>
          <img src="/images/logo.svg" alt="logo" className="w-20 h-20 object-contain" />
          <div>
            <h1 className='text-base font-semibold text-gray-800'>Gautam Buddha</h1>
            <div className='flex items-center gap-6 text-sm text-gray-600 mt-1'>
              <div>
                <span className='block font-medium text-gray-500'>Clubs ID:</span>
                <span>147413</span>
              </div>
              <div>
                <span className='block font-medium text-gray-500'>Charter Date:</span>
                <span>2025-04-16</span>
              </div>
              <div>
                <span className='block font-medium text-gray-500'>Member:</span>
                <span>Count: 1</span>
              </div>
              <div>
                <span className='block font-medium text-gray-500'>District Multiple:</span>
                <span>Dues: 1265</span>
              </div>
            </div>
          </div>
        </div>
        <div className='text-blue-700 text-sm font-semibold cursor-pointer hover:underline ml-3'>
          See all »
        </div>
      </div>

    
     </div>
    </>
  )
}

export default ClubCard
