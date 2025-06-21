import React, { use, useRef, useState } from 'react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isClicked, SetIsClicked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const nextVideoRef = useRef(null);

    const totalVideos = 3; // Assuming there are 3 videos
    const upComingVideoIndex = (currentIndex % totalVideos) + 1; // This will cycle through 1, 2, 3

    const handleMiniVdClick = () => {
        SetIsClicked(true);
        setCurrentIndex(upComingVideoIndex);
    };
    const handleVideoLoaded = (prev) => prev + 1;

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    {/* video click to next video */}
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden cursor-pointer rounded-lg">
                        <div
                            onClick={handleMiniVdClick}
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center "
                                ref={nextVideoRef}
                                src={getVideoSrc(upComingVideoIndex)}
                                loop
                                muted
                                onLoadedData={handleVideoLoaded}
                            />
                        </div>
                    </div>
                    {/*  */}
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        className="size-64 invisible absolute absolute-center z-20 object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                    />
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
            </div>
        </div>
    );
};

export default Hero;
