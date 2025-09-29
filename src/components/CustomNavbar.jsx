import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const CustomNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <span className='flex gap-4' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
        
                <h1 className=''>My Navbar</h1>
            </span>
            <ul className='md:flex hidden space-x-4 justify-center font-semibold'> {/* by default: hidden, when md then flex */}
               
                <li><a href="">home</a></li>
                <li><a href="">contact</a></li>
                <li><a href="">terms</a></li>
                <li><a href="">policy</a></li>
                <li><a href="">hello</a></li>
                <li><a href="">hi</a></li>
            </ul>
             <ul className={`px-4 absolute md:hidden justify-center font-semibold bg-amber-500 ${open ? 'top-8' : '-top-40'} duration-1000`}>
               
                <li><a href="">home</a></li>
                <li><a href="">contact</a></li>
                <li><a href="">terms</a></li>
                <li><a href="">policy</a></li>
                <li><a href="">hello</a></li>
                <li><a href="">hi</a></li>
            </ul>
        </div>
    );
};

export default CustomNavbar;