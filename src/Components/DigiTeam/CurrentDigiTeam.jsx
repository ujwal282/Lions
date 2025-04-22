import React from 'react'
import ProfileCard from "../Cards/ProfileCard.jsx"
const CurrentDigiTeam = () => {
  return (
    <section className='flex justify-center items-center p-10 pt-52'>
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center  shadow shadow-gray-300 w-full p-3'>
        <ProfileCard />
        </div>
    </section>
  )
}

export default CurrentDigiTeam