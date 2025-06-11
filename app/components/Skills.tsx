'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  description: string;
  icon: string;
}

const Skills = () => {
  const skillCategories = [
    { id: 'frontend', name: '前端开发' },
    { id: 'backend', name: '后端开发' },
    { id: 'design', name: 'UI/UX设计' },
    { id: 'devops', name: '开发运维' }
  ];
  
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  
  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: 'React', level: 90, description: '构建用户界面的JavaScript库', icon: '⚛️' },
      { name: 'Vue', level: 85, description: '渐进式JavaScript框架', icon: '🖖' },
      { name: 'TypeScript', level: 80, description: 'JavaScript的超集', icon: '📘' },
      { name: 'TailwindCSS', level: 95, description: '实用优先的CSS框架', icon: '🎨' }
    ],
    backend: [
      { name: 'Node.js', level: 85, description: '基于Chrome V8引擎的JavaScript运行环境', icon: '🟢' },
      { name: 'Python', level: 80, description: '简单易学的高级编程语言', icon: '🐍' },
      { name: 'Go', level: 75, description: '高效的静态类型编程语言', icon: '🐹' },
      { name: 'SQL', level: 90, description: '关系型数据库查询语言', icon: '🗃️' }
    ],
    design: [
      { name: 'Figma', level: 85, description: '协作界面设计工具', icon: '🎭' },
      { name: 'Adobe XD', level: 80, description: '用户体验设计工具', icon: '✒️' },
      { name: 'UI设计', level: 75, description: '创建视觉上吸引人的界面', icon: '🎨' },
      { name: 'UX设计', level: 70, description: '提升用户体验和可用性', icon: '🧠' }
    ],
    devops: [
      { name: 'Docker', level: 85, description: '容器化平台', icon: '🐳' },
      { name: 'Git', level: 90, description: '分布式版本控制系统', icon: '📊' },
      { name: 'CI/CD', level: 80, description: '持续集成和持续部署', icon: '🔄' },
      { name: 'AWS', level: 75, description: '云计算服务平台', icon: '☁️' }
    ]
  };

  return (
    <section id="skills" className="py-24 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">我的技能</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            我精通多种技术栈，能够从前端到后端进行全面开发。以下是我的主要技能领域。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-foreground/5 hover:bg-foreground/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <div 
              key={index} 
              className="bg-background border border-foreground/10 rounded-lg p-6 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-4">{skill.description}</p>
              <div className="w-full bg-foreground/10 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-foreground/60">
                <span>入门</span>
                <span>熟练</span>
                <span>精通</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 