import { useEffect, useState } from 'react';

export function useDarkMode() {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return true;
    return true;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return { isDark, setIsDark };
}
