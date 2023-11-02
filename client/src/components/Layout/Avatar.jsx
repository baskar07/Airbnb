import React from 'react';
import avatar from '../../assets/images/placeholder.jpg';

const Avatar = ({ src }) => {
  return (
    <>
        <img className='rounded-full w-auto h-10' src={ src || avatar } alt="profile image" />
    </>
  )
}

export default Avatar