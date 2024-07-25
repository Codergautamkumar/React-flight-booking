import React from 'react';

// Imported Icons ======
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { SiConsul } from "react-icons/si";

// Imported Images =========



const Navbar = () => {
  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
        <SiConsul className='icon'/>
        </div>

        <div className="none flex">
          <li className="flex"> <BsPhoneVibrate /> Support</li>
          <li className="flex"> <AiOutlineGlobal /> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

        <div className="navBarTwo">
          <div className="logoDiv">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
