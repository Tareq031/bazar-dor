import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavLinks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const navs = await res.json();
    console.log(navs);

     

    return (
        <div className="flex gap-5 justify-center mt-5">
            {
                navs.map((n,i) => (
                    <Link key={i} href={`/${n.slug}`}>
                         {
                            n.icon 
                        }

                    {n.nameBn}
                    </Link>
                ))
            }
            
        </div>
    );
};

export default NavLinks;