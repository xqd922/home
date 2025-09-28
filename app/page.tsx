'use client'

import Link from 'next/link'
import Image from 'next/image'
import avatar from './avatar.webp'
import {
  ArrowRightIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  StarIcon,
  HeartIcon,
  MusicalNoteIcon,
  CameraIcon,
  BookOpenIcon,
  ClockIcon,
  BriefcaseIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

// 个人信息配置
const personalInfo = {
  name: 'Xqd',
  title: '学生 & 开发者',
  tagline: '在代码与生活中寻找平衡',
  location: 'China',
  email: 'contact@example.com',
  website: 'https://blog.xqd.pp.ua',
  github: 'https://github.com/yourusername',
  description: '喜欢折腾技术，热爱摄影和音乐。相信技术可以让生活更美好，也相信生活能让技术更有温度。',
  currentStatus: '正在学习 Next.js 和 TypeScript',
  mood: '😊'
}

// 最新动态 - 更生活化
const recentActivities = [
  {
    title: '今天的心情',
    content: '阳光很好，适合写代码和拍照 ☀️',
    icon: HeartIcon,
    time: '今天'
  },
  {
    title: '正在听',
    content: 'Bon Iver - Re: Stacks',
    icon: MusicalNoteIcon,
    time: '现在'
  },
  {
    title: '最近在学',
    content: 'Next.js 15 的新特性，感觉很有趣',
    icon: BookOpenIcon,
    time: '本周'
  },
  {
    title: '刚刚完成',
    content: '个人主页的重新设计',
    icon: CodeBracketIcon,
    time: '1小时前'
  }
]

// 生活片段
const lifeSnapshots = [
  {
    title: '摄影作品',
    description: '最近拍摄的一些城市夜景和街头瞬间',
    count: '12 张照片',
    icon: CameraIcon
  },
  {
    title: '读书笔记',
    description: '《代码整洁之道》和一些科幻小说的感悟',
    count: '3 篇笔记',
    icon: BookOpenIcon
  },
  {
    title: '音乐收藏',
    description: 'Indie Rock 和 Electronic 音乐精选',
    count: '50+ 首歌',
    icon: MusicalNoteIcon
  }
]

// 快速链接
const quickLinks = [
  {
    name: '个人博客',
    url: 'https://blog.xqd.pp.ua',
    description: '技术文章和生活感悟',
    icon: GlobeAltIcon
  },
  {
    name: '详细简历',
    url: '/resume',
    description: '专业背景和项目经验',
    icon: DocumentTextIcon
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    description: '开源项目和代码',
    icon: CodeBracketIcon
  }
]

// 精选项目 - 简化版
const featuredProjects = [
  {
    title: 'NextMe Blog',
    description: '个人博客，记录技术学习和生活感悟',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    url: 'https://blog.xqd.pp.ua',
    github: 'https://github.com/yourusername/blog',
    period: '2024',
    status: '持续更新'
  },
  {
    title: '个人主页',
    description: '简洁优雅的个人展示空间',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    url: '#',
    github: 'https://github.com/yourusername/homepage',
    period: '2024',
    status: '正在完善'
  }
]

// 兴趣爱好
const interests = [
  '摄影', '音乐', '编程', '阅读', '技术分享', '开源项目'
]

export default function HomePage() {
  return (
    <section className="sm:px-14 sm:pt-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-medium tracking-tighter">个人主页</h1>
        <div className="flex gap-2">
          <Link
            href="/resume"
            className="flex items-center justify-center rounded-xl border-[0.5px] border-neutral-200 p-2 text-xs font-medium shadow-[0_2px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-stone-100 hover:shadow-none dark:border-neutral-700 dark:bg-neutral-700/20 dark:hover:bg-neutral-900/20"
          >
            <DocumentTextIcon className="mr-1 h-4 w-4" />
            <p>简历</p>
          </Link>
        </div>
      </div>
      <p className="prose prose-neutral mb-8 text-sm dark:prose-invert">
        欢迎来到我的个人空间，了解我的生活和创作。
      </p>

      {/* 个人信息头部 */}
      <header className="mb-12">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Image
            src={avatar}
            alt={personalInfo.name}
            width={64}
            height={64}
            className="h-14 w-14 rounded-full border border-neutral-200 dark:border-neutral-700 flex-shrink-0"
            priority
          />
          <div className="flex-1">
            <h2 className="mb-1 text-xl font-medium tracking-tighter">
              你好，我是 {personalInfo.name} {personalInfo.mood}
            </h2>
            <p className="prose prose-neutral text-sm dark:prose-invert mb-2">
              {personalInfo.title}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mb-4 font-medium">
              {personalInfo.tagline}
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              {personalInfo.description}
            </p>

            {/* 当前状态 */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 dark:text-green-300">{personalInfo.currentStatus}</span>
            </div>

            {/* 联系方式 */}
            <div className="flex flex-wrap items-center gap-1 text-xs">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <span className="mx-1 font-medium">/</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                >
                  {personalInfo.website}
                </a>
              </div>
              <span className="mx-1 font-medium">/</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="font-medium">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* 左侧：生活动态 */}
        <div className="space-y-8">
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <ClockIcon className="w-4 h-4" />
              最近在做什么
            </h3>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-3">
                    <activity.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {activity.title}
                        </h4>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {activity.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 兴趣爱好 */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <StarIcon className="w-4 h-4" />
              我的兴趣
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-700"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* 右侧：生活片段和快速链接 */}
        <div className="lg:col-span-2 space-y-12">
          {/* 生活片段 */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <CameraIcon className="w-4 h-4" />
              生活片段
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {lifeSnapshots.map((snapshot, index) => (
                <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-3">
                    <snapshot.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-md font-medium tracking-tighter">
                          {snapshot.title}
                        </h4>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {snapshot.count}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {snapshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 快速链接 */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <ArrowRightIcon className="w-4 h-4" />
              快速链接
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:shadow-sm transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600 group"
                >
                  <div className="flex items-start gap-3">
                    <link.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium tracking-tighter mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 最近项目（简化版） */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <BriefcaseIcon className="w-4 h-4" />
              最近在做
            </h3>

            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:shadow-sm transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-md font-medium tracking-tighter">
                        {project.url !== '#' ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h4>
                      <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700 dark:border-orange-800 dark:bg-orange-900/20 dark:text-orange-300">
                        {project.status}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 sm:ml-4 flex-shrink-0">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-neutral-500 dark:text-neutral-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.url !== '#' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-lg border-[0.5px] border-neutral-200 px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                      >
                        <GlobeAltIcon className="mr-1 h-3 w-3" />
                        访问
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-lg border-[0.5px] border-neutral-200 px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      <CodeBracketIcon className="mr-1 h-3 w-3" />
                      代码
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center">
        <div className="prose prose-neutral text-sm dark:prose-invert">
          <p>感谢访问我的个人主页！ ✨</p>
          <p className="mt-2">
            想了解更多？查看我的{' '}
            <Link
              href="/resume"
              className="font-medium hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors underline"
            >
              详细简历
            </Link>
            {' '}或{' '}
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors underline"
            >
              个人博客
            </a>
            。
          </p>
        </div>
      </footer>
    </section>
  )
}