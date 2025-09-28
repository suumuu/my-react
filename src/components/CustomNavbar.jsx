import React, { useState } from 'react';

const CustomNavbar = () => {
    const [open]=useState(false);

    return (
        <div className=''>
            <ul className='flex space-x-4 justify-center font-semibold md:hidden'>
                {open ? 'open' : 'close'}
               
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