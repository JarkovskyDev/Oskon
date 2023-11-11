import React from 'react'
import image1 from "../assets/Wel_img_1.webp"
import image2 from "../assets/Wel_img_2.webp"
import image3 from "../assets/Wel_img_3.webp"
import image4 from "../assets/Wel_img_4.webp"
import image5 from "../assets/Wel_img_5.webp"

const Welding = () => {
  return (
    <div name='welding' className='w-full h-screen'>
       <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
          <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={image1} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image2} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={image4} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image5} alt="/" />
          </div>
          <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl font-bold'>
              <span className='border-t-2 border-[#ea5b0c]'>S</span>VAŘOVÁN<span className='border-b-2 border-[#ea5b0c]'>Í</span>
            </h3>
            <p className='text-xl text-justify pb-6 mt-4'>Oskon s.r.o je odborníkem na oblast svařování a kovových výrobků spojených s touto technikou. Naše firma se zaměřuje na výrobu vysokojakostních svařovaných komponent pro různé odvětví průmyslu.  Také se zaměřujeme na svařování  konstrukcí ve stavebnictví, a to svařování  ocelových nosníků, nosných sloupků, rámových konstrukcí a dalších svařovaných prvků, které zajišťují stabilitu a bezpečnost budov. S důrazem na preciznost a bezpečnost jsme vaším spolehlivým partnerem pro kovové výrobky, které vám pomáhají dosáhnout excelentních svařovacích výsledků.</p>
          </div>
        </div>     
    </div>
  )
}

export default Welding