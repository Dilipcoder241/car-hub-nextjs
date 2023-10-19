
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <>
            <div className='px-8 flex-wrap sm:flex items-center justify-between mt-12'>
                <div className="sm:w-1/2">
                    <h1 className='font-bold text-4xl sm:text-6xl'>Find, Book, oR Rent a car - Quickly and Easily!</h1>
                    <p className='font-light text-sm sm:text-xl'>streamine your car rental expreince with our effortiess booking process</p>
                    <Button variant="contained" className='bg-blue-500 mt-4 font-bold capitalize'>
                        Explore cars
                    </Button>
                </div>

                <div className="mt-6 hero_bg">
                    <Image src="/hero.png" width={500} height={500} alt='car'/>
                </div>
            </div>

        </>
    )
}

export default Hero