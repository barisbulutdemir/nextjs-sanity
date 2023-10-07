import React from "react";
import {
  BiLogoDiscord,
  BiLogoDiscordAlt,
  BiLogoFacebook,
  BiLogoGoogle,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
  BiSearch,
} from "react-icons/bi";


const Navbar = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full bg-green-400 flex-between px-10">
        <div className="flex gap-2 text-white py-4 ">
          <div className="scale-125">
            <BiLogoFacebook />
          </div>
          <div className="scale-125">
            <BiLogoTwitter />
          </div>
          <div className="scale-125">
            <BiLogoYoutube />
          </div>
          <div className="scale-125">
            <BiLogoDiscord />
          </div>
          <div className="scale-125">
            <BiLogoGoogle />
          </div>
          <div className="scale-125">
            <BiLogoInstagram />
          </div>
        </div>
        <div className="w-[30%] flex-center  space-x-4 text-xs  ">
          <p>email: info@stone.com</p>
          <p>+31 635 01 12</p>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
