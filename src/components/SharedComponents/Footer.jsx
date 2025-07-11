import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Real Trust. All rights reserved.</p>
        <p className="text-sm">Powered by Ravi Astare</p>
      </div>
    </footer>
  );
};

export default Footer;
