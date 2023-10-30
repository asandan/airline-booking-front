import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  user: string;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" passHref>
          <h3 className="text-black font-bold text-xl no-underline">
            Sky Travel
          </h3>
        </Link>
        <div className="flex items-center">
          <span className="mr-4">{user}</span>
          <button className="bg-blue-400 text-white px-3 py-1 rounded-lg">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
