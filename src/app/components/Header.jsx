import React from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';

const Header = () => {


    
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
        });
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className=" flex justify-between items-center 
        space-x-170">
            <div className="flex items-center space-x-2 ">
                <Image height={50} width={50} src="/logo-icon.png" alt="Logo" />
                <div>
                    বাজার দর
                    <p>{date}</p>
                </div>
                
                
            </div>
            <div className="flex items-center space-x-2">
                 <button className="btn">সাইন ইন</button>
                <button className="btn bg-red-500 text-white">সাইন আপ</button>
            </div>
            
        </div>
        <NavLinks />

        </section>

    



    );
};

export default Header;