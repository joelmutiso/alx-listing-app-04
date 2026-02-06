import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button 
      type="button" 
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer whitespace-nowrap"
    >
      {label}
    </button>
  );
}

export default Pill;