import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="md:flex gap-3 hidden w-full">
        <Link href="/signin" className="header-button">
          Sign in
        </Link>

        <Link href="/cart" className="header-button">
          <div className="flex items-end">
            <ShoppingCartIcon className="h-8 w-8" />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default menu;
