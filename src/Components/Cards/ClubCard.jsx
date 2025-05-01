import React from 'react'
import { motion } from 'framer-motion'

const ClubCard = ({ clubs }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 min-h-14">
      {clubs.map(({ name, clubid, charterdate, member, districmultiple }) => (
        <motion.div
          key={clubid}
          className='flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-md shadow shadow-gray-600 w-full md:w-[90%] lg:w-[700px] max-w-full'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
            <img src="/images/logo.svg" alt="logo" className="w-20 h-20 object-contain" />
            <div>
              <h1 className='text-base font-semibold text-gray-800'>{name}</h1>
              <div className='flex flex-wrap gap-4 text-sm text-info mt-1'>
                <div>
                  <span className='block font-medium text-info'>Clubs ID:</span>
                  <span>{clubid}</span>
                </div>
                <div>
                  <span className='block font-medium text-info'>Charter Date:</span>
                  <span>{charterdate}</span>
                </div>
                <div>
                  <span className='block font-medium text-info'>Member:</span>
                  <span>{member}</span>
                </div>
                <div>
                  <span className='block font-medium text-info'>District Multiple:</span>
                  <span>Dues: {districmultiple}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='text-blue-700 text-sm font-semibold cursor-pointer hover:underline mt-4 sm:mt-0 sm:ml-3'>
            See all »
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ClubCard;
