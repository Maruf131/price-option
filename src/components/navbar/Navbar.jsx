import { useState } from "react";
import Link from "../link/Link";
import { LuMenu } from "react-icons/lu";
import { GoX } from "react-icons/go";
const Navbar = () => {
    const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-black shadow-2xl shadow-gray-700">
        <div onClick={()=>setOpen(!open)} className="md:hidden p-6">
            {
                open === true ? 
                <GoX className="text-2xl font bold text-yellow-500"></GoX>
                : <LuMenu className="text-2xl font-bold  text-yellow-500"></LuMenu>
            }
            
        </div>
        <ul className={`md:flex md:static md:justify-center px-10 p-6 absolute duration-1000 ${open ? 'top-14' : '-top-60'}`}>
            {
                routes.map(route => <Link key={route.id} route ={route}></Link>)
            }
        </ul>
    </nav>
  )
};

export default Navbar;
