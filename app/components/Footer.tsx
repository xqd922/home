const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-foreground/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">我的主页</h3>
            <p className="text-foreground/70 mb-4 max-w-md">
              一个专注于创造有价值产品的全栈开发者。热爱探索新技术，致力于打造卓越的用户体验。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-blue-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-blue-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="mailto:example@example.com" 
                className="text-foreground/60 hover:text-blue-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-blue-500 transition-colors">关于我</a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/70 hover:text-blue-500 transition-colors">技能</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-blue-500 transition-colors">项目</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-blue-500 transition-colors">联系</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">联系方式</h4>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                <span className="block">邮箱：</span>
                <a href="mailto:example@example.com" className="hover:text-blue-500 transition-colors">
                  example@example.com
                </a>
              </li>
              <li className="text-foreground/70">
                <span className="block">GitHub：</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  github.com/username
                </a>
              </li>
              <li className="text-foreground/70">
                <span className="block">LinkedIn：</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  linkedin.com/in/username
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-12 pt-8 text-center text-foreground/60 text-sm">
          <p>© {currentYear} 我的个人主页. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 