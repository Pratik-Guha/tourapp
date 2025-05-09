'use client';

import { useState, useEffect } from 'react';

const ThemeToggleButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <button
      className="fixed z-50 w-10 h-10 right-4 md:top-48 top-64 bg-neutral-800 dark:bg-white rounded-full"
      onClick={toggleDarkMode}
      aria-label="Toggle Theme"
    >
      {darkMode ? '🌞' : '🌚'}
    </button>
  );
};

export default ThemeToggleButton;
