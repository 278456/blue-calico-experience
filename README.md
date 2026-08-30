# 大临蓝印

> 一座可以浏览、理解、游玩与再创作的蓝印花布数字文化体验平台。

本项目以浙江嘉兴大临村蓝印花布为主题，将纹样档案、传统工艺、田野影像和互动创作整合到同一个 Web 体验中。访问者既可以检索纹样与阅读文化故事，也可以生成个人蓝印卡、挑战纹样翻翻乐，并在 3D 工坊中把传统纹样应用到当代器物上。

![大临蓝印首页](screenshots/01-home.png)

## 项目亮点

- **文化内容数字化**：收录植物、动物、吉祥、几何四类共 12 组代表性纹样，呈现名称、寓意、来源故事、使用场景与现代转译方向。
- **实地资料可视化**：通过工坊影像、匠人记录、展览活动和校园传承素材，还原大临村蓝印花布的真实传承现场。
- **互动式认知体验**：用性格问答生成专属蓝印卡，也可通过多难度翻牌游戏认识纹样名称和文化寓意。
- **3D 文创工作流**：支持上传本地纹样、选择五类器物载体、调整纹理与视角，并将当前创作导出为 PNG 渲染图。
- **多端自适应**：针对桌面端、平板和手机分别优化导航、信息排布、互动面板与 3D 操作区。

## 核心体验

| 模块 | 路径 | 体验内容 |
| --- | --- | --- |
| 首页 | `/` | 项目导览、工艺流程、代表纹样与主要体验入口 |
| 蓝印纹库 | `/library` | 分类筛选、关键词检索、纹样详情与关联纹样推荐 |
| 她与蓝 | `/heritage` | 大临村工坊、匠人、活动和文创实践的田野影像档案 |
| 寻找你的蓝 | `/find-blue` | 专属蓝印卡与纹样翻翻乐两个互动入口 |
| 专属蓝印卡 | `/find-blue/card` | 完成性格问答、匹配代表纹样并下载 SVG 结果卡 |
| 纹样翻翻乐 | `/find-blue/game` | 选择难度、计时配对，并在游戏中了解纹样知识 |
| 纹脉工坊 | `/patternx` | 纹样采集、实时 3D 预览、参数调节与 PNG 导出 |

## 页面预览

| 蓝印纹库 | 纹样详情 |
| --- | --- |
| ![蓝印纹库](screenshots/02-library.png) | ![牡丹纹样详情](screenshots/03-pattern-detail-mudan.png) |

| 非遗现场 | 纹脉工坊 |
| --- | --- |
| ![她与蓝](screenshots/04-heritage.png) | ![3D 纹脉工坊](screenshots/14-patternx-studio-redesign-desktop.png) |

<details>
<summary>查看移动端效果</summary>

| 工坊入口 | 3D 创作 |
| --- | --- |
| ![移动端工坊入口](screenshots/07-intro-digital-design-mobile.png) | ![移动端 3D 创作](screenshots/15-patternx-studio-redesign-mobile.png) |

</details>

## 技术实现

| 层面 | 技术与用途 |
| --- | --- |
| 前端框架 | Vue 3 Composition API、单文件组件 |
| 工程构建 | Vite 6 |
| 3D 渲染 | Three.js、程序化器物模型、纹理映射与 Canvas 导出 |
| 图标系统 | Lucide Vue Next |
| 页面导航 | 基于 History API 的轻量客户端路由 |
| 数据与素材 | 本地 JavaScript 数据、图片、WebP、视频与 Git LFS |

项目目前是纯前端应用，不依赖后端接口或数据库；问答结果、翻牌状态、图片上传和 3D 生成均在浏览器端完成。

## 快速开始

### 环境要求

- Node.js 18 或更高版本
- npm
- [Git LFS](https://git-lfs.com/)

### 安装与运行

```bash
git lfs install
git clone https://github.com/278456/blue-calico-experience.git
cd blue-calico-experience
git lfs pull
npm ci
npm run dev
```

开发服务器默认运行在 `http://localhost:5173`。若端口被占用，请以终端实际输出为准。

### 生产构建

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`。本地预览默认使用 `http://localhost:4173`。

## 项目结构

```text
blue-calico-experience/
├─ public/
│  └─ assets/               # 纹样、田野照片、视频与互动素材
├─ screenshots/             # README 与项目展示截图
├─ src/
│  ├─ components/           # 页头、页脚、纹样卡片及互动组件
│  ├─ composables/          # 客户端路由状态
│  ├─ data/                 # 纹样、工艺流程与素材数据
│  ├─ pages/                # 各体验页面
│  ├─ App.vue               # 页面编排与路由出口
│  ├─ main.js               # 应用入口
│  └─ styles.css            # 全局视觉与响应式样式
├─ index.html
├─ package.json
└─ vite.config.js
```

## 部署说明

该项目使用 History API 处理前端路径。部署到静态托管平台时，需要把未知路径回退到 `index.html`，否则直接访问 `/library`、`/patternx` 等地址时可能出现 404。

图片和视频由 Git LFS 管理。首次拉取、迁移仓库或执行云端构建时，请确认环境已安装 Git LFS，并已完整执行 `git lfs pull`。

## 素材与使用说明

项目包含大临村蓝印花布相关的实地采集图片、视频、纹样资料和展示素材。仓库目前未声明开源许可证；公开访问仅代表允许查看，代码及素材的复制、修改、再发布或商业使用，需取得项目维护者或相应权利人的授权。

---

让传统纹样不只被保存，也能被理解、体验和继续创作。
