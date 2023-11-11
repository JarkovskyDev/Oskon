import React from 'react'
import image1 from "../assets/Eng_img_1.webp"
import image2 from "../assets/Eng_img_2.webp"
import image3 from "../assets/Eng_img_3.webp"
import image4 from "../assets/Eng_img_4.webp"
import image5 from "../assets/Eng_img_5.webp"

const Engineering = () => {
  return (
    <div name='enginnering' className='w-full min-h-screen'>
      <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 sm:pt-0 sm:pb-0'>
        <div name='enginnering-res'  className='flex flex-col h-full justify-center'>
          <h3 className='text-5xl font-bold sm:mt-2'>
            <span className='border-t-2 border-[#ea5b0c]'>S</span>TROJÍRENSTV<span className='border-b-2 border-[#ea5b0c]'>Í</span>
          </h3>
          <p className='text-xl text-justify pb-6 mt-2'>Oskon s.r.o je předním jménem v oblasti strojírenství a výroby jednoúčelových strojních přípravků. Naše společnost je specializovaná na precizní kovovýrobu a nabízí inovativní řešení pro strojírenské a průmyslové potřeby. Naši zkušení inženýři a technici pracují na vývoji a výrobě špičkových jednoúčelových přípravků, které maximalizují efektivitu a přesnost vaší výroby. S důrazem na kvalitu, spolehlivost a technickou dokonalost jsme vaším partnerem pro kovové výrobky, které zlepšují výkonnost a konkurenceschopnost vaší strojírenské a výrobní činnosti.</p>
        </div>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
          <img className='row-span-3 object-cover w-full h-full p-2' src={image1} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image2} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
          <img className='row-span-3 object-cover w-full h-full p-2' src={image4} alt="/" />
          <img className='row-span-2 object-cover w-full h-full p-2' src={image5} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Engineering