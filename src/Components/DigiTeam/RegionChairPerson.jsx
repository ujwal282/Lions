import React from 'react'
import ProfileCard from '../Cards/ProfileCard.jsx'
const RegionChairPerson = () => {
  return (
    <section className='flex justify-center items-center flex-col sm:p-10 pt-52'>
      <h1 className='text-xl sm:text-4xl text-heading mb-3'>Region Chairperson</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center  shadow shadow-gray-300 w-full p-3'>
        <ProfileCard />
        </div>
    </section>
  )
}

export default RegionChairPerson