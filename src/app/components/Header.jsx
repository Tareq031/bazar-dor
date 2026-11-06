import React from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';

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
                   <Link
            href="/sign-in"
            className="px-4 py-2 text-sm font-semibold text-green-700 border border-green-700 rounded-lg hover:bg-green-50 transition duration-300"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-lg shadow-sm hover:bg-green-800 hover:shadow-md transition duration-300"
          >
            সাইন আপ
          </Link>
            </div>
            
        </div>
        <NavLinks />

        </section>

    



    );
};

export default Header;