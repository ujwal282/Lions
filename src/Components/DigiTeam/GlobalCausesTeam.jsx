import React from 'react'
import ProfileCard from '../Cards/ProfileCard.jsx';
import { useTranslation } from 'react-i18next';
const GlobalCausesTeam = () => {
  const {t} = useTranslation();
  return (
    <section className='flex justify-center items-center flex-col p-10 pt-52'>
      <h1 className='text-4xl text-heading mb-3'>{t("header.teams.cabinet-officials.global")}</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center  shadow shadow-gray-300 w-full p-3'>
        <ProfileCard />
        </div>
    </section>
  )
}

export default GlobalCausesTeam