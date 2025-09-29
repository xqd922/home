'use client'

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { cn } from '../../lib/utils'
import Link from 'next/link'

import {
  HomeIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export const siteUrlList = [
  {
    name: 'Home',
    url: '/',
    icon: HomeIcon,
    description: 'Personal homepage'
  },
  {
    name: 'Resume',
    url: '/resume',
    icon: DocumentTextIcon,
    description: 'Professional background'
  },
]

const quickActions = [
  {
    name: 'Contact',
    icon: EnvelopeIcon,
    action: () => window.open('mailto:contact@example.com'),
    description: 'Send email'
  }
]

export default function Nav() {
  const nowPath = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (url: string) => {
    if (url === '/') return nowPath === '/'
    return nowPath.startsWith(url)
  }

  return (
    <>
      {/* 触发按钮 */}
      <button
        onClick={() => {
          console.log('Button clicked!')
          setIsOpen(!isOpen)
        }}
        className="fixed left-4 top-4 rounded-xl border border-neutral-200 bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl dark:border-neutral-700 dark:bg-black/80 dark:hover:bg-black"
        style={{ zIndex: 1000 }}
      >
        {isOpen ? (
          <XMarkIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
        ) : (
          <Bars3Icon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
        )}
      </button>

      {/* 遮罩层 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 900 }}
        />
      )}

      {/* 抽屉式侧边栏 */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-neutral-900",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ zIndex: 950 }}
      >
        {/* 侧边栏头部 */}
        <div className="border-b border-neutral-200 p-6 dark:border-neutral-700">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              <UserCircleIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-neutral-900 dark:text-white">
                Xqd
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Computer Science Student
              </p>
            </div>
          </div>
        </div>

        {/* 导航菜单 */}
        <nav className="p-4">
          <div className="space-y-2">
            {siteUrlList.map((site) => (
              <Link
                key={site.name}
                href={site.url}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  isActive(site.url)
                    ? "bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-900/20 dark:text-blue-300"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                )}
              >
                <site.icon className="h-5 w-5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-medium">{site.name}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {site.description}
                  </div>
                </div>
                {isActive(site.url) && (
                  <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-700">
            <h3 className="mb-3 px-4 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  onClick={() => {
                    action.action()
                    setIsOpen(false)
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  <action.icon className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="font-medium">{action.name}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      {action.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile bottom navigation (backup) */}
      <nav
        aria-label="Mobile navigation"
        className="z-30 flex flex-col items-center justify-center md:hidden"
      >
        <div
          role="navigation"
          className="fixed bottom-6 flex items-center gap-1 rounded-[50px] border border-white/15 bg-stone-100/90 p-[3px] shadow-lg shadow-black/10 backdrop-blur-sm dark:bg-stone-800/90 dark:shadow-white/5"
        >
          {siteUrlList.map((site) => (
            <Link
              key={site.name}
              href={site.url}
              className={cn(
                'relative rounded-3xl px-3 py-[8px] text-[13px] font-[600] transition-all duration-300',
                'transform-gpu hover:scale-[1.02] active:scale-95',
                'flex items-center gap-1',
                isActive(site.url)
                  ? 'text-black bg-white shadow-md dark:text-white dark:bg-stone-700'
                  : 'text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300'
              )}
              aria-current={isActive(site.url) ? 'page' : undefined}
            >
              <site.icon className="h-4 w-4 flex-shrink-0" />
              <span className="select-none whitespace-nowrap hidden sm:block">{site.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}