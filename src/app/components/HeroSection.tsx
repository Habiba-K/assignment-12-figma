import React from 'react'
import Button from './Button'
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className='flex justify-center bg-[#043873]  w-[1920px] h-[829px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-0'>
        <div className=' w-1/2 h-[361px] ml-5  '>
            <div className=' w-[656px] h-[361px] '>
                <h2 className='text-white font-bold text-[64px]'>Get More Done with whitepace</h2>
                <p className=' font-serif text-white'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <Button btnText='Try Whitepace free ->' bgColor='bg-[#4F9CF9]' btnColor='text-white' mrl='mt-14'pdy='py-5' pdx='px-5'> </Button>
                </div>
                
            </div>
        <div className='w-[824px] bg-[#C4DEFD] h-[549px]'></div>
      </div>
    </div>
  )
}

export default HeroSection
