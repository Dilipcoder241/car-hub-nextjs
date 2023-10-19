'use client'


import { Button } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

function Hero() {
    

    const carpng = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {
            gsap.from('.carpng' , {
                scale:0.4,
                x:300,
                duration:2,
            })
        }, carpng);
    
        return () => ctx.revert();
    
      }, [])

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

                <div className="mt-6 hero_bg" ref={carpng}>
                    <Image src="/hero.png" width={500} height={500} alt='car'  className='carpng'/>
                </div>
            </div>

        </>
    )
}

export default Hero