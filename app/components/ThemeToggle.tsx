'use client';
import {useEffect, useState} from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(saved ?? (systemDark ? 'dark' : 'light'));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="切换主题"
      className="p-2 rounded-md hover:bg-foreground/5"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
