import React from 'react'
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards';
import Footer from '../../Components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="" className='banner-img'/>
          <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img' />
            <p>As he manipulates events from the shadows, a web of secrets and moral dilemmas begins to unfold. 
              The film explores themes of guilt, punishment, and the blurred line between justice and vengeance.</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
              {/* <TitleCards/> */}
          </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top pics for you"} category={"now_playing"}/>
        </div>  
        <Footer/>
    </div>
  )
}

export default Home

// import React from 'react'
// import Navbar from '../../Components/Navbar/Navbar'
// import hero_banner from '../../assets/hero_banner.jpg'
// import hero_title from '../../assets/hero_title.png'
// import play_icon from '../../assets/play_icon.png'
// import info_icon from '../../assets/info_icon.png'
// import TitleCards from '../../Components/TitleCards/TitleCards';
// import Footer from '../../Components/Footer/Footer.jsx';

// const Home = () => {
//   return (
//     <div className='overflow-x-hidden'>
//         <Navbar/>
//         <div className="relative h-screen overflow-hidden">
//           <img src={hero_banner} alt="" className='w-full h-full object-cover [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]'/>
//           <div className="absolute w-full bottom-0 pl-[6%] max-w-[700px]">
//             <img src={hero_title} alt="" className='w-[90%] max-w-[420px] mb-[30px]' />
//             <p className='max-w-[700px] text-[17px] mb-[20px]'>As he manipulates events from the shadows, a web of secrets and moral dilemmas begins to unfold. 
//               The film explores themes of guilt, punishment, and the blurred line between justice and vengeance.</p>
//             <div className="flex gap-[10px] mb-[50px]">
//               <button className='border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-semibold bg-white rounded-[4px] cursor-pointer hover:bg-[#ffffffbf]'>
//                 <img src={play_icon} alt="" className='w-[25px]' />Play
//               </button>
//               <button className='border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-semibold bg-[#6d6d6eb3] text-white rounded-[4px] cursor-pointer hover:bg-[#6d6d6e66]'>
//                 <img src={info_icon} alt="" className='w-[25px]' />More Info
//               </button>
//             </div>
//               <TitleCards/>
//           </div>
//         </div>
//         <div className="pl-[6%]">
//         <TitleCards title={"Blockbuster Movies"}/>
//         <TitleCards title={"Only on Netflix"}/>
//         <TitleCards title={"Upcoming"}/>
//         <TitleCards title={"Top pics for you"}/>
//         </div>  
//         <Footer/>
//     </div>
//   )
// }

// export default Home