import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="sm:px-14 sm:pt-6">
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <h1 className="text-4xl font-medium tracking-tighter mb-4">404</h1>
        <h2 className="text-xl font-medium tracking-tighter mb-2">页面未找到</h2>
        <p className="prose prose-neutral text-sm dark:prose-invert mb-8">
          抱歉，您访问的页面不存在。
        </p>
        <Link
          href="/"
          className="flex items-center justify-center rounded-xl border-[0.5px] border-neutral-200 px-4 py-2.5 text-sm font-medium shadow-[0_2px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-stone-100 hover:shadow-none dark:border-neutral-700 dark:bg-neutral-700/20 dark:hover:bg-neutral-900/20"
        >
          返回首页
        </Link>
      </div>
    </section>
  )
}