import React from 'react'
import ClubCard from '../Cards/ClubCard'
import Search from '../Search/Search'

const Clubs = () => {
  return (
    <>
    <div className='felx flex-col items-center justify-center pt-48'>
      
    <Search />
     <div className='flex flex-col justify-center items-center p-10  gap-4'>
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
    </div>
    </div>
    </>
  )
}

export default Clubs