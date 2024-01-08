import React from 'react';
import Logo from 'C://Users//visha//Desktop//portfolio-starter//src//assets//mylogo.png';
import { Link } from 'react-scroll'
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="#">
            <img
              src={Logo}
              alt=""
              style={{ width: '100px', height: 'auto' }} // Adjust the width as needed
            />
          </a>
          <Link to="contact" spy={true} smooth={true}>
          <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
