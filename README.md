# 大临蓝印数字体验平台

以浙江嘉兴大临村蓝印花布为主题的数字文化体验网站。项目通过纹样数字档案、非遗现场影像、互动游戏和 3D 文创设计，让传统蓝印花布从静态展示走向可检索、可体验、可创作的数字空间。

![大临蓝印首页](screenshots/01-home.png)

## 主要功能

- **蓝印纹库**：按纹样类别浏览、筛选和检索蓝印花布纹样，查看纹样寓意与应用信息。
- **她与蓝**：以航拍、工坊短片和现场照片记录大临村工坊、展览、走秀及非遗进校园等活动。
- **寻找你的蓝**：通过关键词选择和翻牌互动，生成具有个人偏好的蓝印纹样结果。
- **纹脉工坊**：将纹样应用到不同产品模型，支持纹样切换、产品模板切换和 3D 效果预览。
- **响应式体验**：适配桌面端和移动端浏览。

| 非遗现场 | 纹脉工坊 |
| --- | --- |
| ![非遗现场页面](screenshots/04-heritage.png) | ![纹脉工坊页面](screenshots/14-patternx-studio-redesign-desktop.png) |

## 技术栈

- Vue 3
- Vite 6
- Three.js
- Lucide Vue Next
- Git LFS

## 本地运行

建议安装 Node.js 18 或更高版本，并提前安装 [Git LFS](https://git-lfs.com/)。

```bash
git lfs install
git clone https://github.com/278456/blue-calico-experience.git
cd blue-calico-experience
git lfs pull
npm install
npm run dev
```

启动后，根据终端输出访问本地开发地址，通常为：

```text
http://localhost:5173
```

## 生产构建

```bash
npm run build
npm run preview
```

构建结果会生成在 `dist/` 目录中。

## 项目结构

```text
blue-calico-experience/
├─ public/assets/     图片、纹样、视频与模型资源
├─ src/components/    通用界面组件
├─ src/data/          纹样及页面数据
├─ src/pages/         首页、纹库、非遗现场和互动页面
├─ src/styles.css     全局视觉与响应式样式
├─ screenshots/       项目展示截图
└─ vite.config.js     Vite 配置
```

## 素材说明

仓库包含蓝印花布实地采集图片和视频，部分大文件由 Git LFS 管理。通过 Git 克隆后请执行 `git lfs pull`，确保素材完整下载。

本仓库目前未声明开源许可证。公开访问仅代表可以查看和下载；代码或图片素材的复制、修改及商业使用权限，以项目维护者后续发布的许可说明为准。
