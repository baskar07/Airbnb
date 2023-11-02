import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
const Logo = () => {
  return (
    <Link to="/">
        <img className='hidden md:block cursor-pointer w-auto h-10' src={logo} alt="logo image" />
    </Link>
  )
}

export default Logo