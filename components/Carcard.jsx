'use client'
import Image from 'next/image';
import CarDetail from './CarDetail';
import { useEffect, useState } from 'react';

function CarCard({car }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, [isOpen])
  
  const { city_mpg, drive, make ,model,transmission} = car;
  return ( 
    <div className='border-2 border-gray-400 p-3 mt-4 space-y-4 relative' onClick={()=>{setIsOpen(true)}}>
      <h1>{model} {make}</h1>
      <p>${Math.floor(Math.random()*100)}</p>
      <Image src='/hero.png' height={200} width={200}  className='object-contain mx-auto' alt='car'/>
       
      <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
        <Image src="/steering-wheel.svg" height={20} width={20} alt="logo"/>
        <p>{transmission=='a'?"Automatic" : "Manual"}</p>
        </div>
        <div className='flex flex-col items-center'>
        <Image src="/tire.svg" height={20} width={20} alt="logo"/>
        <p>{drive}</p>
        </div>
        <div className='flex flex-col items-center'>
        <Image src="/gas.svg" height={20} width={20} alt="logo"/>
        <p>{city_mpg}MPG</p>
        </div>
      </div> 

    <div className={`absolute top-0 left-8 z-40 ${isOpen?'visible' :"invisible"}`}>
      <CarDetail close={()=>{setIsOpen(false)}} car={car}/>
    </div>
    </div>
  )
}

export default CarCard