'use client'
import Image from 'next/image'
import React from 'react'

function CarDetail({ car, close, isOpen }) {
    return (
        <div className='h-fit w-64 bg-slate-100 relative border-2 border-slate-700 p-2 rounded'>
            <h1 className='font-bold text-xl'>{car.model}</h1>
            {Object.keys(car).map((key, value) => 
                (
                    <div className='flex justify-between'>
                        <p className='text-slate-500'>{key}</p>
                        <p>{car[key]}</p>
                    </div>
                )
            )}
            <div className="closebtn absolute -right-2 -top-2" onClick={()=>{close}}>
                <Image src="close.svg" width={20} height={20} className='bg-slate-400 rounded' alt='car' />
            </div>
        </div>
    )
}

export default CarDetail