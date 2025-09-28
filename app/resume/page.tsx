'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import avatar from '../avatar.webp'
import {
  CodeBracketIcon,
  StarIcon,
  DocumentIcon,
  DocumentArrowDownIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

// 个人信息配置
const personalInfo = {
  name: 'Xqd',
  title: 'Computer Science Student',
  location: 'China',
  email: 'contact@example.com',
  phone: '+86 138-0000-0000',
  website: 'https://blog.xqd.pp.ua',
  summary: 'Passionate computer science student with strong interests in software development, web technologies, and continuous learning. Unity of knowledge and action.',
}

// 教育背景
const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University Name',
    period: '2020 - 2024',
    description: 'Major in Computer Science with focus on software engineering and web development.'
  }
]

// 技能
const skills = {
  programming: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  frontend: ['React', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  tools: ['Git', 'Docker', 'VS Code', 'Figma', 'Photoshop'],
  languages: ['Chinese (Native)', 'English (Intermediate)']
}

// 项目经验
const projects = [
  {
    name: 'NextMe Blog',
    description: 'A modern personal blog built with Next.js 15, featuring photo galleries, MDX content management, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    url: 'https://blog.xqd.pp.ua',
    period: '2024'
  },
  {
    name: 'Photo Management System',
    description: 'Developed an automated photo management system with dynamic loading and categorization features.',
    technologies: ['React', 'Node.js', 'Image Processing'],
    period: '2024'
  }
]

// 兴趣爱好
const interests = [
  'Software Development',
  'Photography',
  'Music',
  'Reading',
  'Technology Trends',
  'Open Source'
]

export default function ResumePage() {
  // 直接PDF文件下载
  const downloadPDF = useCallback(() => {
    // 创建一个下载链接
    const link = document.createElement('a')
    link.href = '/resume/Xqd_Resume.pdf'  // 指向静态PDF文件
    link.download = 'Xqd_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  // 如果没有静态PDF文件，使用浏览器的打印功能
  const printToPDF = useCallback(() => {
    // 使用更简洁的打印方式
    window.print()
  }, [])

  return (
    <section className="sm:px-14 sm:pt-6" id="resume-content">
      {/* 页面标题和下载按钮 */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-medium tracking-tighter">Resume</h1>
        <div className="flex gap-2 no-print">
          <button
            onClick={downloadPDF}
            className="flex items-center justify-center rounded-xl border-[0.5px] border-neutral-200 p-2 text-xs font-medium shadow-[0_2px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-stone-100 hover:shadow-none dark:border-neutral-700 dark:bg-neutral-700/20 dark:hover:bg-neutral-900/20"
          >
            <DocumentArrowDownIcon className="mr-1 h-4 w-4" />
            <p>PDF</p>
          </button>
          <button
            onClick={printToPDF}
            className="mr-4 flex items-center justify-center rounded-xl border-[0.5px] border-neutral-200 p-2 text-xs font-medium shadow-[0_2px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-stone-100 hover:shadow-none dark:border-neutral-700 dark:bg-neutral-700/20 dark:hover:bg-neutral-900/20"
          >
            <DocumentIcon className="mr-1 h-4 w-4" />
            <p>Print</p>
          </button>
        </div>
      </div>
      <p className="prose prose-neutral mb-8 text-sm dark:prose-invert">
        My personal resume and professional background.
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
              {personalInfo.name}
            </h2>
            <p className="prose prose-neutral text-sm dark:prose-invert mb-4">
              {personalInfo.title}
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* 联系方式 - 优化布局 */}
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
        {/* 左侧：技能 */}
        <div className="space-y-8">
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <CodeBracketIcon className="w-4 h-4" />
              Technical Skills
            </h3>

            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3 capitalize">
                    {category.replace(/([A-Z])/g, ' $1')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 兴趣爱好 */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <StarIcon className="w-4 h-4" />
              Interests
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

        {/* 右侧：教育和项目 */}
        <div className="lg:col-span-2 space-y-12">
          {/* 教育背景 */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <AcademicCapIcon className="w-4 h-4" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700"></div>
                  <div className="absolute left-[-3px] top-1 w-[7px] h-[7px] bg-neutral-400 dark:bg-neutral-600 rounded-full"></div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-md font-medium tracking-tighter">
                      {edu.degree}
                    </h4>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 sm:ml-4 flex-shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                    {edu.school}
                  </p>
                  <p className="prose prose-neutral text-sm dark:prose-invert leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 项目经验 */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <BriefcaseIcon className="w-4 h-4" />
              Projects
            </h3>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700"></div>
                  <div className="absolute left-[-3px] top-1 w-[7px] h-[7px] bg-neutral-400 dark:bg-neutral-600 rounded-full"></div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-md font-medium tracking-tighter">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h4>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 sm:ml-4 flex-shrink-0">
                      {project.period}
                    </span>
                  </div>
                  <p className="prose prose-neutral text-sm dark:prose-invert mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center no-print">
        <div className="prose prose-neutral text-sm dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}.</p>
          <p className="mt-2">
            This resume is also available as a{' '}
            <button
              onClick={downloadPDF}
              className="font-medium hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors underline"
            >
              PDF download
            </button>.
          </p>
        </div>
      </footer>

      {/* 打印样式 */}
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          body {
            font-size: 11px !important;
            line-height: 1.4 !important;
            color: black !important;
            background: white !important;
          }

          .no-print {
            display: none !important;
          }

          section {
            padding: 0 !important;
            margin: 0 !important;
          }

          .shadow-lg, .shadow-md {
            box-shadow: none !important;
          }

          .dark\\:bg-neutral-900,
          .dark\\:bg-neutral-800,
          .bg-white,
          .bg-neutral-100,
          .dark\\:bg-neutral-800 {
            background: white !important;
          }

          .dark\\:text-white,
          .dark\\:text-neutral-300,
          .text-neutral-900,
          .text-neutral-700,
          .dark\\:text-neutral-300 {
            color: black !important;
          }

          .dark\\:text-neutral-400,
          .text-neutral-600,
          .text-neutral-500,
          .dark\\:text-neutral-400 {
            color: #4a5568 !important;
          }

          .dark\\:border-neutral-700,
          .border-neutral-200,
          .dark\\:border-neutral-700 {
            border-color: #d1d5db !important;
          }

          .bg-green-500, .bg-blue-500, .bg-red-500 {
            background: #6b7280 !important;
          }

          h1, h2, h3, h4 {
            break-after: avoid;
            page-break-after: avoid;
          }

          .grid {
            display: block !important;
          }

          .lg\\:col-span-2 {
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}