import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={`bg-black text-white py-4 mt-8 ${className ? className : ''}`}>
    <div className="container mx-auto text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Airport Authority of India</p>
    </div>
  </footer>
);

export default Footer;