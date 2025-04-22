import React from 'react'
const ClubCard = () => {
  return (
     <div className='flex items-center justify-between bg-white p-4 rounded-md shadow shadow-gray-600 w-3xl '>
        <div className='flex items-center gap-4'>
          <img src="/images/logo.svg" alt="logo" className="w-20 h-20 object-contain" />
          <div>
            <h1 className='text-base font-semibold text-gray-800'>Gautam Buddha</h1>
            <div className='flex items-center gap-6 text-sm text-info mt-1'>
              <div>
                <span className='block font-medium text-info'>Clubs ID:</span>
                <span>147413</span>
              </div>
              <div>
                <span className='block font-medium text-info'>Charter Date:</span>
                <span>2025-04-16</span>
              </div>
              <div>
                <span className='block font-medium text-info'>Member:</span>
                <span>Count: 1</span>
              </div>
              <div>
                <span className='block font-medium text-info'>District Multiple:</span>
                <span>Dues: 1265</span>
              </div>
            </div>
          </div>
        </div>
        <div className='text-blue-700 text-sm font-semibold cursor-pointer hover:underline ml-3'>
          See all »
        </div>
      </div>
   
  )
}

export default ClubCard
