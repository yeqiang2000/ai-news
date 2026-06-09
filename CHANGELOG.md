# AI News Daily 更新日志

所有网站内容与功能的更新记录，每次更新时追加到本文档。

---

## 2026-06-07 #1 — 6月7日每日更新

### 新增
- 6月7日新闻10条 + 头条（美国政府考虑入股AI企业）
- 深度文章 `article-7.html`：《当国家成为AI股东：美国政府入股科技公司的战略逻辑与风险》（约1500字，6月8日提前发布）
- `wechat/article-7-wechat.html`：微信图文适配版

### 修改
- `data/news.json`：新增6月7日数据，保留6月5-6日历史（3天）
- `data/articles.json`：新增 article-7 元数据
- `index.html`：侧边栏推荐区更新（article-7 🔥、article-6 📖、article-5 📖）
- `js/i18n.js`：深度文章标题更新为 article-7、article-6、article-5

---

## 2026-06-06 #3 — 提前写好6月7日深度文章

### 新增
- 深度文章 `article-6.html`：《特斯拉Robotaxi：全城无人驾驶的豪言与20辆车的现实》（约1500字）
  - 聚焦特斯拉奥斯汀全城无人运营 vs 20辆车规模的商业矛盾
  - 涵盖纯视觉vs激光雷达路线分歧、FSD v15赌注、中美赛道对比、投资视角
  - 含完整SEO标签（meta/OG/Twitter Card/JSON-LD）
- `data/articles.json` 新增 article-6 元数据
- 侧边栏推荐区更新：article-6 🔥，article-5 降为 📖

### 修改
- `i18n.js`：深度文章标题更新，article-6 为首位推荐

---

## 2026-06-06 #2 — 首页深度文章标签页

**Commit:** `49445b6`

### 新增
- 导航栏新增「深度文章」标签（桌面端+移动端），点击切换到文章视图
- 新增 `data/articles.json`，集中存储所有深度文章元数据（中英双语标题/摘要、分类、日期、阅读时长）
- 深度文章卡片组件：左图右文杂志风格布局，编号徽章，hover动效

### 修改
- `index.html`：导航栏（桌面端+移动端）添加「深度文章」按钮
- `js/main.js`：
  - 点击「深度文章」时隐藏Hero区、加载articles.json、渲染文章卡片
  - 切换回其他标签自动恢复新闻视图
  - 语言切换时同步更新文章视图
- `js/i18n.js`：新增深度文章相关中英文翻译（nav_articles / articles_section_title / articles_read_more 等）
- `css/style.css`：新增深度文章卡片样式、`--cat-深度文章: #d946ef`、响应式适配

---

## 2026-06-06 #1 — 多日内容支持 + 6月6日更新

**Commit:** `40001c6`

### 新增
- `news.json` 重构为 `days` 数组格式：每天独立存储 hero 和 articles，解决历史内容覆盖问题
- `main.js` 多日渲染：日期分隔符（`createDateSeparator()`）、跨天分类筛选（`renderFilteredNewsGrid()`）、`CONFIG.maxDays = 5` 限制
- 日期分隔符样式：横跨全宽渐变线条 + 日期标签徽章
- `i18n.js` 新增 `date_today` / `date_yesterday` 中英文翻译
- 6月6日10条新闻 + 头条（Anthropic递归式自我改进报告）
- 保留6月5日全部10条历史新闻
- 深度文章 `article-5.html`：《AI递归式自我改进：Anthropic为何呼吁暂停？》（约1500字）
- 侧边栏推荐区更新：article-5 🔥、article-4 📖、移除article-1

### 修复
- `news.json` 中文引号 `""` 替换为 `「」`，避免与JSON双引号冲突导致解析失败

---

## 2026-06-04 — 双语支持 + 6月4日更新

### 新增
- `js/i18n.js` 国际化模块：IP地理位置检测（ipapi.co）+ 浏览器语言回退 + 手动切换按钮 + localStorage缓存
- 中国IP自动显示中文，其他地区显示英文
- 导航栏语言切换按钮（EN/中文）
- `news.json` 每条新闻新增 `title_en` / `summary_en` / `source_en` 英文翻译字段
- 新增分类：政策监管（Policy & Regulation），CSS变量 `--cat-政策监管: #3b82f6`
- 深度文章 `article-3.html`：《DeepSeek首轮融资500亿：分水岭时刻》（约1500字）
- 建立每日定时任务（早上9点CST自动搜集AI新闻→更新news.json→推GitHub，后暂停）

### 修改
- 所有静态UI文本（导航、标题、侧边栏、页脚、时间、提示等）纳入i18n翻译字典
- 全页面翻译联动：语言切换时同步更新新闻卡片、Hero区、侧边栏推荐标题

---

## 2026-06-03 #2 — 合规页面 + 深度文章 + SEO优化

**Commit:** `ca5cb94`（8个文件更改，2392行插入）

