import React, {useState} from 'react';
import {motion} from "framer-motion";
import {MenuToggle} from "./menuToggle.jsx";
import Socials from "./Socials.jsx";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    }
    return (
        <motion.nav className='sticky top-0 z-50 bg-skin-trans py-4'>
            <div className=' flex h-6 flex-row-reverse items-center justify-between py-6 lg:flex-row lg:justify-between'>
                <MenuToggle toggle = {handleToggle} isOpen={toggleMenu}></MenuToggle>
                <ul className='ml-20  hidden w-1/4 items-center justify-between font-paragraph text-2xl text-skin-base lg:flex'>
                    <li className='px-4'>
                        <a href='#Home'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#About' className='hover:text-skin-accent active:text-skin-accent' >
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#Skills' className='hover:text-skin-accent active:text-skin-accent '>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href='#Projects' className='hover:text-skin-accent active:text-skin-accent '>
                            Projects
                        </a>
                    </li>
                    <li className=''>
                        <a href='#Contact' className='hover:text-skin-accent active:text-skin-accent '>
                            Contacts
                        </a>
                    </li>
                </ul>
                <Socials/>
                {toggleMenu && (
                    <div className='fixed top-0 left-0 z-40 mx-auto my-0 h-full w-screen flex-row-reverse items-center justify-center  bg-skin-bg py-2 text-lg '>
                        <ul className='mx-auto my-6 flex h-5/6 w-1/4  flex-col items-center justify-evenly font-paragraph text-2xl text-skin-base'>
                            <li className='px-4 hover:text-skin-accent'>
                                <a>
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </motion.nav>
    )
}
export default Navbar