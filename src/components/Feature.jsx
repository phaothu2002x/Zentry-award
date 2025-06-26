import React, { useState } from 'react';
import { useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

// bento tilt styles

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 15; // Adjust the multiplier for tilt strength
        const tiltY = (relativeX - 0.5) * -15; // Adjust the multiplier for tilt strength

        const newTransformStyle = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;

        setTransformStyle(newTransformStyle);
    };
    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

// bento card component
const BentoCard = ({ src, title, desc }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {desc && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {desc}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const Feature = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        Into the metagame later
                    </p>

                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding universe
                        where a vibrant array of products converge into a
                        interconnected overlay experience on your world.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>
                                Radi<b>a</b>nt
                            </>
                        }
                        desc="Cross platform metagame app, turning your activities across Web2 and Web3 in to rewarding adventure experience."
                    />
                </BentoTilt>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={
                                <>
                                    Zig<b>m</b>a
                                </>
                            }
                            desc="An anime and gaming-inspiring NFT collection - the Ip prime for expansion."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src={'videos/feature-3.mp4'}
                            title={
                                <>
                                    N<b>E</b>xus
                                </>
                            }
                            desc="A metaverse platform that connects your digital and physical worlds, creating a seamless experience."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src={'videos/feature-4.mp4'}
                            title={
                                <>
                                    A<b>z</b>ure
                                </>
                            }
                            desc="A metaverse platform that connects your digital and physical worlds, creating a seamless experience."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">
                                <b>M</b>ore c<b>o</b>min<b>g</b> so<b>o</b>n
                            </h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <video
                            src="videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
};

export default Feature;
