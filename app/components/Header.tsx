'use client';

import Link from 'next/link';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
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
          
          <nav className="flex space-x-8">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 

