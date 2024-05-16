import React from 'react';
import FirstNavbar from './FirstNavbar';

const Navbar = () => {
  return (
    <>
      <FirstNavbar />
      <div className='navbar z-[5] bg-[white] flex justify-between items-center p-4 font-mono text-[#241C15] w-full h-[5rem] sticky top-0'>
        <div className="left">
          <img src="./image.png" className='h-[4rem] w-[10rem]' alt="" />
        </div>
        <div className="center flex gap-[3rem] p-4 text-[#241C15] items-center" style={{ fontSize: '0.8rem', fontFamily: 'Arial, sans-serif' }}>
          <div>Solutions and Services</div>
          <div>Resources</div>
          <div>Switch to Mailchimp</div>
          <div>Pricing</div>
        </div>
        <div className="right flex p-4 gap-[1rem] items-center" style={{ fontSize: '0.9rem', fontFamily: 'Arial, sans-serif' }}>
          <img src="https://th.bing.com/th/id/OIP.artsGkcWwb_UgjGqyw0shwHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
               height="30px" width="30px" alt="Search" className="search-icon" /> {/* Adjust height and width here */}
          <div>Sales: +1 (800) 315-5939</div>
          <button className='border-2 border-black rounded-[4rem] h-[3rem] w-[6rem]'>Login</button>
          <button className='border-2 border-black rounded-[4rem] h-[3rem] w-[6rem] bg-[#FFE01B]'>Signup</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
