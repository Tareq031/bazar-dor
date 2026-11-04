import React from 'react';
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await res.json();
    // console.log(data);

    return (
        <div>
            <MarqueeText direction="right" duration={10}>
                {
                    data.map((d, i) => (
                        <span key={i}>
                            <span>
                                {d.image}
                                {d.nameBn}
                                {d.nameEn}
                                {d.unit}
                                {d.dir}
                            </span>
                            <span className="mx-5"> • </span>
                        </span>
                    ))
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;