'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
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
  GlobeAltIcon,
  MapPinIcon,
  ChevronDownIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

// Personal Information Configuration
const personalInfo = {
  name: 'Xqd',
  title: 'Computer Science Student',
  year: 'Senior (4th Year)',
  location: 'China',
  email: 'contact@example.com',
  website: 'https://blog.xqd.pp.ua',
  github: 'https://github.com/yourusername',
  description: 'Passionate computer science student with strong interests in software development, web technologies, and continuous learning. Unity of knowledge and action.',
  currentStatus: 'Currently learning Next.js and TypeScript',
  graduationYear: '2025'
}

// Recent Activities
const recentActivities = [
  {
    title: 'Academic Progress',
    content: 'Working on senior capstone project - a full-stack web application',
    icon: AcademicCapIcon,
    time: 'This semester'
  },
  {
    title: 'Currently Learning',
    content: 'Advanced React patterns and TypeScript best practices',
    icon: BookOpenIcon,
    time: 'This week'
  },
  {
    title: 'Side Project',
    content: 'Building a personal blog with Next.js 15 and MDX',
    icon: CodeBracketIcon,
    time: 'Ongoing'
  },
  {
    title: 'Job Search',
    content: 'Preparing for software engineer positions post-graduation',
    icon: BriefcaseIcon,
    time: 'Current focus'
  }
]

// Academic & Personal Highlights
const highlights = [
  {
    title: 'Academic Projects',
    description: 'Completed various coursework projects in data structures, algorithms, and web development',
    count: '10+ projects',
    icon: AcademicCapIcon
  },
  {
    title: 'Technical Blog',
    description: 'Writing about my learning journey and technical insights',
    count: '5+ articles',
    icon: BookOpenIcon
  },
  {
    title: 'Open Source',
    description: 'Contributing to open source projects and maintaining personal repositories',
    count: '3+ repos',
    icon: CodeBracketIcon
  }
]

// Quick Links
const quickLinks = [
  {
    name: 'Personal Blog',
    url: 'https://blog.xqd.pp.ua',
    description: 'Technical articles and learning journey',
    icon: GlobeAltIcon
  },
  {
    name: 'Resume',
    url: '/resume',
    description: 'Academic background and project experience',
    icon: DocumentTextIcon
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    description: 'Open source projects and code repositories',
    icon: CodeBracketIcon
  }
]

// Featured Projects
const featuredProjects = [
  {
    title: 'NextMe Blog',
    description: 'A modern personal blog built with Next.js 15, featuring responsive design and MDX content management.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    url: 'https://blog.xqd.pp.ua',
    github: 'https://github.com/yourusername/blog',
    period: '2024',
    status: 'In Development',
    type: 'Personal Project'
  },
  {
    title: 'Student Portfolio',
    description: 'Clean and professional portfolio website showcasing academic projects and technical skills.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    url: '#',
    github: 'https://github.com/yourusername/portfolio',
    period: '2024',
    status: 'Active',
    type: 'Academic Project'
  }
]

// Technical Interests
const interests = [
  'Software Development', 'Web Technologies', 'Computer Science', 'Open Source', 'Photography', 'Technology Trends'
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="sm:px-14 sm:pt-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-medium tracking-tighter">Home</h1>
        <div className="flex gap-2">
          <Link
            href="/resume"
            className="flex items-center justify-center rounded-xl border-[0.5px] border-neutral-200 p-2 text-xs font-medium shadow-[0_2px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-stone-100 hover:shadow-none dark:border-neutral-700 dark:bg-neutral-700/20 dark:hover:bg-neutral-900/20"
          >
            <DocumentTextIcon className="mr-1 h-4 w-4" />
            <p>Resume</p>
          </Link>
        </div>
      </div>
      <p className="prose prose-neutral mb-8 text-sm dark:prose-invert">
        Welcome to my personal space. Get to know my academic journey and projects.
      </p>

      {/* Personal Information Header */}
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
              Hi, I'm {personalInfo.name}
            </h2>
            <p className="prose prose-neutral text-sm dark:prose-invert mb-2">
              {personalInfo.title} • {personalInfo.year}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mb-4 font-medium">
              Expected graduation: {personalInfo.graduationYear}
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              {personalInfo.description}
            </p>

            {/* Current Status */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 dark:text-green-300">{personalInfo.currentStatus}</span>
            </div>

            {/* Contact Information */}
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
        {/* Left Side: Recent Activities */}
        <div className="space-y-8">
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <ClockIcon className="w-4 h-4" />
              Recent Activities
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

          {/* Interests */}
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

        {/* Right Side: Highlights and Quick Links */}
        <div className="lg:col-span-2 space-y-12">
          {/* Academic & Personal Highlights */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <AcademicCapIcon className="w-4 h-4" />
              Academic & Personal Highlights
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-3">
                    <highlight.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-md font-medium tracking-tighter">
                          {highlight.title}
                        </h4>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {highlight.count}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <ArrowRightIcon className="w-4 h-4" />
              Quick Links
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

          {/* Featured Projects */}
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium tracking-tighter mb-6">
              <BriefcaseIcon className="w-4 h-4" />
              Featured Projects
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
                      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                        {project.type}
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
                        Visit
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-lg border-[0.5px] border-neutral-200 px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      <CodeBracketIcon className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}