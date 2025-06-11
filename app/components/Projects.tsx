'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: '智能助手应用',
      description: '基于人工智能的个人助手应用，可以帮助用户管理日程、回答问题和提供建议。使用React Native开发，支持iOS和Android平台。',
      image: 'gradient-1',
      tags: ['React Native', 'AI', 'TypeScript'],
      link: '#'
    },
    {
      id: 2,
      title: '电子商务平台',
      description: '全功能电子商务平台，包括产品展示、购物车、支付集成和用户管理系统。采用Next.js和Node.js构建，具有出色的性能和SEO优化。',
      image: 'gradient-2',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 3,
      title: '数据可视化仪表板',
      description: '交互式数据可视化仪表板，帮助企业实时监控和分析业务数据。使用Vue.js和D3.js构建，支持多种图表类型和自定义视图。',
      image: 'gradient-3',
      tags: ['Vue.js', 'D3.js', 'GraphQL'],
      link: '#'
    },
    {
      id: 4,
      title: '社交媒体平台',
      description: '具有实时聊天、内容分享和用户互动功能的社交媒体平台。采用MERN技术栈开发，使用Socket.io实现实时通信。',
      image: 'gradient-4',
      tags: ['React', 'Express', 'Socket.io'],
      link: '#'
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const gradients = {
    'gradient-1': 'from-blue-400 to-indigo-600',
    'gradient-2': 'from-green-400 to-teal-500',
    'gradient-3': 'from-purple-400 to-pink-500',
    'gradient-4': 'from-yellow-400 to-orange-500'
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">项目展示</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            这些是我最近完成的一些项目，展示了我的技术能力和创新思维。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background border border-foreground/10 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className={`h-48 bg-gradient-to-r ${gradients[project.image as keyof typeof gradients]} flex items-center justify-center relative`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <h3 className="text-2xl font-bold text-white z-10">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-foreground/5 text-foreground/70 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className={`inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors ${
                    hoveredProject === project.id ? 'underline' : ''
                  }`}
                >
                  查看详情
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center bg-background border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 px-6 py-3 rounded-md transition-colors font-medium"
          >
            查看更多项目
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 