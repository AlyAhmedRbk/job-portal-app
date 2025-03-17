import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={160} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
            All right reserved. Copyright @job-portal
        </p>

        <div className='flex gap-2.5'>
            <img className='cursor-pointer hover:scale-110 duration-300 transition-all' width={38} src={assets.facebook_icon} alt="" />
            <img className='cursor-pointer hover:scale-110 duration-300 transition-all'  width={38} src={assets.twitter_icon} alt="" />
            <img className='cursor-pointer hover:scale-110 duration-300 transition-all'  width={38} src={assets.instagram_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer