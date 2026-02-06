import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center h-20 px-10 border-b shadow-sm bg-white'>
       
      {/* 1. Logo Section */}
      <h1 className='text-2xl font-bold text-red-500'>
        ALX Listing App
      </h1>

      {/* 2. Search Bar Section */}
      <div className='hidden md:block border rounded-full py-2 px-4 shadow-sm min-w-[300px]'>
         <input 
            type="text" 
            placeholder="Search destination..." 
            className="outline-none w-full bg-transparent" 
         />
      </div>

      {/* 3. Accommodation Types (Navigation) */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-gray-600 font-medium cursor-pointer">
          <li className="hover:text-red-500 transition">Rooms</li>
          <li className="hover:text-red-500 transition">Mansion</li>
          <li className="hover:text-red-500 transition">Countryside</li>
        </ul>
      </nav>

      {/* 4. Auth Buttons */}
      <div className='flex gap-4 items-center'>
          <button 
            type='button'
            className='text-gray-600 hover:text-gray-800 font-medium'
          >
            Sign In
          </button>

          <button 
            type='button'
            className='bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition'
          >
            Sign Up
          </button>
      </div>

    </header>
  );
}

export default Header;