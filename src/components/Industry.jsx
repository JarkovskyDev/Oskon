import React from 'react'
import image1 from "../assets/Ind_img_1.webp"
import image2 from "../assets/Ind_img_2.webp"
import image3 from "../assets/Ind_img_3.webp"
import image4 from "../assets/Ind_img_4.webp"
import image5 from "../assets/Ind_img_5.webp"

const Industry = () => {
  return (
    <div name='industry' className='w-full min-h-screen'>
      <div className='max-w-[1400px] m-auto px-4 grid lg:grid-cols-2 gap-4 sm:pt-0 sm:pb-0'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh] max-sm:order-3 sm:order-3 lg:order-first'>
          <img className='row-span-3 object-cover w-full h-full p-2' src={image1} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image2} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
          <img className='row-span-3 object-cover w-full h-full p-2' src={image4} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image5} alt="/" />
        </div>
        <div className='flex flex-col h-full justify-center'>
          <h3 name='industry-res' className='text-5xl font-bold max-sm:order-1 max-sm:mt-2 sm:order-1 sm:mt-2'>
            <span className='border-t-2 border-[#ea5b0c]'>P</span>RŮMYS<span className='border-b-2 border-[#ea5b0c]'>L</span>
          </h3>
          <p className='text-xl text-justify pb-6 mt-2 max-sm:order-2 sm:order-2 sm:pb-1'>Oskon s.r.o je specializovanou firmou, která se zaměřuje na výrobu kovových produktů pro průmyslové a administrativní budovy.  Nabízíme kvalitní konstrukce, zábradlí, schodiště a další kovové výrobky, které nejen posilují bezpečnost, ale také přidávají estetickou hodnotu do vašich prostorů. Společnost Oskon s.r.o je vaším partnerem pro výrobky, které zdůrazňují profesionální a moderní vzhled vašich průmyslových a administrativních budov.</p>
        </div>
      </div>
    </div>
  )
}

export default Industry