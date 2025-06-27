import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';
import Button from './Button';

const Story = () => {
    const frameRef = useRef(null);
    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, {
            rotationX: 0,
            rotationY: 0,

            ease: 'power1.inOut',
            duration: 0.3,
        });
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Adjust the multiplier for sensitivity
        const rotateY = ((x - centerX) / centerX) * 10; // Adjust the multiplier for sensitivity

        gsap.to(element, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
            duration: 0.3,
        });
    };
    return (
        <section className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex flex-col items-center size-full py-10 pb-24 ">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Multiversal ip world
                </p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                        sectionId="#story"
                        containerClass="pointer-events-none mt-5 mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp"
                                    alt="story-img"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            Where realms coverage, lies Zentry and the boundless
                            pillars. Discover its secret and shape your fate
                            admist infinite opportunities.
                        </p>
                        <Button
                            id="realm-button"
                            title="discover prologue"
                            containerClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
