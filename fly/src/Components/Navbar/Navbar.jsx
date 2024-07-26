import React from 'react';

// Imported Icons ======
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { SiConsul } from "react-icons/si";
import { assets } from '../../assets/assets.js';

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
            <img src={assets.logo} alt="" />
          </div>

          <div className="navBarMenu">
            <ul className="menu flex">
              <li className="listItem">Home</li>
              <li className="listItem">About</li>
              <li className="listItem">Offers</li>
              <li className="listItem">Seats</li>
              <li className="listItem">Destinations</li>
            </ul>

            <button className="btn flex btnOne">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
