import React from 'react'
import Image from 'next/image'
import logo from "@/app/assests/logo.png"
import Button from './Button'
import arrow from "@/app/assests/Vector.png"
const Navbar = () => {
  return (
    <div className='w-[1920px] h-[92px] bg-[#043873] '>
      <div className='py-4 px-[220px] flex justify-between items-center'>
        <div>
        <Image
            src={logo}
            alt='logo'
            width={191}
            height={34} 
            className=''/>
        </div>
        <div className='w-[737.5px] h-[60px] flex items-center  '>
            <div className='w-[549px] h-[32px]'>
                <ul className='text-[18px] leading-[23px] text-white flex justify-between '>
                    <li className='pr-8'>Product</li>
                    <li className='pr-8'>Solution</li>
                    <li className='pr-8'>resources</li>
                    <li className='pr-8'>Pricing</li>
                </ul>
            </div>
            <div className='flex whitespace-nowrap justify-center items-center'>
              <Button btnColor= 'text-black ' btnText='Login' bgColor='bg-[#FFE492]' mrl='ml-10' pdy='py-4' pdx='px-10'></Button>
              <div>
                <Button btnColor= 'text-white' btnText='Try Whitepace free ->' bgColor='bg-[#4F9CF9]' mrl='ml-2'pdy='py-5' pdx='px-6'> </Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
