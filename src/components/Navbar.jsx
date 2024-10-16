import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scroll

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[256px] h-[100px]' />

      {/* Desktop Navbar */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold hover:text-secondary cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            {nav.isScroll ? (
              <HashLink smooth to={nav.path} onClick={() => setToggle(false)}>
                {nav.title}
              </HashLink>
            ) : (
              <Link to={nav.path} onClick={() => setToggle(false)}>
                {nav.title}
              </Link>
            )}
          </li>
        ))}

        {/* Support Us Button (Desktop) */}
        <li className="ml-10">
          <a href="https://piehol3p0az.typeform.com/to/QEmSBmwk" target="_blank" rel="noopener noreferrer">
            <button
              type='button'
              className={`py-4 px-6 bg-blue-gradient font-poppins font-semibold text-[16px] text-primary outline-none rounded-[10px]`}
            >
              Support Us
            </button>
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Menu Dropdown */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                {nav.isScroll ? (
                  <HashLink smooth to={nav.path} onClick={() => setToggle(false)}>
                    {nav.title}
                  </HashLink>
                ) : (
                  <Link to={nav.path} onClick={() => setToggle(false)}>
                    {nav.title}
                  </Link>
                )}
              </li>
            ))}

            {/* Support Us Button (Mobile) */}
            <li>
              <a href="https://piehol3p0az.typeform.com/to/QEmSBmwk" target="_blank" rel="noopener noreferrer">
                <button className='bg-[#14E1E7] text-white py-3 px-5 rounded hover:bg-blue-700'>
                  Support Us
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




