import React from 'react';
import Image from 'next/image';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`bg-black py-2 shadow ${className ? className : ''}`}>
            <div className="container mx-auto flex items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/delhi-airport-logo.png" // Place the logo image in your public/ directory with this filename
                        alt="Airport Authority of India Logo"
                        width={54}
                        height={54}
                        className="mr-3"
                        priority
                    />
                    {/* Text Content */}
                    <div className="flex flex-col">
                        <span className="text-orange-500 font-bold text-3xl leading-6 tracking-tight">
                            SRINAGAR
                        </span>
                        <span className="text-xs text-white font-semibold leading-3">
                            SHRINAGAR INTERNATIONAL AIRPORT <br />
                            <span className="font-normal">AIRPORT</span>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;