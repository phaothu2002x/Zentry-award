import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    //
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isClicked, SetIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const totalVideos = 4; // Assuming there are 3 videos
    const nextVideoRef = useRef(null);

    const handleVideoLoaded = () => {
        setLoadedVideo((prev) => prev + 1);
    };
    const upComingVideoIndex = (currentIndex % totalVideos) + 1; // This will cycle through 1, 2, 3

    const handleMiniVdClick = () => {
        SetIsClicked(true);
        setCurrentIndex(upComingVideoIndex);
    };

    useEffect(() => {
        if (loadedVideo === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideo]);

    useGSAP(
        () => {
            if (isClicked) {
                gsap.set('#next-video', { visibility: 'visible' });
                gsap.to('#next-video', {
                    transformOrigin: 'center center',
                    scale: 1,
                    width: '100%',
                    height: '100%',
                    duration: 1,
                    ease: 'power1.inOut',
                    onStart: () => nextVideoRef.current.play(),
                });
                gsap.from('#current-video', {
                    transformOrigin: 'center center',
                    scale: 0,
                    duration: 1.5,
                    ease: 'power1.inOut',
                });
            }
        },
        { dependencies: [currentIndex], revertOnUpdate: true }
    );

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%',
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            },
        });
    });

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && (
                <div className="z-[100] absolute flex-center h-dvh w-screen overflow-hidden bg-blue-50">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}

            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    {/* video click to next video==> (video small) */}
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden cursor-pointer rounded-lg">
                        <div
                            onClick={handleMiniVdClick}
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                id="current-video"
                                ref={nextVideoRef}
                                className="size-64 origin-center scale-150 object-cover object-center "
                                src={getVideoSrc(upComingVideoIndex)}
                                loop
                                muted
                                onLoadedData={handleVideoLoaded}
                            />
                        </div>
                    </div>
                    {/*  */}
                    <video
                        id="next-video"
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        className="size-64 invisible absolute absolute-center z-20 object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                    />
                    {/* background video */}
                    <video
                        src={getVideoSrc(
                            currentIndex === totalVideos - 1 ? 1 : currentIndex
                        )}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                    />
                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    G<b>a</b>ming
                </h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">
                            redifi<b>n</b>e
                        </h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Enter the metagame layer
                            <br />
                            Unleash the Play Economy
                        </p>
                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<TiLocationArrow />}
                            containerClass="!bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
                G<b>a</b>ming
            </h1>
        </div>
    );
};

export default Hero;
