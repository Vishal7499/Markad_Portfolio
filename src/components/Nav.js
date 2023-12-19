import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto flex justify-between items-center px-5">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
          >
            <BiHomeAlt size={20} />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
          >
            <BiUser size={20} />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
          >
            <BsClipboardData size={20} />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
          >
            <BsBriefcase size={20} />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
          >
            <BsChatSquare size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
