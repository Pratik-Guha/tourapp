import React from 'react';

interface TitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center'; // default optional, assuming only two values are used
}

const Title: React.FC<TitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        align === 'left' ? 'md:items-start md:text-left' : ''
      }`}
    >
      <h1 className="text-4xl md:text-[40px]">{title}</h1>
      <p className="text-base md:text-lg mt-2 max-w-6xl">{subtitle}</p>
    </div>
  );
};

export default Title;
