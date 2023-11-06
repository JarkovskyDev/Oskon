import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../assets/logo.png"
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[75px] bg-[#ffffff] flex justify-between items-center px-4'>
        <div>
            <a href="/">
                <img src={Logo} alt="Logo Oskon s.r.o." style={{width:"75px"}} />
            </a>
        </div>

        <ul className='hidden text-xl md:flex'>
            <li>
                <Link to='hero' smooth={true} duration={500}>
                    Úvod
                </Link>
            </li>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Domácnost
                </Link>
            </li> 
            <li>
                <Link to='industry' smooth={true} duration={500}>
                    Průmysl
                </Link>
            </li>
            <li>
                <Link to='enginnering' smooth={true} duration={500}>
                    Strojírenství
                </Link>
            </li>
            <li>
                <Link to='welding' smooth={true} duration={500}>
                    Svařování
                </Link>
            </li>

            <li>
                <Link to='contacts' smooth={true} duration={500}>
                    Kontakt
                </Link>
            </li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Úvod
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='for_home' smooth={true} duration={500}>
                    Domácnosti
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='for_industry' smooth={true} duration={500}>
                    Průmysl
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='welding' smooth={true} duration={500}>
                    Svařování
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contacts' smooth={true} duration={500}>
                    Kontakt
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar