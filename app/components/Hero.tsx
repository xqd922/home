'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-center min-h-screen bg-gradient-to-b from-purple-600/20 via-transparent to-background">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            你好，我是小明
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-foreground/80 mb-10">
          这里记录我的项目与技术分享，欢迎交流。
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            查看项目
          </Link>
          <Link
            href="#contact"
            className="bg-background border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/30 px-6 py-3 rounded-md transition-colors"
          >
            联系我
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
