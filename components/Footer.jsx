
import { Button } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='px-6 py-2 sm:flex sm:justify-between sm:items-center w-full'>
        <div>
            <p className='text-sm sm:text-base'>&copy; CarHub. All Rights reserved by Dilip Bhai</p>
        </div>
        <div className='hidden sm:flex'>
            <Button>Privacy&Policy</Button>
            <Button>Terms&Condition</Button>
        </div>
    </div>
    </>
  )
}

export default Footer