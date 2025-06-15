'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              <span className="inline-block relative">
                <span className="relative z-10">我的主页</span>
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-500/20 -z-10"></span>
              </span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm"
            >
              关于
            </Link>
            <Link 
              href="#skills" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm"
            >
              技能
            </Link>
            <Link 
              href="#projects" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm"
            >
              项目
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm"
            >
              联系
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 