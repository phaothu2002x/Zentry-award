import React from 'react';
import {
    FaDiscord,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitch,
} from 'react-icons/fa';

const footer = () => {
    const links = [
        {
            href: 'https://www.facebook.com',
            icon: <FaTwitch />,
        },
        {
            href: 'https://www.facebook.com',
            icon: <FaDiscord />,
        },
        {
            href: 'https://www.facebook.com',
            icon: <FaInstagram />,
        },
        {
            href: 'https://www.facebook.com',
            icon: <FaGithub />,
        },
    ];
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    &copy;Nova 2024. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link) => (
                        <a
                            key={link}
                            target="_blank"
                            rel="noreferrer noopener"
                            href={link.href}
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a
                    href="#privacy-policy"
                    className="text-sm text-center hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default footer;
