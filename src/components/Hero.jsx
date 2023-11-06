import React from 'react'
import image1 from "../assets/Hero_img_1.webp"
import image2 from "../assets/Hero_img_2.webp"
import image3 from "../assets/Hero_img_3.webp"
import image4 from "../assets/Hero_img_4.webp"
import image5 from "../assets/Hero_img_5.webp"

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen'>
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
          <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={image1} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image2} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image3} alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={image4} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={image5} alt="/" />
          </div>
          <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>SPOLEČNOST</h3>
            <p className='text-xl text-justify pb-6'>Společnost Oskon s.r.o. nabízí bohaté zkušenosti v oblasti kovovýroby, strojního obrábění kovů a svařování. Zabýváme se výrobou specializovaných strojních přípravků. Ve všech směrech naší produkce dokážeme nabídnout řešení na míru. Zajišťujeme konzultaci, zpracování technické dokumentnace a výrobu. Napište nám.</p>
          </div>
        </div>
    </div>
  )
}

export default Hero