import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div  ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        <p>children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile'/>
        <img src={caret_icon} alt="" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

// import React from 'react';
// import logo from '../../assets/logo.png';
// import search_icon from '../../assets/search_icon.svg';
// import bell_icon from '../../assets/bell_icon.svg';
// import profile_img from '../../assets/profile_img.png';
// import caret_icon from '../../assets/caret_icon.svg';

// const Navbar = () => {
//   return (
//     <div className='w-full fixed top-0 left-0 py-[20px] px-[6%] flex justify-between items-center text-[14px] text-[#e5e5e5] bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent z-10 box-border'>
//       <div className="flex items-center gap-[50px]">
//         <img src={logo} alt="" className='w-[90px]' />
//         <ul className="flex list-none gap-[20px]">
//           <li className='cursor-pointer'>Home</li>
//           <li className='cursor-pointer'>TV Shows</li>
//           <li className='cursor-pointer'>Movies</li>
//           <li className='cursor-pointer'>New & Popular</li>
//           <li className='cursor-pointer'>My List</li>
//           <li className='cursor-pointer'>Browser By Languages</li>
//         </ul>
//       </div>
//       <div className="flex gap-[20px] items-center">
//         <img src={search_icon} alt="" className='w-[20px] cursor-pointer' />
//         <p>children</p>
//         <img src={bell_icon} alt="" className='w-[20px] cursor-pointer' />
//         <div className="flex items-center gap-[10px] cursor-pointer relative group">
//           <img src={profile_img} alt="" className='rounded-[4px] w-[35px]' />
//           <img src={caret_icon} alt="" />
//           <div className="absolute top-full right-0 w-max bg-[#191919] py-[18px] px-[22px] rounded-[2px] underline text-[13px] cursor-pointer hidden group-hover:block z-10">
//             <p>Sign Out of Netflix</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;