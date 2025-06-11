# 个人主页

这是一个简洁大方的个人主页项目，使用Next.js构建，由Bun管理，可部署到Vercel和Cloudflare Pages。

## 技术栈

- **框架**: Next.js 15.3.3
- **语言**: TypeScript
- **包管理器**: Bun
- **样式**: TailwindCSS 4
- **部署平台**: Vercel, Cloudflare Pages

## 功能

- 响应式设计，适配各种屏幕尺寸
- 暗色/亮色模式自动切换
- 简洁大方的UI设计
- 个人介绍、技能展示、项目展示和联系方式等板块

## 本地开发

确保已安装Bun：

```bash
# 安装Bun（如果尚未安装）
curl -fsSL https://bun.sh/install | bash

# 安装依赖
bun install

# 启动开发服务器
bun run dev
```

然后在浏览器中访问 `http://localhost:3000` 查看网站。

## 部署

### 部署到Vercel

1. 在[Vercel](https://vercel.com)创建账户
2. 导入你的GitHub仓库
3. 选择"Next.js"框架预设
4. 设置环境变量（如果需要）
5. 点击"Deploy"

### 部署到Cloudflare Pages

1. 在[Cloudflare Pages](https://pages.cloudflare.com/)创建账户
2. 创建新项目并连接到你的GitHub仓库
3. 配置构建设置：
   - 构建命令: `bun run build`
   - 输出目录: `.next`
   - 环境变量: `NODE_VERSION=20`
4. 点击"Save and Deploy"

## 自定义

- 编辑 `app/page.tsx` 修改主页内容
- 编辑 `app/globals.css` 修改全局样式
- 在 `public/` 目录中添加你的头像和项目图片

## 许可证

MIT
