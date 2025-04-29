import React from 'react';
import { Facebook, Youtube, Twitter } from 'lucide-react';
import { NavLink } from 'react-router';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-footer p-8 pb-2'>
      <div className='text-white flex flex-col md:flex-row items-start justify-between gap-8'>

        {/* Company Logo + Info */}
        <div className='w-80 flex flex-col gap-4 items-start justify-center'>
          {/* Company Logo and Heading */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-max">
                <img className="w-20" src="/logo/logo.svg" alt="organization logo" />
              </div>
              <div className="flex flex-col items-start justify-center text-sm text-gray-500 font-bold">
                <p>Lions International</p>
                <p>District 325k (MD 325) Nepal</p>
                <p>L/Y 2025-2026</p>
              </div>
            </div>
          </div>

          {/* Company Intro */}
          <div className='text-start'>
            <p className='text-white  pl-9 text-sm leading-5'>
              Lions Clubs International is a renowned service organization founded by Melvin Jones in 1917. It has become one of the world’s leading and most active service club organizations.
            </p>
          </div>
        </div>

        {/* Pages */}
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold mb-2'>Pages</h1>
          <div className='flex flex-col gap-1'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/currentDigiTeam">Our Team</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </div>

        {/* Utility Pages */}
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold mb-2'>Utility</h1>
          <div className='flex flex-col gap-1'>
            <NavLink to="/clubs">Clubs</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <a href="#">Login</a>
          </div>
        </div>

      
        <div className='w-72'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Support Our Mission</h1>
            <p className='text-sm '>
              Your contribution helps us continue our work, Enter your email to receive a receipt and updates.
            </p>
            <form action="#" className='flex flex-col gap-2'>
              <input
                type="email"
                placeholder='your@gmail.com'
                className='bg-[#1A334D] p-2 rounded-md text-white placeholder:text-gray-400 text-sm'
              />
              <button
                className='bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition'
              >
                DONATE
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className='mt-10 pt-4 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 pr-6'>
        <div className='flex gap-4 mb-2 md:mb-0'>
          <a href="#" className='hover:underline'>Privacy Policy</a>
          <a href="#" className='hover:underline'>Terms of Service</a>
        </div>
        <p className='text-center'>&copy; {year}. Lions International</p>
        <div className='flex gap-4 mt-2 md:mt-0 text-white text-lg'>
          <NavLink to=""><Facebook size={18} /></NavLink>
          <NavLink to=""><Youtube size={18} /></NavLink>
          <NavLink to=""><Twitter size={18} /></NavLink>
        </div>
      <span className='uppercase text-gray-600 text-[8px] font-bold'>Design & Maintain by manish ujwal tansen & ayush </span>
      </div>
    </footer>
  );
};

export default Footer;
