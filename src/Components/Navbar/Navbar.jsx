import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
const [open, setOpen] = useState(false);
const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '*', name: 'NotFound' },
 ];

  return (
    <nav className="text-black bg-blue-200 p-6 font-serif">
    <div onClick={()=> setOpen(!open)}>
      {
        open === true ? <IoMdClose className="text-2xl"/> : 
      <CiMenuFries className="md:hidden text-2xl cursor-pointer" />

      }
    </div>
      <ul className={`
       md:flex
       md:static
       absolute
       duration-1000
       ${open ? 'top-16' : '-top-60 bg-blue-200'}
       bg-blue-200 px-5  `}>
      {
       routes.map((route)=> <Link key={route.id} route={route}/> )
      }
      </ul>
    </nav>
  );
};

export default Navbar;
