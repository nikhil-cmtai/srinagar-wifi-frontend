import React from 'react';
import Image from 'next/image';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`bg-white shadow ${className ? className : ''}`}>
            <div className="container mx-auto flex items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/logo.jpeg" // Place the logo image in your public/ directory with this filename
                        alt="Airport Authority of India Logo"
                        width={120}
                        height={100}
                        className="mr-3 w-full h-full object-contain"
                        priority
                    />                
                </div>
            </div>
        </header>
    );
}

export default Header;