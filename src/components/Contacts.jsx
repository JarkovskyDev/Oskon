import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Contacts = () => {
  return (
    <div name='contacts' className='w-full h-screen flex flex-col justify-between items-center'>
        <div className='max-w-[1400px] m-auto border-solid border border-gray-700 shadow-lg p-4 px-4 sm:mx-4'>
          <h1>OSKON s.r.o.</h1>
          <h1>IČO: 05391504</h1>
          <h1>Sídlo: Heřmanova 1415/1, 170 00 Praha - Holešovice</h1>
          <h1>Společnost zapsána pod spisovou značkou: C 262865/MSPH Městský soud v Praze</h1>
          <h1>Tel.: <a href="tel:+420721821188">+420 721821188</a></h1>
          <h1>Email: <a href="mailto:info@oskon.cz">info@oskon.cz</a></h1>
        </div>
        <div className='max-w-[1400px] flex items-center mt-4'> 
          <AiOutlineCopyrightCircle className='text-lg mr-2' />
          <p>2024 OSKON s.r.o.</p>
        </div>
    </div>
  )
}

export default Contacts