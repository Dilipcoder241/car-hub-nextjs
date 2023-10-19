'use client'

import CarCard from './Carcard';

function Cars({cars}) {
  
  console.log(cars.message);
  let isEmpty = cars.length<3;
   
    
  return (
    <>
    <div className='px-6'>
        {isEmpty ? (
            <section>
                <h1 className='uppercase font-bold text-3xl sm:text-5xl'>car catalogue</h1>
                <p>Explore The Cars You Like The Most</p>

                <div className='sm:grid sm:grid-cols-4 gap-x-3'>
                  {cars.map((car , index)=>
                  <CarCard car={car} key={index}/>
                  )}
                </div>
            </section>
        ) : (
            <div>
                <h1>oops there is something went wrong </h1>
            </div>
        )}
    </div>

    </>
  )
}

export default Cars