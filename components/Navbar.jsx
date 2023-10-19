import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react';
import { PersonAdd } from '@mui/icons-material';


const Navbar = () => {
  return (
    <>
    <div className="wrapper flex justify-between items-center px-8 py-2">

    <div className="logo">
        <Image src="/logo.svg" width={120} height={40} alt='car hub'/>
    </div>
    <Button className='rounded hover:bg-blue-100' size='small' startIcon={<PersonAdd/>}>
        sign up 
    </Button>
    </div>
    </>
  )
}

export default Navbar