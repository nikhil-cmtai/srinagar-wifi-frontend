import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={`bg-white text-black py-4 mt-8 ${className ? className : ''}`}>
    <div className="container mx-auto text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Airports Authority of India - Srinagar Airport WiFi</p>
    </div>
  </footer>
);

export default Footer;