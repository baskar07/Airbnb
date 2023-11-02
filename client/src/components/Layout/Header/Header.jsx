import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Searchbar from './Searchbar';
import UserMenu from './UserMenu';


const Header = () => {
  return (
    <div className='fixed w-full bg-white shadow-sm'>
        <div className="py-2 border-b-[1px]">
            <Container>
                <div className="flex items-center justify-between gap-3 md:gap-0">
                    <Logo />
                    <Searchbar />
                    <UserMenu />
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Header