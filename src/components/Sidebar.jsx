import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => {
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.link}
        className="flex items-center p-2 text-sm text-gray-400 rounded-md hover:bg-gray-700"
        onClick={handleClick}
      >
        {item.icon}
        <span className="ml-2">{item.name}</span>
      </NavLink>
    ))}
  </div>
}


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="hidden sm:flex flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="h-14 w-full object-contain" />
      </div>
    </>
  );
};

export default Sidebar;
