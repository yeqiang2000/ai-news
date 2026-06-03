# AI News Daily

> 每日AI科技资讯聚合网站，参考 The Verge / TechCrunch / Hacker News 的简洁现代感风格

![AI News Daily](https://picsum.photos/1200/400?random=100)

## ✨ 特性

- 🎨 **深色科技风设计** - 以深色为主色调，搭配紫色科技感accent色
- 📱 **响应式布局** - 完美适配桌面、平板和移动端
- ⚡ **动态数据加载** - 基于JSON的新闻数据结构，便于更新
- 🏷️ **分类筛选** - 支持大模型、芯片算力、AI应用、开源动态、投融资等分类
- 🎬 **流畅动效** - 卡片hover上浮、页面淡入、分类切换动画
- 🕐 **相对时间** - 自动显示"刚刚"、"X小时前"等友好时间格式

## 📂 项目结构

```
ai-news-site/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式表
├── js/
│   └── main.js         # 主脚本
├── data/
│   └── news.json       # 新闻数据
└── README.md           # 项目文档
```

## 🚀 快速开始

### 本地运行

1. 克隆仓库
```bash
git clone https://github.com/yeqiang2000/ai-news.git
cd ai-news-site
```

2. 使用任意HTTP服务器启动

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

3. 浏览器访问 `http://localhost:8000`

> ⚠️ 注意：由于浏览器安全策略，需要通过HTTP服务器访问，不能直接双击index.html

## 📝 新闻数据格式

```json
{
  "last_updated": "2026-06-03T13:00:00+08:00",
  "hero": {
    "id": 0,
    "title": "今日头条标题",
    "summary": "摘要内容",
    "source": "来源",
    "url": "链接",
    "image": "图片URL",
    "category": "分类",
    "date": "2026-06-03"
  },
  "articles": [
    {
      "id": 1,
      "title": "标题",
      "summary": "摘要",
      "source": "来源",
      "url": "链接",
      "image": "图片URL",
      "category": "分类",
      "date": "2026-06-03"
    }
  ]
}
```

## 🎨 分类说明

| 分类 | 说明 |
|------|------|
| 大模型 | GPT、Claude、Gemini、国产大模型等 |
| 芯片算力 | GPU、CPU、AI芯片、算力基础设施 |
| AI应用 | 产品发布、应用落地、实际案例 |
| 开源动态 | 开源项目、社区更新、框架发布 |
| 投融资 | 融资、并购、IPO、行业投资 |

## 🛠️ 技术栈

- HTML5 语义化标签
- CSS3 (变量、CSS Grid、Flexbox、动画)
- Vanilla JavaScript (ES6+)
- Fetch API 数据加载
- 响应式设计 (移动优先)

## 📄 License

MIT License © 2026 AI News Daily
