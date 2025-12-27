import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed font-bold rounded-xl transform hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0";
  
  const variants = {
    // High contrast yellow for black backgrounds
    primary: "bg-brand-yellow text-brand-black hover:bg-[#ffe040] shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20",
    // High contrast black for yellow or light backgrounds
    secondary: "bg-brand-black text-white hover:bg-zinc-900 shadow-xl shadow-black/10 hover:shadow-black/20",
    // Clean outline with brand colors
    outline: "border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black shadow-lg shadow-brand-yellow/5",
    // Subtle ghost variant
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;