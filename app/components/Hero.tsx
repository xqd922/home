'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-5xl font-bold">你好，我是小明</h1>
      <p className="text-foreground/70 text-lg">全栈开发者，专注于简洁高效的用户体验</p>
      <div className="flex gap-4">
        <Link href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">项目</Link>
        <Link href="#contact" className="bg-background border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">联系</Link>
      </div>
    </section>
  );
};

export default Hero;
