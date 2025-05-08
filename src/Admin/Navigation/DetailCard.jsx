import React from 'react'
const DetailCard = ({member, profit}) => {
  return (
    <div className='shadow-sm shadow-gray-600 rounded w-64'>
        <div className='flex flex-col items-start justify-center p-3'>
            <h1 className='text-md font-bold'>Total Members</h1>
           <div className='flex items-start flex-col justify-center pt-2'>
           <p className='text-xl'><strong>{member}</strong></p>
           <span className='text-xs text-gray-400 font-bold'>{profit}</span>
           </div>
        </div>
    </div>
  )
}

export default DetailCard