import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, className }) => {
  const baseClasses = "bg-transparent border-2 border-bleu-neon text-bleu-neon px-6 py-2 rounded hover:bg-rose-neon hover:border-rose-neon hover:text-blanc-casse transition duration-300";
  const combinedClasses = `${baseClasses} ${className || ''}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {children}
      </a>
    );
  }

  return <button className={combinedClasses}>{children}</button>;
};

export default Button;