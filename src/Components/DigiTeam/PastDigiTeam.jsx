import React from 'react'
import ProfileCard from "../Cards/ProfileCard.jsx"
const PastDigiTeam = () => {
  return (
    <section className='flex justify-center items-center flex-col p-10 pt-52'>
      <h1 className='text-4xl text-heading mb-3'>Past District Team</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center  shadow shadow-gray-300 w-full p-3'>
        <ProfileCard />
        </div>
    </section>
  )
}

export default PastDigiTeam