const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">关于我</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">我是谁？</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              我是一名充满热情的全栈开发者，拥有多年的软件开发经验。我喜欢将创意转化为实用的数字产品，并且我相信技术可以改变世界。
            </p>
            
            <h3 className="text-2xl font-bold mb-4">我的经历</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              我曾在多家科技公司工作，参与开发了各种规模的项目。我的专业领域包括Web开发、移动应用开发和云服务架构。我不断学习新技术，保持对行业最新趋势的了解。
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-background border border-foreground/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">5+</div>
                <div className="text-sm text-foreground/70">年开发经验</div>
              </div>
              <div className="bg-background border border-foreground/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-sm text-foreground/70">完成项目</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full absolute -top-4 -left-4 opacity-20 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-foreground/5 border border-foreground/10 rounded-lg relative overflow-hidden flex items-center justify-center">
                <div className="text-6xl opacity-30">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 