### 新增
- 合规页面：
  - `privacy.html`：隐私政策（Cookie说明、第三方广告商、用户权利、数据安全）
  - `about.html`：关于我们（使命、6大覆盖领域、内容来源、更新频率）
  - `contact.html`：联系方式（联系表单→aiwangzhanceo@coze.email、邮箱、社交媒体占位）
  - `disclaimer.html`：免责声明（投资风险提示、新闻来源说明、第三方链接免责、AI辅助生成声明）
- 深度文章：
  - `article-1.html`：《英伟达GTC 2026：AI芯片三箭齐发，智能体时代全面到来》（约1500字）
  - `article-2.html`：《2026年AI大模型竞赛新格局——Anthropic估值登顶，具身智能元年开启》（约1500字）
- SEO优化：meta标签 / Open Graph / Twitter Card / JSON-LD结构化数据 / `sitemap.xml` / `robots.txt`
- 推广材料（`promotion/`）：小红书、Twitter/X、知乎、微信群文案

### 修改
- 导航栏添加「关于」下拉菜单（关于我们/联系方式/隐私政策/免责声明）
- 移动端导航添加合规页面链接
- 页脚添加「关于」栏（含所有合规页面链接）
- 侧边栏新增「深度好文」推荐区

---

## 2026-06-03 #1 — 网站初始化

### 新增
- 网站基础架构：纯 HTML5 + CSS3 + Vanilla JS，无框架
- 新闻数据存储：`data/news.json`（hero头条 + articles数组）
- 深色科技风设计主题
- 响应式布局（桌面/平板/手机）
- 导航分类标签：全部 / 大模型 / 芯片算力 / AI应用 / 开源动态 / 投融资
- Hero区今日头条
- 新闻卡片网格（2列）
- 侧边栏：热门话题标签云 + 本周必读 + 数据来源
- 部署到 Netlify，域名 ainewsdaily.asia（阿里云DNS配置A+CNAME记录）
- GitHub 仓库：yeqiang2000/ai-news

## 2026-06-08 更新

### 新闻更新
- 新增2026-06-08日期：10条AI新闻 + 头条"历史性IPO浪潮来袭：SpaceX、Anthropic、OpenAI合计融资目标2000亿美元"
- 涵盖政策监管（Krishnan离职、联邦AI法案、中国AI终端分级标准）、投融资（IPO浪潮、Anthropic与白宫缓和关系）、AI应用（AI设计疫苗、企业AI转向ROI）、大模型（微软-OpenAI关系、英国AI安全红队测试）、芯片算力（AirTrunk印度数据中心投资）

### 深度文章
- 新增article-8：《AI万亿IPO潮：历史性上市浪潮还是泡沫信号？》（2026-06-09发布）
- 选题背景：SpaceX IPO 750亿美元+Anthropic+OpenAI合计2000亿美元融资目标，Michael Burry等发出泡沫警告

### 侧边栏推荐更新
- article-8 🔥 → article-7 📖 → article-6 📖

### i18n更新
- 深度文章标题：article-8/7/6（中英文）

## 2026-06-08 #2 — 撤回提前发布的article-8

### 修改
- `data/articles.json`：移除 article-8 元数据（文章已写好，6月9日发布时再加回）
- `index.html`：侧边栏移除 article-8，推荐区改为 article-7 🔥、article-6 📖
- `js/i18n.js`：注释 deep_article_1_title（article-8标题翻译），6月9日发布时启用

### 保留（未删除）
- `articles/article-8.html`：文章文件保留，暂不发布
- `wechat/article-8-wechat.html`：微信图文版保留，暂不发布

---

## 2026-06-09 #1 — 6月9日每日更新

### 新增
- 6月9日新闻10条 + 头条（苹果WWDC 2026：Siri重生为AI超级应用）
- 深度文章 `article-9.html`：《WWDC 2026深度解读：苹果Siri重生，AI超级应用大战开局》（约1500字，6月10日发布，仅存文件）

### 修改
- `data/news.json`：新增6月9日数据，保留6月5-8日历史（5天）
- `data/articles.json`：恢复 article-8 元数据（正式发布）
- `index.html`：侧边栏推荐区更新（article-8 🔥、article-7 📖、article-6 📖）
- `js/i18n.js`：恢复 deep_article_1_title（article-8标题翻译启用）

---

## 2026-06-10 更新

- `data/news.json`：添加6月10日新闻数据（10条+头条：Anthropic发布Fable 5/Mythos 5），移除最早一天数据，更新`last_updated`
- `data/articles.json`：正式发布 article-9（WWDC 2026深度解读）
- `articles/article-9.html`：正式上线
- `index.html`：侧边栏推荐区更新（article-9 🔥、article-8 📖、article-7 📖）
- `js/i18n.js`：深度文章标题更新（中英文）
- `articles/article-10.html`：提前写好，待6月11日发布（Anthropic Fable 5/Mythos 5深度解读）

---
