import React from 'react'
import image1 from "../assets/Home_img_1.webp"
import image2 from "../assets/Home_img_2.webp"
import image3 from "../assets/Home_img_3.webp"
import image4 from "../assets/Home_img_4.webp"
import image5 from "../assets/Home_img_5.webp"

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen'>
      <div name='home-res' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 sm:pt-0 sm:pb-0'>
        <div className='flex flex-col h-full justify-center'>
          <h3 className='text-5xl font-bold'>
            <span className='border-t-2 border-[#ea5b0c]'>D</span>OMÁCNOST<span className='border-b-2 border-[#ea5b0c]'>I</span>
          </h3>
          <p className='text-xl text-justify pb-6 mt-2'>Oskon s.r.o je vaším spolehlivým partnerem pro kvalitní kovové výrobky pro domácnosti. Naše široká nabídka zahrnuje elegantní zábradlí, designové ploty, praktické terasy a exkluzivní pergoly, které vám pomohou vytvořit dokonalé prostředí ve vašem domě. S důrazem na kvalitu a spolehlivost jsme vaším partnerem pro kovové výrobky, které zdůrazní krásu vašeho domova.
          </p>
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

export default Home