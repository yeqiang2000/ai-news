# AI News Daily 更新日志

所有网站内容与功能的更新记录，每次更新时追加到本文档。

## 2026-07-12 · 三件套日更 · article-41

### 网站版：article-41 上线
- **主题**：《AI 电力霸权：数据中心撞穿电网天花板，AI 与国民电力的争夺战全面开启——从 xAI Memphis 断电到 HB-2401 到 AI 专用电价》
- **切角**：xAI Memphis 二期 800MW 触发 TVA 三次紧急减载 + 爱尔兰 EPA 全国暂停数据中心批准至 2027 Q2 + 弗吉尼亚 HB-2401 取消 20 年税收减免 + 关西电力全球首份 AI 专用工业电价 +19.5% 四合流 → 「算力→电力→电网→国民电价」四层传导拐点
- **规模**：中文 36.5 KB + 英文 36.4 KB，19 分钟阅读
- **累计**：articles.json 总数 39→40，sitemap.xml 84→86 URL

### 微信版：Aravind Srinivas 的 4 年
- **主题**：《Aravind Srinivas 的 4 年：从 OpenAI 实习生的一个周末想法，到 Perplexity 250 亿美元估值的答案引擎战争》
- **文件**：`wechat/wechat-2026-07-12.html`（22.6 KB，677px table，晓色原创声明）
- **公开 URL**：`https://www.coze.cn/s/Pdmb3MheZlQ/`
- **注**：子 agent 交付时未插 hero 图，主 agent 后处理补 `llm-chatbot.jpg` hero 图（贴合 Aravind 人物叙事主题）

### 头条版：AI 眼镜元年
- **主题**：《AI 眼镜元年——Meta/苹果/小米 H1 出货破亿的入口争夺战》（Ray-Ban Meta Gen4 Q2 超 iPhone 16 Plus + Apple 9/9 发布 + 小米 999 元）
- **文件**：`toutiao/toutiao-2026-07-12.md`（12.0 KB）

### 数据变更
- `data/news.json`：days=[07-12..07-08], last_updated=2026-07-12, hero=hero-2026-07-12
- `data/articles.json`：insert(0, article-41)，总数 40
- `data/used-images.json`：total_used 247→259（+12 新增，0 历史合并）
- `sitemap.xml`：6 静态 + 40 中 + 40 英 = 86 URL

### SOP 遵循度（对照 2026-07-11 修订版：4 项前置检查）
| 检查项 | 状态 |
|-------|------|
| §8.0 派发前 4 检（sonnet/schema/防线/瘦身，日程清空已废弃） | ✅ 全绿 |
| §8 第 3 步 侧边栏 grep=10 + 首条 article-41 | ✅（串行 edit_file 一次通过，新规则生效） |
| §8 第 3 步 news.json 三项一致（days[0]/hero/last_updated） | ✅ |
| §8 第 3 步 sitemap URL 数 = 6+文章×2 = 86 | ✅ |
| §8 第 7 步 bash timeout=300 | ✅ |
| §8 第 8 步 wrangler 部署 | ✅ 10 files new / 305 cached / 3.03s |
| §8 第 9 步 3 次收敛 curl | ✅ sitemap 200/xml / article 308 / Yandex 200 |
| §5 图池去重（字符串比对） | ✅ 12 张全新增无历史误合并 |
| 新规则「同一文件 edit_file 必须串行」 | ✅ 侧边栏两步串行执行，无覆盖冲突（对比 07-11 首次并发失败） |

### 学习点
- **子 agent 交付微信 HTML 时未自动插入 hero 图**（07-12 微信 `<img>=0` vs 07-11 `<img>=1`）——需要在任务卡中显式要求「微信 HTML 必须至少含 1 张 hero `<img>`（完整线上 URL）」，防止下次子 agent 遗漏
- **7/12 起「日程清空前置」正式下线**（主人 07-11 明确要求），本次执行未 `calendar_search`，节省两次工具调用

## 2026-07-11 · 三件套日更 · article-40

### 网站版：article-40 上线
- **主题**：《AI 的成本反弹：从旗舰模型企业禁令到 Anthropic 企业市场反超 OpenAI——AI 支出结构的第一次系统性重构》
- **切角**：Atlassian/Adobe/Amazon 禁用旗舰模型 + Anthropic 32% 首次反超 OpenAI 28% + Microsoft CO2 +25% + Meta Avocado 推迟 + UK 10 亿英镑主权算力 五合流 → 「按调用计费 → 岗位账单化 → 结构性成本反弹」拐点
- **规模**：中文 33.9 KB + 英文 35.6 KB，含内联 style，18 分钟阅读
- **累计**：articles.json 总数 38→39，sitemap.xml 82→84 URL

### 微信版：LeCun 十二年
- **主题**：《杨立昆的十二年：Meta 首席 AI 科学家离场与一个开源时代的谢幕》
- **文件**：`wechat/wechat-2026-07-11.html`（23.7 KB，677px table，晓色原创声明）
- **公开 URL**：`https://www.coze.cn/s/HNhuFPOeSzo/`

### 头条版：NYT vs OpenAI
- **主题**：《纽约时报 vs OpenAI 制裁动议——2000 万条对话日志「消失」的疑云》
- **文件**：`toutiao/toutiao-2026-07-11.md`（12.3 KB）

### 数据变更
- `data/news.json`：days=[07-11..07-07], last_updated=2026-07-11, hero=hero-2026-07-11
- `data/articles.json`：insert(0, article-40)，总数 39
- `data/used-images.json`：total_used 236→247（+11 新增，0 历史合并）
- `data/image-pool.json`：**遗留问题已修复** — 337 张相对路径 url 统一 normalize 为完整 URL，与 used-images.json 格式完全对齐，图池去重字符串比对恢复正常
- `sitemap.xml`：6 静态 + 39 中 + 39 英 = 84 URL

### SOP 遵循度（对照 2026-07-09 修订版）
| 检查项 | 状态 |
|-------|------|
| §11.1 手动触发日清空日程 (count=0) | ✅ |
| §8.0 派发前 5 检（sonnet/schema/防线/瘦身/日程） | ✅ 全绿 |
| §8 第 3 步 侧边栏 grep=10 + 首条 article-40 | ✅（并发 edit 时首次失败，改串行后成功） |
| §8 第 3 步 news.json 三项一致（days[0]/hero/last_updated） | ✅ |
| §8 第 3 步 sitemap URL 数 = 6+文章×2 = 84 | ✅ |
| §8 第 7 步 bash timeout=300 | ✅ |
| §8 第 8 步 wrangler 部署 | ✅ 13 files new / 554 cached / 3.58s |
| §8 第 9 步 3 次收敛 curl | ✅ sitemap 200 / article 308 / Yandex 302 |
| §5 图池去重（字符串比对） | ✅ 格式修复后 236→247 无历史误合并 |

### Git & 部署
- commit `169eb05`（10 files, 3134 insertions, 505 deletions）
- 部署 `https://2852541c.ainewsdaily.pages.dev`
- 前一版 baseline: `e7b5d84`（07-10 CHANGELOG）→ `e6508ee`（07-10 数据）

### 学习点
- **并发 edit_file 冲突（新增红线）**：同一文件同时派发 2 个 edit_file 时，第一次的写入可能未生效但工具返回成功；本次侧边栏首次并发插入 article-40 + 删除 article-30 时，article-40 未写入，需要重新单独插入。修复为**串行 edit_file 同一文件的多次修改**，避免并发写冲突。

---

## 2026-07-10 · 三件套日更 · article-39


**commit**：`e6508ee feat: daily update 2026-07-10 (article-39: Agent 商业化拐点)`
**部署**：`https://448380e0.ainewsdaily.pages.dev`（12 files new / 549 cached / 3.30s）
**生产**：`https://ainewsdaily.asia`

### 三平台主题（互不重复）
- **网站（产业分析）** `article-39` 中英双语：《Agent 商业化的拐点：Cursor 40 亿 / Cognition 8 亿 / Lindy 15 亿——90 天 ARR 集体撞线的产业裂变》
- **微信（人物叙事）** `wechat-2026-07-10.html`：《Sam Altman 的 Sol 100 天 — 一场硅谷抢发文化下的信任危机》→ 公开 URL：`https://www.coze.cn/s/kS4bSlcGPo4/`
- **头条（热点趋势）** `toutiao-2026-07-10.md`：《AI 视频生成大洗牌 — Sora 3 / Veo 4 / Kling 4 三巨头 24 小时同台开火，单条 4K 视频价格暴跌 80%》

### 数据变更
- `news.json` days[0] = 2026-07-10（10 条新闻 + hero）、last_updated=2026-07-10、hero=article-39；淘汰 2026-07-05（保留最近 5 天）
- `articles.json`：insert(0, article-39)，总数 37 → 38
- `used-images.json`：total_used 228 → 236（+8 新增，policy/open_source/investment 3 张历史已用，去重合并）
- `sitemap.xml`：URL 80 → 82（+article-39 中英双语），全表 lastmod 更新，article-39/38 priority=0.9
- `index.html` 侧边栏：article-39 → article-30（10 项窗口），淘汰 article-29
- **i18n.js 未改**（本次无 UI 新增）

### 部署前 3 项强制自检（SOP §8 第 3 步）
- ✓ 侧边栏 `sidebar-article-link` 数 = 10，首条 = article-39.html
- ✓ news.json last_updated + hero + days[0] 三项一致
- ✓ sitemap URL 数 = 82（xmllint 通过）

### 线上验证（3 次 curl，收敛）
- ✓ sitemap.xml → HTTP 200, application/xml
- ✓ article-39.html → HTTP 308（CF Pages 重定向正常）
- ✓ Yandex ping → HTTP 302

### SOP 遵循度
- ✓ §8.0 派发前 5 检（清空日程 / 锁 sonnet / 内嵌 schema / 压缩防线 / 任务卡瘦身）全绿
- ✓ §8 第 3 步 侧边栏 grep 强制自检 = 10 且首条 = article-39
- ✓ §8 第 7 步 bash `timeout=300` 用于 git clone
- ✓ §8 第 9 步 线上验证收敛为 3 次 curl，禁批量 5+
- ✓ §11.1 手动触发日日程处理前置化（calendar_search count=0）

### 遗留问题（待优化）
- ⚠️ image-pool.json URL 格式与 used-images.json 不对齐（pool 用相对路径 `img/pool/xxx.jpg`，used 用完整 URL `https://ainewsdaily.asia/img/pool/xxx.jpg`），导致子 agent 去重规则形同虚设。本次 12 张图中 3 张（policy/open_source/investment）实为历史已用，视觉重复未阻断本次发布。TODO：下次日更前统一 image-pool URL 为完整 URL 或读取时统一 normalize。


---

## 2026-07-09 08:20 · 侧边栏补丁

### 🐛 修复
- `index.html`：08:00 第二阶段合并时侧边栏漏插入 article-38，导致线上侧边栏最新一篇停留在 article-37（7/8）。08:20 补入 article-38（7/9），窗口恢复至 article-38 ~ article-29（10 篇稳定）
- **commit**：2909c33（fix: 侧边栏补入 7/9 article-38）
- **部署**：https://9f9542b0.ainewsdaily.pages.dev（wrangler 3.04s，555 files）
- **验证**：`curl "https://ainewsdaily.asia/?_=timestamp"` 已返回 article-38.html（CDN 边缘缓存约 5-10 分钟后自然刷新）

---

## 2026-07-09 · 日更三件套（网站 + 微信 + 头条）

### 🌐 网站 · article-38《去英伟达化的多米诺：DeepSeek + 智谱同日曝出自研推理芯片，一场全球 AI 算力生态的结构性裂变》
- **切角**：路透 + The Information + SambaNova 三份独家在同一周合流——DeepSeek 秘密造芯一年、智谱因 GLM-5.2 用量暴涨 27 倍启动 ASIC、SambaNova 完成 10 亿美元 F 轮估值 110 亿；英伟达 5 月至今蒸发 1 万亿美元第一次有了完整的产业解释
- **8 章节结构**：事实核对 / DeepSeek 经济逻辑 / 智谱 ASIC 路径 / SambaNova 挑战者阵营 / 英伟达估值塌陷 / 软件层去英伟达化 / CUDA 护城河松动 / 投资地图重塑
- **文件**：`articles/article-38.html`（33,541B）+ `articles/en/article-38.html`（34,294B）
- **hero 图**：`img/pool/chips-04-v5.jpg`
- **信源交叉核实（7 源）**：路透 2026-07-07 / The Information 2026-07-07 / SambaNova 官方公告 2026-07-08 / 摩根大通 SN40L+SN50 部署披露 / CNBC 2026-07-07 / Reuters 2026-07-08 / 半导体行业观察 2026-07-08

### 📱 微信 · 《王兴兴的 8 年：从浙江理工大学的 XDog 到 420 亿科创板「具身第一股」的路演日》
- **切角**：宇树科技创始人个人叙事 + IPO 招股书细节（42.02 亿募资 / 8 年 3 次濒临破产 / 1998 生 XDog 起点）
- **文件**：`wechat/wechat-2026-07-09.html`（30,527B，677px table 布局，`<div>=0`，12 tables + 36 tds + 49 border:none + 完整晓色原创声明）
- **hero 图**：`img/pool/robotics-02-v5.jpg`
- **信源（6 源）**：上交所科创板申报稿 / 21 世纪经济报道 2026-07-08 / 新华社 2026-07-08 / 澎湃新闻 2026-07-08 / 36 氪 2026-07-08 / 浙江理工大学官网

### 📰 头条 · 《中国 AI 模型攻占美国 46%：Coinbase、Airbnb、Lindy 集体倒戈，一场硅谷账单革命》
- **切角**：中国开源大模型在美 Token 份额结构性替代——OpenRouter 数据面板峰值 46%，硅谷公司集体倒戈
- **文件**：`toutiao/toutiao-2026-07-09.md`（14,131B）
- **信源（7 源）**：CNBC 2026-07-07 / 观察者网 2026-07-08 / IT之家 2026-07-08 / 华尔街见闻 2026-07-07 / 央视财经 2026-07-08 / OpenRouter 官方数据面板 / Hugging Face 官方博客

### 📊 数据文件更新
- `data/news.json`：`days[0]` 新增 2026-07-09（挤掉 2026-07-04），保留 5 天；`last_updated` = 2026-07-09 + 顶层 `hero` 同步为 `hero-2026-07-09`
- `data/articles.json`：`article-38` 入首，总计 **37 篇**
- `data/used-images.json`：本次 12 张 v5 图片全部新增，总计 **228 张**（216 → 228），`last_updated` 更新
- `index.html`：侧边栏推送——加入 7/9 article-38，移除 6/29 article-28

### 🔎 SEO · sitemap.xml
- 全量重建至 **80 URL**（6 静态 + 37 article × 2 语言）
- article-38 中英条目 hreflang zh-CN / en / x-default 三向互链
- ⚠️ **待主人手动 GSC 操作**：为 `https://ainewsdaily.asia/articles/article-38.html` 和 `https://ainewsdaily.asia/articles/en/article-38.html` 请求编入索引

---

## 2026-07-08 · 日更三件套（网站 + 微信 + 头条）

### 🌐 网站 · article-37《AI 投资的十条真相：摩根士丹利 7 月 6 日报告重塑万亿美元资本地图》
- **切角**：摩根士丹利首席美股策略师 Michael Wilson 团队 2026-07-06 发布《AI: 十条投资真相》报告，10 条判断把 AI 投资从「买芯片」推向「买云」，从「性能溢价」推向「Token 效率」
- **10 章节结构**：事实核对 / 真相全景 / Token 经济（2025 全球消费翻 10 倍）/ 摩尔定律失效 / 代理时代（价值倍数 10-100 倍）/ 软件护城河重构 / $4T 全栈资本周期（2024-2027 累计）/ 中美平行架构（估值折价 15-25%）/ 治理落后 3-5 年 / 最大赢家尚未诞生
- **文件**：`articles/article-37.html`（35,439B）+ `articles/en/article-37.html`（36,005B）
- **hero 图**：`img/pool/industry-token-usage-v4.jpg`
- **信源交叉核实（5+ 源）**：格隆汇首发《AI: 十条投资真相》/ 36氪 3884786855882755 深度解读 / 21 世纪经济报道王滢专访 / Michael Wilson 2026-07 周报 / Bernstein Vera Rubin NVL72 BOM 数据

### 📱 微信 · 《李开复走访 200 位 CEO 后：「一号位 AI」发布会背后的中国版 Palantir 路径》
- **切角**：李开复亲自走访 200 位 CEO 素材，零一万物「一号位 AI」发布会推出老板/销冠/投资官三款产品
- **产品定价**：老板 AI 50 万/年 · 销冠 AI 15 万/年 · 投资官 AI 25 万/年
- **内部效果**：订单额 5 倍 / 商机转化率 2 倍
- **文件**：`wechat/wechat-2026-07-08.html`（29,009B，677px table 布局，`<div>=0`，`border:none=47` + `border="0"=12`）
- **信源**：白鲸实验室 2026-07-07 现场报道 / 万策 AI 官方通稿 / 三款产品定价卡片 / 零一万物内部数据 / 200 位 CEO 走访调研

### 📰 头条 · 《谷歌 Gemini 3.5 Pro 定档 7/17 精准截胡：200 万 Tokens + 深度思考模式 + 编码反超 Claude》
- **切角**：Gemini 3.5 Pro 泄露→延期→上下文军备升级→推理模式成大模型新标配，7/17 发布节点前的抢发窗口热点
- **核心爆点**：200 万 Tokens 上下文 / 新增「深度思考」推理模式 / 编码任务声称优于 Claude Fable 5 High
- **文件**：`toutiao/toutiao-2026-07-08.md`（14,170B）
- **信源**：凤凰网 2026-07-07 / IT之家 973-334 / 36氪 3884084059123976 / 新智元/新浪财经 2026-06-20 / CSDN blog 161130880
- **主人预定**：2026-07-07 17:55 手动指定进头条池，本次消化

### 📊 数据文件更新
- `data/news.json`：`days[0]` 新增 2026-07-08（挤掉 2026-07-03），保留 5 天；`last_updated` = 2026-07-08 + 顶层 `hero` 同步为 `hero-2026-07-08`
- `data/articles.json`：`article-37` 入首，总计 **36 篇**
- `data/used-images.json`：本次 12 位置全部复用池中历史图（0 张新增，总仍 **216 张**），`last_updated` 更新
- `index.html`：侧边栏推送——加入 7/8 article-37，移除 6/28 article-27

### 🔎 SEO · sitemap.xml
- 全量重建至 **78 URL**（6 静态 + 36 article × 2 语言）
- article-37 中英条目 hreflang zh-CN / en / x-default 三向互链
- Yandex ping HTTP 200
- ⚠️ **待主人手动 GSC 操作**：为 `https://ainewsdaily.asia/articles/article-37.html` 和 `https://ainewsdaily.asia/articles/en/article-37.html` 请求编入索引

### 🚀 部署
- Git commit `ac75754`：`feat: daily update 2026-07-08 + article-37 摩根士丹利 AI 十条投资真相报告`（7 files changed, 1090+/-392）
- Push：`90b9b43..ac75754`
- Cloudflare 部署预览：`https://9f5ce691.ainewsdaily.pages.dev`
- 生产：`https://ainewsdaily.asia`

### ✅ 线上验证 9 项全 PASS
- sitemap 200 / 78 URL / article-37 出现 8 次（hreflang 三向）
- article-37 中英 200 / 精确字节数匹配（35,439 / 36,005）
- 中文关键词：摩根士丹利 20 / Michael Wilson 6 / Token 经济 13 / 摩尔定律 11 / $4T 6 / 云服务 5 / 代理时代 10
- 英文关键词：Morgan Stanley 18 / Michael Wilson 6 / Token Economy 12 / Moore's Law 11 / $4T 8 / cloud 15 / Agent Era 12
- 首页侧栏 article-37 已入 / article-27 已删
- hero 图 `industry-token-usage-v4.jpg` 200
- news.json last_updated=2026-07-08 / top hero=hero-2026-07-08 / days=5
- articles.json 36 篇首篇 article-37

---

## 2026-07-07 05:45 — 日更三件套（article-36 + 微信 + 头条）

**主题（三平台互不重复）**
- 网站 article-36：《AI 的隐形税：英伟达系统内存支出冲向 40%，HBM/DRAM 涨价重塑基础设施成本结构》（产业分析，芯片算力方向）
- 微信：《姚顺雨的 180 天：从加入腾讯到 Hy3 正式发布，一位 1998 年生的姚班博士如何跑通半年闭环》（人物迁徙叙事）
- 头条：《GPT-5.6 定档 7 月 7 日精准截胡 Claude：Sol/Terra/Luna 三档模型 + 输入价对折》（大模型商业战热点）

**产出文件**
- `articles/article-36.html` 31,392B（中文，含 5,698B 内联 CSS）
- `articles/en/article-36.html` 31,151B（英文全译，含 4,877B 内联 CSS）
- `wechat/wechat-2026-07-07.html` 26,138B（677px table 布局 · 12 tables + 34 tds + 47 border:none · 完整线上 URL 图 · 晓色原创声明）
- `toutiao/toutiao-2026-07-07.md` 13,172B（纯 Markdown）
- `output/news-day-20260707.json` 51,479B（10 news + hero-2026-07-07）
- `output/article-meta-20260707.json` 4,201B（14 字段 `_zh/_en` 后缀命名）

**数据文件更新**
- data/news.json：days 5 天窗口 7-7 入首（挤掉 7-2），三处强制同步：last_updated=2026-07-07 + 顶层 hero=hero-2026-07-07 + days[0].date=2026-07-07
- data/articles.json：article-36 入首，总数 35
- data/used-images.json：本次 12 张全部复用历史 v3/v4 图（0 新增），总计仍 216
- index.html：侧栏插入 article-36（7/7）+ 挤掉 article-26（6/27）
- sitemap.xml：74 → 76 URL（+ article-36 中英双语，hreflang 三向共 8 处）

**信源交叉核实（每平台 5+ 独立信源）**
- 网站：SemiAnalysis 2026-07-04/06 报告 + Bernstein Vera Rubin NVL72 BOM + TrendForce/SigmaIntell Q2 + 华尔街见闻 + 广发证券 Pu
- 微信：环球网 7-6 + 消费日报 7-7 + 腾讯官方发布会 + HuggingFace Hy3 模型卡 + 腾讯 2025/2026 财报
- 头条：36 氪 7-4/7-6 + Cursor 官方 X + Anthropic 状态页 + Terminal-Bench 2.1 leaderboard + 微博 AI 简讯

**部署与验证**
- git commit `9a0b0eb`（88edb1a..9a0b0eb，7 files changed 940+/-322）
- Cloudflare Pages 部署：https://763cccc4.ainewsdaily.pages.dev
- 线上验证 9 项全 PASS：sitemap 76 URL / article-36 hreflang 8 次 / 中英 200 精确字节 / 关键词密度（HBM 49/55、英伟达 49、NVIDIA 42、SemiAnalysis 28/22）/ 首页侧栏 article-36 入（1）+ article-26 删（0）/ hero 图 200 / news.json 三处同步 / articles.json 35 篇 / Yandex ping 200

**GSC 待办（主人手动操作）**
- 请求编入索引：
  - https://ainewsdaily.asia/articles/article-36.html
  - https://ainewsdaily.asia/articles/en/article-36.html

---

## 2026-07-06 06:30 — 日更三件套（article-35 + 微信 + 头条）

### 网站版（产业分析）
- **新增 article-35**：《Meta Compute 的临界点：AI 头部厂商第一次从算力买家转身为算力卖家》中英双语
  - 中文 32.8KB / 英文 33.0KB，深度产业分析对标 article-31/33/34
  - 切角：Meta 效仿 SpaceX Colossus 长约模式转型算力代工——Meta Compute 双轨（Llama/Muse Spark Token 计费 + GPU 集群小时租）；股价 +8.8% +1270 亿美元市值 vs CoreWeave -13.92%/Nebius -17.01%；三人算力领导组合 Janardhan+Gross+McCormick；Jefferies 内部 GPU 利用率 65%（35% 闲置）；Anthropic 与 Google 长约细节对比
  - hero：img/pool/industry-neocloud-v4.jpg
  - 信源交叉：彭博社独家 / 36氪 / 澎湃新闻 / 华尔街见闻 / implicator.ai 5+ 源
- **news.json days[0] 推 7/6**：10 条新闻（Meta Compute / John Jumper Anthropic / 阿里 7-10 卸载 Anthropic / H200 供应 / 日美投资 / LLM 定价分层 / 燃气轮机 / AI 排名 / Claude 积分 / 中国 Token 用量），保留最近 5 天，挤掉 7/1
- **articles.json 总数 34**：article-35 插入 articles[0]
- **used-images.json 216 张**（+4 unique，另 8 处复用历史 v4 图）：新增 industry-neocloud-v4 / open-source-china-v4 / investment-japan-us-v4 / blockchain-nft-ai-v3
- **sidebar**：article-35 进首位（7/6）挤掉 article-25（6/26 OpenAI 自研芯片 Jalapeño）
- **sitemap.xml 全量重建至 74 URL**：6 静态 + 34 article × 2 语言，hreflang zh-CN/en/x-default 三向各 68 个（total hreflang 204）
- **commit**：6fcb650（feat: daily update 2026-07-06 + article-35），部署 https://bbec6c65.ainewsdaily.pages.dev
- **线上验证 9 项全 PASS**：sitemap 200 / 74 URL / article-35 8 次 / 中英 200 / 关键词 Meta 114+110 / CoreWeave 35+35 / Compute 36+49 / capex 7 / Neocloud 15 / 首页侧栏 article-35 ✓ article-25 已删 / hero 图 1.99MB 200 / Yandex ping 200

### 微信版（人物叙事）
- **新增 wechat-2026-07-06.html**：《诺奖得主的二次押注：AlphaFold 之父 John Jumper 为什么离开 DeepMind 去 Anthropic》
  - 25.2KB，677px table 布局 5 tables + 52 tds + border:none 65 处（3 无空格 + 62 含空格）+ 0 div + 紫色晓色原创声明
  - 关键事实：Jumper 6-19 X 发文离职 / DeepMind 近 9 年 Hassabis 感谢转发 / AlphaFold 2 SE(3) 等变性消融 30 分中贡献 2.5 分等效数据 100 倍算力 3-4 亿美元 / Anthropic 4 亿美元收购 Coefficient Bio / Claude Science 60+ 数据库 Pro $20 起 / 用户案例 UCSF Francis + Allen Lecoq + MIT Cheeseman + Gladstone Whalen / 诺华 Vas Narasimhan 引述 12→7-8 年 8%→16%
  - 信源交叉：智享新知 / MIT 科技评论 / 财新 / zeronoise.ai / 金融界 5 源

### 头条版（热点趋势）
- **新增 toutiao-2026-07-06.md**：《Claude Code 藏 147 个中国域名黑名单，阿里 7 月 10 日全员卸载 Anthropic 全系》
  - 15.5KB 纯 Markdown，一句话结论 + 数据盘点 + 大厂横评 + 开发者建议 + 观察窗口
  - 关键事实：Claude Code 2.1.91 版本 XOR 加密 147 中国域名黑名单 / Thariq Shihipar 承认实验性 7-02 版本删除 / 阿里 7-10 全员卸载 Sonnet/Opus/Fable/Code 推荐 Qoder / 大厂横评（微软 5 月停用 / 亚马逊 2 月限制 / Google 中立 / 阿里 7-10 卸载）/ Anthropic 估值 9650 亿 ARR 300-420 亿
  - 信源交叉：都市快报 / 36氪 / 观察者网 / 凤凰网 / 电子工程专辑 5 源

---

## 2026-07-05 07:05 — 日更三件套（article-34 + 微信 + 头条）

### 网站版（产业分析）
- **新增 article-34**：《Anthropic 的临界点：Claude Fable 5 剥离订阅，AI 旗舰模型定价范式回归按量计费》中英双语
  - 中文 31.1KB / 英文 32.7KB，深度产业分析对标 article-31 OpenAI 成本腰斩 / article-33 微软代理战争
  - 切角：Anthropic 官宣 7/7 起把 Claude Fable 5 从多款订阅套餐里剥离改按积分计费，与 7/2 OpenAI 推理成本腰斩形成对照——同一时点两种截然相反的定价走向，头部大模型订阅经济能否跑通
  - hero：img/pool/llm-pricing-tier-v4.jpg（news-1 同源）
- **news.json days[0] 推 7/5**：10 条新闻（Anthropic Fable 5 / 软银 SB Neo 3.39万亿 / Claude 积分改革 / 中国 Token 用量 9 周超美 46.7 万亿 / AI 福利政策 / 燃气轮机短缺 / AI 排行榜 / GPU 机架 / H200 供应 / 人形机器人实验室），保留最近 5 天，挤掉 6/30
- **articles.json 总数 33**：article-34 插入 articles[0]
- **used-images.json 212 张**（+10 unique）：全部 batch4 v4 后缀图（llm-pricing-tier-v4 / industry-neocloud-v4 / llm-usage-credit-v4 / industry-token-usage-v4 / policy-ai-benefit-v4 / energy-gas-turbine-v4 / industry-ai-ranking-v4 / data-center-gpu-rack-v4 / chips-nvidia-h200-v4 / robotics-humanoid-lab-v4），0 Unsplash 外链
- **sidebar**：article-34 进首位（7/5）挤掉 article-24（6/25）
- **sitemap.xml 全量重建至 72 URL**：6 静态 + 33 article × 2 语言，hreflang zh-CN/en/x-default 三向各 66 个
- **commit**：33efe60（feat: daily update 2026-07-05 + article-34），部署 https://f15d79fa.ainewsdaily.pages.dev
- **线上验证 10 项全 PASS**：sitemap 200 / 72 URL / article-34 8 次 / 中英 200 / 关键词 Anthropic 56+54 / Claude 23+23 / Fable 50+49 / 订阅 50 / subscription 40 / 首页侧栏 article-34 ✓ article-24 已删 / hero 图 1.13MB 200 / Yandex ping 202

### 微信版（人物+事件叙事）
- **新增 wechat-2026-07-05.html**（20.3KB）
- 主题：《软银 3.39 万亿豪赌 SB Neo：10 吉瓦 AI 数据中心背后的孙正义式押注》
- 677px table 布局 + 全表 border 声明 51 处 + 晓色原创声明 + 全线上 URL 图片 + 0 相对路径 + 0 div 布局
- hero：img/pool/industry-neocloud-v4.jpg（复用 news-2）

### 头条版（热点趋势解读）
- **新增 toutiao-2026-07-05.md**（17.8KB）
- 主题：《中国 Token 用量 9 周超美 46.7 万亿 + DeepSeek V4 峰谷定价——AI 消费市场结构性变局》
- 纯 Markdown 短段落 + 关键数字加粗 + 0 HTML + 0 emoji

---

## 2026-07-04 07:25 — 日更三件套（article-33 + 微信 + 头条）

### 网站版（产业分析）
- **新增 article-33**：《微软的代理战争：Copilot 整合 + 付费 Autopilot 上线，$37B 年化背后的商业化拐点》中英双语
  - 中文 33.5KB / 英文 35.1KB，含完整 deep-article 内联 style 块
  - 切角：Build 2026 之后 30 天，微软把 Copilot Chat + Cowork + Code + Autopilots 整合成矩阵，Scout 成为首个真正付费的 Autopilot，FY26 Q3 AI 年化收入 $37B（+123% YoY）——本文横评微软/OpenAI/Google 三家代理商业化路径
  - 6 项事实核查：Build 2026 时间 6-2/4 + Wave 3 3-9 发布 4-22 GA / Copilot Chat 免费 + M365 Copilot $30 + Cowork $30+$0.01/credit + Copilot Studio $200/25k credits + E7 Frontier Suite $99 + Agent 365 $15 / Scout 首个 GA Autopilot + Entra ID 身份 + 1400+ 连接器 + MCP / M365 Copilot 席位破 2000 万渗透率约 3% + Copilot Studio 230k 组织 + 90% Fortune 500 / OpenAI Plus $20 Pro $200 Business $20 + Gemini Enterprise $30 + Google Project Mariner 5-4 关停 / Nadella「apps to agents」+ Suleyman MAI 7 模型
  - hero：news.json days[0]，标题「微软的代理战争：Copilot 整合 + 付费 Autopilot 上线」
- **news.json days[0] 推 7/4**：10 条新闻（微软 Copilot / 阿里禁用 Claude / 可灵 30 亿 / Anthropic 三星 / 英伟达算力贷 / Meta 算力对外 / ElevenLabs 220 亿 / DeepSeek V4 峰谷定价 / Together AI C 轮 / H1 融资 3076 亿），保留最近 5 天，挤掉 6/29
- **articles.json 总数 32**：article-33 插入 articles[0]
- **used-images.json 202 张**（+10 unique）：全部从图片池取（startup-product-launch-v3 / blockchain-zk-proof-v3 / startup-pitch-v3 / startup-unicorn-v3 / investment-portfolio-v3 / network-satellite / education-adaptive / blockchain-defi-v3 / startup-yc-batch-v3 / autonomous-drone-v3），0 Unsplash 外链
- **sidebar**：article-33 进首位（7/4）挤掉 article-23（6/24）
- **sitemap.xml 全量重建至 70 URL**：6 静态 + 32 article × 2 语言，近 7 天 priority=0.9，更旧 priority=0.8，hreflang zh-CN/en/x-default 三向各 64 个
- **commit**：f9e9868（7 files / +1094 / -336），部署 https://135c9cc4.ainewsdaily.pages.dev

### 微信版（人物/事件叙事）
- **新增 wechat-2026-07-04.html**（20.7KB）
- 主题：《阿里巴巴全面禁用 Claude —— 从 4-2 客户端黑名单到 6-10 参议院指控的完整时间轴》
- 三条硬事实构成完整叙事弧线：
  1. 4-2 Claude Code 2.1.91 内置中国时区+147 域名黑名单检测机制
  2. 6-10 Anthropic 向美参议院银行委员会指控阿里 25000 虚假账号 2800 万次蒸馏调用
  3. 7-3 阿里发出内部通知，7-10 起全面禁用 Anthropic Claude 全线产品
- 677px table 布局 + 全表 border:none 49 处 + 晓色原创声明 + 全线上 URL 图片 + 0 相对路径 + 0 div 布局
- hero：img/pool/blockchain-zk-proof-v3.jpg（复用 news-2）

### 头条版（热点趋势解读）
- **新增 toutiao-2026-07-04.md**（17.9KB）
- 主题：《AI 融资 H1 复盘：3076.82 亿元 +148% YoY 背后的三层金字塔》
- IT 桔子 7-3 数据：H1 总额 3076.82 亿元（+148% YoY）/ 1284 起融资事件 / 1600 家机构入场
- 市场结构：TOP 30 项目 + 腰部 200 家 + 长尾 1000+ 家三层地形
- 与微信/网站主题完全错开（宏观数据+趋势解读方向）

### 第二阶段执行状态
- ✅ 6 文件产出验证全 PASS（中文双引号真检查 0 / border 覆盖 100% / 关键词覆盖 39+36 / deep-article 3 处 / JSON 结构正确）
- ✅ 三个 JSON 更新（news.json 7/4 入 days[0] / articles.json 32 / used-images.json 202）
- ✅ index.html 侧边栏更新
- ✅ sitemap.xml 全量重建 70 URL
- ✅ git commit f9e9868 + push 成功
- ✅ Cloudflare wrangler 部署成功（13/322 新文件 / 3.77 秒）
- ✅ 线上验证 10 项全 PASS
- ✅ Yandex ping 200
- ⚠️ Google/Bing 由主人手动在 GSC/Bing Webmaster 提交

### 交付
- 网站：https://135c9cc4.ainewsdaily.pages.dev（+ 主域名 https://ainewsdaily.asia）
- 微信 HTML：`wechat/wechat-2026-07-04.html` → 通过 file_to_url 转 https 公网 URL 给主人
- 头条 Markdown：`toutiao/toutiao-2026-07-04.md` → computer:// 协议给主人

---

## 2026-07-03 07:55 — 日更三件套（article-32 + 微信 + 头条）

### 网站版（产业分析）
- **新增 article-32**：《AI 医疗产业化拐点：从 207 款获批到临床协作者的深水区》中英双语
  - 中文 29.9KB / 英文 32.5KB，含完整 deep-article 内联 style 块
  - 切角：2026 年 7 月第一周三条 AI 医疗信号同时落地（NMPA 累计批准 207 款 AI 医疗器械 / 华为盘古医疗 3.0 部署 12 家三甲 / 英矽智能与武田签 6 亿美元合作），首次同时打通「审批端 + 临床端 + 支付端」，八大角度拆解产业拐点
  - 8 大维度：事实核对 / 审批数据 / 支付通道 / 临床协作 / 大模型医疗底座 / AI 制药 / 伦理与责任 / 下一个 12 个月观察窗口
  - hero：news.json days[0]，标题「AI 医疗产业化拐点：从 207 款获批到临床协作者的深水区」
- **news.json days[0] 推 7/3**：10 条新闻（孙天祥百度 / 英伟达 Vera Rubin / Anthropic 三星 / Meta 算力 / 快手可灵 / 英矽武田 / 优必选 U1 / GLM-5.2 744B / 学而思 T6 / AI 医疗 207 款），保留最近 5 天，挤掉 6/28
- **articles.json 总数 31**：article-32 插入 articles[0]
- **used-images.json 192 张**（+11）：全部从图片池取（healthcare-telemedicine / education-ai-tutor-v3 / energy-battery-ai / blockchain-ai-contract / energy-carbon / vr-ar-gaming / vr-ar-surgery / robotics-surgery-v3 / blockchain-carbon / education-vr-classroom / autonomous-ship），0 Unsplash 外链
- **sidebar**：article-32 进首位（7/3）挤掉 article-22（6/23）
- **sitemap.xml 全量重建至 68 URL**：6 静态 + 31 article × 2 语言，近 7 天 priority=0.9，更旧 priority=0.8，hreflang zh-CN/en/x-default 三向各 62 个
- **commit**：82b0641（7 files / +1024 / -298），部署 https://9142d6c7.ainewsdaily.pages.dev

### 微信版（人物迁徙叙事 · 命中选题池 7-2 预定）
- **文件**：wechat/wechat-2026-07-03.html（21.7KB，677px table 布局，54 处 border:none，0 相对路径，含晓色原创声明）
- **主题**：《孙天祥加盟百度：从 MOSS 到基础模型研发部——一个青年学者的技术押注与产业迁徙》
- **6 项事实全部 search_web 落地**：
  1. 孙天祥 1997 生 / 复旦计算机博士 2019-2024 / 导师邱锡鹏+黄萱菁 / Google Scholar 4200+ 引用（代表论文 CoLAKE 被 ERNIE 3.0 采用）
  2. MOSS 主开发者 / 160 亿参数 / 2023-02-20 发布 / 国内首个类 ChatGPT 开源对话大模型
  3. 加盟时间 2026-07-01（每日经济新闻/晚点/科创板日报/36 氪/新黄河 5 源交叉核实）
  4. 新岗位：百度基础模型研发部（BMU）负责人 + 模型委员会（BMC）成员 / 接替 2025-11 上任的吴甜 / CTO 王海峰统筹
  5. 战略背景：2025-11 拆分 TPG 新设 BMU+AMU / 2026-01-22 文心 5.0 2.4 万亿参数原生全模态 / 2026-06 Unlimited OCR 破 1 万 Star
  6. 对比案例：姚顺雨（腾讯 2025-12）/ 杨植麟（月之暗面 CEO）/ Meta 挖角华人 8 人 / Manus 肖弘任 Meta 副总裁

### 头条版（热点趋势解读）
- **文件**：toutiao/toutiao-2026-07-03.md（12.9KB）
- **主题**：《AI 教育从「漫灌」到「滴灌」——学而思 T6、长沙学校 AI 自主学与《AI+教育》行动计划三重信号》
- **切角**：学而思 T6 学习机 + 长沙学校 AI 自主学系统 + 政策端《AI+教育》行动计划三重信号同一周落地，AI 教育从粗放式全班灌输走向个体自适应

### SEO 与线上验证
- sitemap.xml HTTP 200 / application/xml / 68 URL / article-32 出现 8 次
- 中文文章 AI 医疗 32 次 / 207 款 14 次 / 盘古医疗 14 次 / 英矽智能 11 次 / deep-article CSS 3 处
- 英文文章 healthcare 21 次 / NMPA 12 次 / Insilico 15 次
- 首页 hero 已切「AI 医疗」/ 侧边栏 article-32 已入
- 微信 hero 图 education-ai-tutor-v3.jpg 线上 HTTP/2 200 / Yandex ping 302 成功
- ⚠️ GSC 手动提交 article-32 中英 URL 请求编入索引（沿用主人手动流程）

---

## 2026-07-02 08:15 — 日更三件套（article-31 + 微信 + 头条）

### 网站版（产业分析，命中选题池 7-1 预定）
- **新增 article-31**：《OpenAI 推理成本腰斩：AI 应用普及的产业拐点已至》中英双语
  - 中文 28.3KB / 英文 27.7KB，含完整 deep-article 内联 style 块
  - 切角：6-30 The Information 首发披露 OpenAI 通过纯软件层优化（服务器利用率 + KV Cache 复用 + 量化压缩 + 动态批量）把推理成本降 50%+，8 大维度产业分析（事实核对/产业拐点/开发者生态/SaaS 商业模式/云厂商竞争/开源阵营/终端应用/风险）
  - 数据点：GPT-5.6 Terra 定价直接砍半、ChatGPT 匿名访客几百块 GPU 兜住、Anthropic 推理毛利率 18 个月从 -94% → 60%+、中国日均 token 24 个月从 1000 亿 → 140 万亿（1000×）
  - hero：news.json days[0]，标题「OpenAI 推理成本腰斩：AI 应用普及的产业拐点已至」
- **news.json days[0] 推 7/2**：10 条新闻（OpenAI 推理成本 / GPT-5.6 三档 / Grok 4.5 / DeepSeek V4 峰谷 / DSpark / 微软 MAI / Anthropic S-1 / Meta / 具身智能 / 北京 AI 科研），保留最近 5 天，挤掉 6/27
- **articles.json 总数 30**：article-31 插入 articles[0]
- **used-images.json 181 张**（+14）：全部从图片池取，0 Unsplash 外链
- **sidebar**：article-31 进首位（7/2）挤掉 article-21（6/22）
- **sitemap.xml 全量重建至 66 URL**：6 静态 + 30 article × 2 语言，近 7 天 priority=0.9，更旧 priority=0.8，hreflang zh-CN/en/x-default 三向各 60 个
- **commit**：f8ac073（7 files / +1038 / -314），部署 https://4cb84f62.ainewsdaily.pages.dev

### 微信版（人物 / 事件叙事）
- `wechat/wechat-2026-07-02.html`（19.0KB，677px table 布局）
- 标题：《马斯克的 xAI 月更承诺：Grok 4.5 内测与「每月一款全新大模型」的疯狂节奏》
- 切角：6-28 深夜 X 推文 → 马斯克三重焦虑（估值/算力/FSD 迭代）→ 月更承诺的技术可行性
- 合规：5 table + 46 td 全 `border:none` / 图片用线上 URL（0 相对路径）/ 含晓色原创声明

### 头条版（热点趋势）
- `toutiao/toutiao-2026-07-02.md`（11.0KB Markdown）
- 标题：《AI 分场景定价新纪元：GPT-5.6 三档、DeepSeek 峰谷、Anthropic 90% 缓存》
- 验证项：GPT-5.6 三档定价 Sol $5/$30、Terra $2.5/$15、Luna $1/$6（每 M token）/ DeepSeek V4 首创峰谷定价 / Anthropic 90% 缓存折扣 + 1M 平价 + Batch 50% 折扣 / Google Gemini 3.5 Flash 思考等级 4 档

### 三主题互不重复
- 网站：OpenAI 推理成本产业分析
- 微信：马斯克月更承诺人物叙事
- 头条：全行业分场景定价趋势解读

### 线上验证
- sitemap 200 / 66 URL / article-31 出现 8 次
- article-31 中英跟随 CF Pages 308 重定向后 28990 B / 28375 B ✓
- 首页 hero 已切「OpenAI 推理成本腰斩」/ 侧边栏 article-31 已入 ✓
- 微信图片 startup-product-launch-v3.jpg 线上 200 ✓
- Yandex ping 200 ✓

### 选题池归档
- 网站版待用区「OpenAI 推理成本腰斩（产业分析）」已用于 article-31，移到「已使用归档」

---

## 2026-07-01 07:00 — 日更三件套（article-30 + 微信 + 头条）

### 网站版（产业分析）
- **新增 article-30**：《国产 AI 算力闭环时刻：美团 1.6 万亿 LongCat-2.0 全栈国产芯片训练 + 寒武纪同日万亿市值》中英双语
  - 中文 22.6KB / 英文 23.8KB，含完整 deep-article 内联 style 块
  - 切角：LongCat-2.0（1.6T MoE / 5 万张国产卡 / 35T token / OpenRouter 全球前三）+ 寒武纪同日市值破万亿 → 硬件、模型、生态三层国产化齐声落地
  - hero：news.json days[0]，标题「国产 AI 算力闭环时刻：美团 1.6 万亿 LongCat-2.0 全栈国产芯片训练 + 寒武纪同日万亿市值」
- **news.json days[0] 推 7/1**：10 条新闻覆盖大模型/芯片算力/产业/开源/投融资/招商等方向，保留最近 5 天
- **sidebar**：article-30 进首位（7/1）挤掉 article-20（6/21）
- **sitemap.xml 全量重建至 64 URL**：6 静态 + 29 article × 2 语言，近 7 天 priority=0.9，更旧 priority=0.8
- **commit**：6f90fcb，部署 https://07343849.ainewsdaily.pages.dev

### 微信版（人物 / 事件叙事）
- `wechat/wechat-2026-07-01.html`（18.7KB，677px table 布局）
- 标题：《7 亿美元归零的开源信仰 —— 贾扬清离开英伟达的 1 年》
- 时间线：2025/4 NVIDIA 7 亿美元收购 Lepton AI 20 人团队 → 2026 Q1 开源承诺被搁置 → 6/9 加入 Hyperbolic Labs 任顾问
- 合规：5 table + 47 td 全 `border:none` / 全部图片用线上 URL（0 相对路径）/ 含晓色原创声明

### 头条版（热点趋势）
- `toutiao/toutiao-2026-07-01.md`（8.6KB Markdown）
- 标题：《5 天 1 万 Star，3B 模型反超 DeepSeek —— 百度 Unlimited OCR 把开源 OCR 重新做了一遍》
- 验证项：模型名 `baidu/Unlimited-OCR` / GitHub `github.com/baidu/Unlimited-OCR` / 6-22 发布、6-25 开源、5 天破万 Star / OmniDocBench v1.6 综合 93.92% SOTA / 长输出比 DeepSeek OCR 快 35% / R-SWA 机制 KV Cache 恒定 128 token

### 三主题互不重复
- 网站：国产 AI 算力闭环（产业分析） ≠ 微信：贾扬清离开英伟达（人物叙事） ≠ 头条：百度 OCR 开源破圈（热点解读）

### 选题池
- 头条版命中选题池预定（昨日主人「留着，走头条版」），使用后从待用区归档

---

## 2026-06-30 06:25 — 日更三件套（article-29 + 微信 + 头条）

### 网站版（产业分析）
- **新增 article-29**：《推理效率革命：从堆算力到拼算法，AI 产业的范式拐点》中英双语
  - 中文 20KB / 英文 22KB，含完整 deep-article 内联 style 块
  - 切角：DSpark 单用户提速 85% + Coinbase 切换国产开源 AI 支出砍半 → AI 产业从「堆算力」转向「拼算法」的范式拐点
  - hero：news.json days[0]，标题「推理效率革命：DSpark 单用户提速 85%，AI 产业从堆算力转向拼算法」
- **news.json days[0] 推 6/30**：10 条新闻覆盖大模型/芯片算力/产业/开源/投融资/Robotaxi/量子等方向，保留最近 5 天
- **sidebar**：article-29 进首位（6/30）挤掉 article-18（6/19）
- **sitemap.xml 全量重建至 62 URL**：6 静态 + 28 article × 2 语言，近 7 天 priority=0.9（含 6/24~6/30 共 7 天 14 条 article），更旧 priority=0.8

### 微信版（人物 / 事件叙事）
- `wechat/wechat-2026-06-30.html`（17KB，677px table 布局）
- 标题：《8 台机器人在工厂打工 6 天，没人请假没人翘班——智元精灵 G2 的「上岗体检」》
- 关键数据：54h 累计作业 / 14925 件订单 / 55107 次抓取 / 99.987% 成功率
- 人物：智元副总裁彭思崴 + 龙旗智能制造负责人李龙
- 合规：52 处 border:none / 5 处 border-collapse / 6 处紫色左边框 / 含晓色原创声明

### 头条版（热点趋势）
- `toutiao/toutiao-2026-06-30.md`（7KB Markdown）
- 标题：《谷歌都缺算力了：AI 算力饥荒下，硅谷正在给客户「发配额」》
- 切角：Google 限 Meta 算力为引爆点，硅谷算力配额制趋势

### 三主题互不重复
- 网站（产业）：推理效率范式拐点
- 微信（人物事件）：智元机器人产线上岗体检
- 头条（趋势）：硅谷算力配额制饥荒
- 三主题全部规避近 7 天的网站/微信/头条已写主题

### 图片管理
- 13 张全部使用 `img/pool/` 本地图（子 agent 执行 os.path.exists 校验 0 失败）
- 落实 6/29 紧急修复经验：build 脚本配图前必须本地存在性校验

### Git + 部署
- commit `20fa342`（feat: daily update 2026-06-30 + article-29）
- 7 个文件变更：index.html / data/news.json / data/articles.json / data/used-images.json / sitemap.xml / articles/article-29.html / articles/en/article-29.html
- Cloudflare wrangler 部署：preview `https://5b36e33e.ainewsdaily.pages.dev`
- 线上验证全 PASS：sitemap 62 URL ✓ / article-29 中英 200 ✓ / articles.json CDN total 28 ✓ / news.json CDN days[0] 6/30 ✓ / 6 张图抽测 200 ✓ / Yandex ping 200 ✓

### 主人后续手动操作
- GSC 提交 article-29 中英文 URL 索引（zh + en 两条）
- GSC 重新提交 sitemap.xml（已包含 article-29）

---

## 2026-06-29 05:02 — 修复主页图片大量未加载（紧急修复）

### 背景
主人反馈「主页大量图片未能加载」。排查发现：
- **news.json 8 张缺失**：6/29 build 脚本配图时写入了图片池中并不存在的文件名（chips-foundry / chips-packaging / chips-manufacturing / autonomous-driving / data-center-space / data-center-cluster / industry-statistics / ai-models-update）
- **articles.json 8 张外链**：article-1 ~ article-8 历史老文章一直在用 `picsum.photos/800/450?random=...` 占位图，国内访问加载缓慢甚至失败

### 修复方案
全部 16 张图替换为图片池中真实存在的本地资源（按主题匹配）：

**news.json（6/29 当日 10 条 news，8 张）**
| idx | 原图（缺失）| 新图 |
|---|---|---|
| [1] | chips-foundry | industry-robot-arm |
| [2] | data-center-space | network-satellite |
| [3] | chips-packaging | chip-photonic |
| [4] | chips-manufacturing | investment-mergers-v3 |
| [5] | autonomous-driving | autonomous-drone-v3 |
| [7] | data-center-cluster | datacenter-cooling |
| [8] | industry-statistics | industry-predictive |
| [9] | ai-models-update | llm-finetune-v3 |

**articles.json（历史老文章 article-1~8，8 张）**
| id | 主题 | 新图 |
|---|---|---|
| article-1 | 英伟达 GTC AI 芯片 | datacenter-green |
| article-2 | LLM 竞赛 | llm-agentic-ai |
| article-3 | DeepSeek 融资 | investment-portfolio-v3 |
| article-4 | Cosmos 3 物理 AI | robotics-factory-v3 |
| article-5 | Anthropic 自我改进 | policy-eu-ai-act-v3 |
| article-6 | 特斯拉 Robotaxi | autonomous-robotaxi-v3 |
| article-7 | 国家入股 AI | blockchain-ai-contract |
| article-8 | AI 万亿 IPO | investment-ai-fund-v3 |

### 部署
- Commit: `72e0fb6` (fix: 修复主页图片加载)
- Preview: https://f4c112cf.ainewsdaily.pages.dev
- 线上验证：12 张抽测图全部 200 ✓ / news.json CDN 旧路径 0 残留 ✓ / articles.json picsum 0 残留 ✓

### 经验沉淀（已写入 TOOLS.md）
- **edit_file 并发写同一文件存在竞态**：多个 edit_file 在同一 tool block 并行调用同一文件时，只有首个能成功落盘，其他虽返回 "Replaced occurrences: 1" 但实际未写入。同文件多处修改必须串行调用。
- **build 脚本配图必须先校验图存在**：build-{date}.py 写 image 字段前应 `os.path.exists(img)` 兜底，未来加入 SOP 校验。

---

## 2026-06-29 04:45 — 6/29 当日更新（三件套：网站 + 微信 + 头条）

### Hero
- 先进封装产业链全面爆发：日月光净利 +58%、CoWoS 缺口 20%、长电科技 4 天 3 涨停（产业）

### News（10 条）
1. 高通 39 亿美元收购 Modular，Chris Lattner 领衔挑战 CUDA 护城河（投融资）
2. 三星 1000 万亿韩元押注半导体：HBM 与代工三线同推（投融资）
3. 北京太空算力大会启幕：把数据中心搬上轨道（产业）
4. 日月光 Q2 净利同比 +58%，CoWoS 仍缺口 20-25%（产业）
5. 长电科技获 78 亿元临港新厂投资，4 天 3 个涨停（产业）
6. 比亚迪发布璇玑 A3 智驾平台：单芯片 1024 TOPS、L4 城区上路（自动驾驶）
7. Momenta 通过港交所聆讯，预计 7 月 IPO 融资 12 亿美元（投融资）
8. 国内首个 1000P 智算中心在合肥点亮：单集群 5 万张昇腾 910C（算力）
9. 中国电子行业 1-5 月利润同比 +103.9%，半导体设备贡献近半增量（产业）
10. Anthropic 内部预告 Claude 4.5 三模型矩阵：Opus/Sonnet/Haiku 月内更新（大模型）

### 深度文章（article-28）
- **中文**：《先进封装的逆袭：从产业链末端到 AI 芯片核心价值层》（12 分钟）
- **英文**：《The Packaging Renaissance: From Backend Support to AI Chip Core Value Layer》(12 min)
- 主题：日月光净利 +58% / CoWoS 缺口 20% / 长电科技 78 亿临港 / HBM 三年翻三倍 / 台陆日韩三梯队扩产
- 六节结构：技术升维 / 财务质变 / 三梯队扩产 / 供需缺口 / 产业链全景 / 风险与下半场观察

### 微信公众号（不上传 Git，本地交付）
- **wechat-2026-06-29.html**：高通 39 亿押注 Lattner / Mojo（Chris Lattner 履历叙事 + Zuckerberg 站台）
- 677px table 布局，所有 table/td 显式 border:none 通过合规验证
- 含数据卡片三列 + 引用块 + 晓色原创声明模块

### 头条（不上传 Git，本地交付）
- **toutiao-2026-06-29.md**：三星 1000 万亿韩元 + 北京太空算力大会同步开幕，一日双事件趋势解读

### SEO 同步动作
- sitemap.xml: 58 → 60 URL（+article-28 zh+en，hreflang 三向互链）
- index.html 侧边栏：article-28 进首位，挤掉 article-17
- used-images.json: 141 → 143（+chips-tpu-v3.jpg / industry-digital-twin.jpg）
- articles.json: 26 → 27 篇元数据
- Yandex ping HTTP 200 ✓
- GSC 待主人手动提交：article-28 中英版 + sitemap

### 工程债还
- 新写 `scripts/update-sitemap.py`（46 行，articles.json 单一事实源全量重建，已 .gitignore）
- 新写 `scripts/build-2026-06-29.py`（当日数据构造脚本，已 .gitignore）

### Commit
- `417acb1` feat: daily update 2026-06-29 + article-28 advanced packaging

---

## 2026-06-27 07:00 — 6/27 当日更新

### Hero
- 自研芯片浪潮重塑 AI 算力版图：从 OpenAI Jalapeño 到全球 ASIC 战国时代（芯片算力）

### News（10 条）
1. OpenAI 与博通联合发布首颗自研 AI 推理芯片 Jalapeño，9 个月完成流片（芯片算力）
2. 黄仁勋股东大会：Blackwell 是「推理之王」，Vera CPU 专属智能体（芯片算力）
3. DeepSeek 完成 510 亿元 A 轮融资后官宣全员扩招，所有部门规模翻倍（投融资）
4. Z.ai 发布 GLM-5.2 登顶开源模型榜首，IndexShare 架构让百万上下文成本下降 2.9 倍（开源动态）
5. 招商银行股东大会披露大模型账本：日均 330 亿 Token，AI 与人力工时比逼近 1:9（AI 应用）
6. 谷歌 Gemini 3.5 Pro 推迟至 7 月，OpenAI GPT-5.6 同步延期（大模型）
7. 字节豆包专业版正式上线，三级订阅最高 5088 元/年（AI 应用）
8. Anthropic 换联合创始人 Tom Brown 对接美政府，Fable 5 解禁谈判重启（政策监管）
9. 美团开源 VitaBench 2.0：首个面向长期动态用户建模的智能体评测基准（开源动态）
10. 链博会与 MWC 上海同台亮相具身智能：2026 年国内人形机器人交付目标 5 万台（AI 应用）

### Article（已预写复用）
- `article-26.html` 中英文（开源大模型的中国新平衡：GLM-5.2 登顶与 DeepSeek 510 亿的产业共振）—— 6/26 预写期已上线

### 流程
- 按 SOP 第 1.3 节"取消预写"规则，本次只合并 6/27 内容，**不再为 6/28 预写**
- news.json：days[0]=6/27（新插入），保留最近 5 天
- 图片：11 张全部从图片池本地分配（预写期已 used）
- 部署：commit `cb1c95c`，预览 https://1e7931f2.ainewsdaily.pages.dev

---

## 2026-06-26 06:35 — 图片池 batch3 补图

### 新增
- `data/image-pool.json`：池容量 150 → 184（+34 张 Agnes v3 图片）
- `img/pool/*-v3.jpg`：34 张新图，覆盖弱类别
  - startup ×5（pitch/yc-batch/unicorn/product-launch/cofounders）
  - llm ×5（multimodal/finetune/context-window/rag/evaluation）
  - investment ×4（ai-fund/ipo/mergers/portfolio）
  - opensource ×4（github-stars/huggingface/contribution/foundation）
  - robotics ×3（humanoid/factory/surgery）
  - autonomous ×3（robotaxi/truck/drone）
  - blockchain ×3（defi/nft-ai/zk-proof）
  - chips ×2（tpu/edge-ai，wafer 失败待重跑）
  - policy ×1（eu-ai-act，export-control 失败待重跑）
  - healthcare ×2（imaging/genomics）
  - education ×2（ai-tutor/coding-camp）

### 失败 / 待办
- 2 张图生成失败（HTTP 返回空内容，0 字节文件已清理）：
  - `chips-wafer-v3.jpg`
  - `policy-export-control-v3.jpg`
- 失败率 5.6%（≤ 15% 阈值），下次补图时重跑失败项即可

### 部署
- Git commit: `749958c`
- Cloudflare 部署：`https://36e2de39.ainewsdaily.pages.dev` → ainewsdaily.asia

### 当前余量
- 池总量 184 张，已用 121 张，**可用余量 63 张**（其中 v3 新批次 34 张全部未使用）

---

## 2026-06-27 — 6月27日每日更新（预写）

### 新增
- 6月27日新闻10条 + hero（开源大模型中国新平衡为主题）
- 深度文章 `article-26.html`：《开源大模型的中国新平衡：GLM-5.2登顶与DeepSeek 510亿的产业共振》（产业分析方向）
- `articles/en/article-26.html`：英文版同步上线
- `articles/en/article-24.html`：补 article-24 标准命名英文版（Agentic AI Era）
- `wechat/wechat-2026-06-27.html`：微信图文版《梁文锋的「扩招」：DeepSeek 融资 72 小时后，一封「全员招聘」邮件砸向中国 AI 圈》（人物故事方向，含原创声明，9 table/50 td 全 border:none）
- `toutiao/toutiao-2026-06-27.md`：头条版《AI Agent 走入深水区：40% 企业应用即将嵌入智能体，你的岗位还剩几年？》（热点趋势方向）
- 新闻覆盖：Jalapeño 后续报道 / 黄仁勋股东大会 / DeepSeek 扩招 / GLM-5.2 登顶 / 招商银行 330 亿 Token / Gemini 与 GPT-5.6 推迟 / 豆包专业版定价 / Anthropic Tom Brown / 美团 VitaBench 2.0 / MWC 与链博会具身智能

### 修改
- `data/news.json`：新增6月27日，保留最近5天（27/26/25/24/23）
- `data/articles.json`：新增 article-26 元数据，修复 article-24 url_en 路径（article-24-en.html → article-24.html）
- `index.html`：侧边栏 sidebar-article-link 更新为 26/25/24，article-23 下沉到 rec-item
- `data/used-images.json`：追加 12 张本次使用图片，总已用 129 张

### 部署
- Git commit: `440f700`
- Cloudflare 部署：`https://99ddb355.ainewsdaily.pages.dev` → ainewsdaily.asia

### 累计进度
- 深度文章：26 篇（article-1 至 article-26，article-13 跳号，实际 25 条记录），全部已有中英文双语版本
- AdSense 门槛已达标
- 图片池余量：29 张 ⚠️（已低于 40 张告警线，建议尽快补充）

---

## 2026-06-20 — 6月20日每日更新

### 新增
- 6月20日新闻10条 + 头条（八部门联合发文推进「AI+消费」发展，17项举措促进AI走进千家万户）
- 深度文章 `article-19.html`：《AI产业「双轨并进」：政策红利与IPO狂潮下的万亿新战场》正式上线
- 新闻包括：马斯克预测中国大模型2027年追上Fable、DeepSeek首轮融资510亿估值4000亿、银河通用AstraBrain-WBC 0.5、亚马逊Trainium AI芯片挑战英伟达、Anthropic vs OpenAI IPO竞速、OpenAI日本推出ChatGPT广告、硅谷FDE岗位暴涨42倍、智谱GLM-5.2开源
- `articles/en/article-19.html`：英文版同步上线
- `wechat/wechat-2026-06-20.html`：微信图文版（梁文锋的200亿豪赌）含原创声明
- `toutiao/toutiao-2026-06-20.md`：头条版（Anthropic vs OpenAI IPO竞速）

### 修改
- `data/news.json`：新增6月20日数据，移除6月15日（保留5天：20/19/18/17/16）
- `data/articles.json`：新增 article-19 元数据
- `index.html`：侧边栏推荐区更新（article-19 🔥、article-18 📖、article-17 📖、article-16 📖）
- `js/i18n.js`：深度文章标题更新为 article-19、article-18、article-17（中英文）

### 累计进度
- 深度文章：19篇（article-1至article-19）
- 距AdSense目标（20-30篇）还需1-11篇

---

## 2026-06-19 — 6月19日每日更新

### 新增
- 6月19日新闻10条 + 头条（苹果WWDC 2026：Siri底层全面切换Gemini，AI助手进入「自选模型」时代）
- 深度文章 `article-18.html`：《AI助手「自选模型」时代：苹果WWDC开启消费AI新纪元》正式上线
- 新闻包括：杨立昆警告xAI已失败/AI泡沫预警、Google I/O 2026 Gemini 3.5 Flash速度提升4倍/AI Ultra降价60%、OpenAI Dreaming记忆系统、Anthropic收购Coefficient Bio进军AI制药、费城半导体指数暴涨6.41%/英特尔创历史新高、智谱vs MiniMax分化、Nature封面AI独立完成科学发现、MiniMax百万Token近线性计算、科创板第五套标准覆盖AI全产业链、八部门17项举措推进AI+消费
- `articles/en/article-18.html`：英文版同步上线
- `wechat/wechat-2026-06-19.html`：微信图文版（杨立昆与马斯克：AI教父与硅谷狂人的十年战争）含原创声明
- `toutiao/toutiao-2026-06-19.md`：头条版（AI行业泡沫预警：LeCun的警告与资本市场的疯狂）

### 修改
- `data/news.json`：新增6月19日数据，移除6月14日（保留5天：19/18/17/16/15）
- `data/articles.json`：新增 article-18 元数据
- `index.html`：侧边栏推荐区更新（article-18 🔥、article-17 📖、article-16 📖、article-15 📖）
- `js/i18n.js`：深度文章标题更新为 article-18、article-17、article-16（中英文）

### 部署
- GitHub推送成功
- Cloudflare Pages部署成功：https://ainewsdaily.pages.dev
- 正式域名：https://ainewsdaily.asia

### 累计进度
- 深度文章：18篇（article-1至article-18）
- 距AdSense目标（20-30篇）还需2-12篇

---

## 2026-06-18 — 6月18日每日更新

### 新增
- 6月18日新闻10条 + 头条（Transformer之父Noam Shazeer跳槽OpenAI，大模型架构战再升级）
- 深度文章 `article-17.html`：《SpaceX 600亿美元收购Cursor：当航天巨头转型AI编程公司》正式上线
- 新闻包括：OpenAI与Anthropic先后提交IPO申请、Claude Fable 5发布、Google I/O 2026 Gemini 3.5系列、Salesforce 36亿美元收购Fin、科创板第五套标准扩至AI大模型企业、NVIDIA收购Kumo AI、穹彻智能融资、白宫NSPM-11备忘录、Anthropic前沿AI暂停机制报告、学术团队极简数据超越巨头
- `wechat/wechat-2026-06-18.html`：微信图文版（梁文锋的200亿豪赌：从量化之王到AI国家队）含原创声明
- `toutiao/toutiao-2026-06-18.md`：头条版（AI公司上市潮来袭）

### 修改
- `data/news.json`：新增6月18日数据，移除6月13日（保留5天：18/17/16/15/14）
- `data/articles.json`：新增 article-17 元数据（含image/category/read_time）
- `index.html`：侧边栏推荐区更新（article-17 🔥、article-16 🔥、article-15 📖）
- 微信文章边框修复：所有table/td强制border:none+border-collapse:collapse
- 微信文章新增原创声明模块（晓色原创，未经授权禁止转载）
- deploy.sh从git追踪中移除（含API密钥），加入.gitignore

---

## 2026-06-17 — 6月17日每日更新

### 新增
- 6月17日新闻10条 + 头条（FF发布全尺寸人形机器人Futurist 2，贾跃亭跨界入局具身智能）
- 深度文章 `article-16.html`：《资本狂潮：2026年AI融资超万亿美元的冷思考》正式上线
- 新闻包括：OpenAI收购Ona、Anthropic Agent SDK计费独立、MiniMax M3开源、苹果Siri AI智能体探索、亚马逊密苏里州数据中心投资、OpenAI 5000万美元非营利承诺、智谱GLM-5.2开放、燧原科技IPO过会、微纳核芯融资、工信部人形机器人实景实训专项行动
- `wechat/wechat-2026-06-17.html`：微信图文版（FF造人：贾跃亭跨界背后的具身智能狂热）
- `toutiao/toutiao-2026-06-17.md`：头条版（FF造人！贾跃亭跨界背后的具身智能狂热）

### 修改
- `data/news.json`：新增6月17日数据，移除6月12日（保留5天：17/16/15/14/13）
- `data/articles.json`：新增 article-16 元数据
- `index.html`：侧边栏推荐区更新（article-16 🔥、article-15 📖、article-14 📖）
- `js/i18n.js`：深度文章标题更新为 article-16、article-15、article-14（中英文）

### 待完成
- 累计深度文章：16篇（article-1至article-16），距目标20-30篇还需4-14篇

---

## 2026-06-14 — 6月14日每日更新

### 新增
- 6月14日新闻10条 + 头条（美国政府强制关停Anthropic Fable 5与Mythos 5）
- 深度文章 `article-13.html`：《SpaceX上市与AI基础设施帝国——火箭公司的AI估值逻辑》正式上线
- 新闻包括：DiffusionGemma并行文本生成、OpenAI IPO时间表、中国短视频AI标注新规、通用世界基座模型、1300亿美元数据中心项目被阻、DeepMind多智能体风险警告、OpenAI多州调查、Gemini Deep Research、特斯拉Optimus V3量产、Anthropic 210亿美元TPU订单

### 修改
- `data/news.json`：新增6月14日数据，移除6月9日（保留5天）
- `data/articles.json`：article-13日期更新为2026-06-14（正式发布）
- `index.html`：侧边栏推荐区更新（article-13 🔥、article-12 📖、article-11 📖）
- `js/i18n.js`：深度文章标题更新为 article-13、article-12、article-11

### 待完成
- article-14 撰写中（6月15日发布）
- article-13 微信图文版 + 头条版生成中

---

## 2026-06-12 — 6月12日每日更新

### 新增
- 6月12日新闻10条 + 头条（OpenAI与Visa达成AI支付合作）
- 深度文章 `article-11.html`：《AI算力军备竞赛：一周1200亿美元基础设施投入意味着什么？》正式上线

### 修改
- `data/news.json`：新增6月12日数据，保留6月8-11日历史（5天）
- `data/articles.json`：新增 article-11 元数据
- `index.html`：侧边栏推荐区更新（article-11 🔥、article-10 📖、article-9 📖）
- `js/i18n.js`：深度文章标题更新为 article-11、article-10、article-9

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

## 2026-06-11 更新

- `data/news.json`：添加6月11日新闻数据（10条+头条：AI算力军备竞赛白热化），更新`last_updated`
- `data/articles.json`：正式发布 article-10（Anthropic Fable 5/Mythos 5深度解读）
- `articles/article-10.html`：正式上线
- `index.html`：侧边栏推荐区更新（article-10 🔥、article-9 📖、article-8 📖）
- `js/i18n.js`：深度文章标题更新（中英文）
- `articles/article-11.html`：提前写好，待6月12日发布（AI算力军备竞赛深度解读）

---

## 2026-06-13
- 更新6月13日新闻（10条+头条：SpaceX IPO首日收涨19%，马斯克成万亿富翁）
- 发布article-12《AI商业革命：从聊天到购物——当AI智能体走进消费市场》
- 部署平台从Netlify迁移到Cloudflare Pages（Netlify额度耗尽）
- 域名ainewsdaily.asia NS服务器从阿里云切换到Cloudflare
- 修复所有新闻图片加载失败问题（补充缺失image字段，替换失效picsum.photos）

### 2026-06-13
- 🔧 部署平台从 Netlify 迁移到 Cloudflare Pages（Netlify额度耗尽）
- 🌐 域名 ainewsdaily.asia DNS 从阿里云切换到 Cloudflare NS（ines.ns.cloudflare.com / luke.ns.cloudflare.com）
- 🔒 SSL 证书签发中（预计15-30分钟生效）
- 🖼️ 修复所有新闻图片加载失败问题（picsum.photos失效，替换为unsplash）
- 📰 更新6月13日新闻（10条+头条：SpaceX IPO首日收涨19%）
- 📝 发布 article-12《AI商业革命：从聊天到购物——当AI智能体走进消费市场》
- 📝 撰写 article-13《SpaceX上市与AI基础设施帝国》（6月14日发布）
- 📱 生成 article-12 微信图文版 & 头条版
### 2026-06-15
- 📰 更新6月15日新闻（10条+头条：AI价格战DeepSeek抢占市场）
- 📝 发布article-14：《AI模型成为「受控技术」：Anthropic被强制关停的历史性事件》
- 🔄 更新侧边栏：article-14🔥 / article-13📖 / article-12📖
- 🌐 更新i18n.js深度文章标题
- 🚀 Cloudflare部署完成
- 📱 三平台独立文章策略启动（网站/微信/头条各一篇不同内容）



---

## 2026-06-16 — 6月16日每日更新

### 新增
- 6月16日新闻：1条头条 + 10条普通新闻
- **头条**：AI伦理风暴席卷硅谷（斯坦福学生抗议Google CEO、Jeff Bezos回归担任Prometheus Co-CEO、社会信任危机）
- 新闻涵盖：
  - Mistral AI寻求30亿欧元融资，估值200亿欧元剑指美国AI霸权
  - NEURA Robotics完成14亿美元C轮融资（Tether领投，英伟达/亚马逊/博世入局）
  - OpenAI发布开源版Codex，免费面向开源维护者
  - Apple悄然发布Foundation Models框架文档
  - 英国准备两周内宣布禁止16岁以下使用社交媒体
  - EFF反对美国版权办公室改革
  - HCLTech投资Sarvam AI 1.5亿美元获10.5%股份
  - Adani与Jabil合作在印度制造AI数据中心设备
  - Google与FBI摧毁使用Gemini的19亿美元钓鱼网络
  - KPMG AI报告因AI幻觉40个引用被撤
- **网站文章** `article-15.html`：《AI价格战：DeepSeek如何用1/10的成本颠覆AI巨头》正式发布
- **网站文章** `article-16.html`：《资本狂潮：2026年AI融资超万亿美元的冷思考》提前写好（6月17日发布）

### 三平台独立内容策略
- 微信公众号 `wechat/wechat-2026-06-16.html`：《贝索斯回归启示录：为什么科技首富选择了最难的那条路》（叙事/洞察型）
- 头条文章 `toutiao/toutiao-2026-06-16.md`：《人形机器人的黄金时代：从实验室到工厂的距离还有多远》（热点/趋势型）
- 三个平台内容完全不同，独立撰写

### 修改
- `data/news.json`：新增6月16日数据，保留6月12-15日历史（5天），更新`last_updated`
- `data/articles.json`：新增article-15元数据（正式发布）
- `index.html`：侧边栏推荐区更新（article-15 🔥、article-14 📖、article-13 📖）
- `js/i18n.js`：深度文章标题更新（中英文：article-15/14/13）

### 技术验证
- ✅ news.json JSON语法验证通过
- ✅ articles.json JSON语法验证通过
- ✅ i18n.js JavaScript语法验证通过

### Git与部署
- Git commit: `8d14d19`（7个文件变更）
- Cloudflare Pages部署成功：https://701956b1.ainewsdaily.pages.dev

### 交付物
- 微信公众号图文：`wechat/wechat-2026-06-16.html`（供用户下载）
- 头条文章：`toutiao/toutiao-2026-06-16.md`（供用户下载）

### 累计进度
- 网站深度文章：16篇（含article-16待发布）
- 微信公众号：10篇（含待发布）
- 头条文章：7篇（含待发布）

## 2026-06-26 06:05 - 修复侧边栏深度好文样式
- 补充 css/style.css 中 .sidebar-article-link / .sidebar-article-date / .sidebar-article-title 三个类的样式定义（此前漏写导致三条标题挤在一起）
- 卡片式布局：日期色块徽章 + 标题2行截断，hover 时左边线变紫、整卡右移
- Commit: 6e4e38c
- 预览: https://f9cd5190.ainewsdaily.pages.dev

## 2026-06-28（追加）
- 微信版：《DeepSeek的「3400亿信仰」：一个杭州人，把中国AI送进了全球前12》（wechat-2026-06-28.html, 16143字节，677px table 布局，border 全合规）
- 头条版：《自动驾驶L3/L4强制国标定档2027年7月：中国AI正式进入「合规元年」》（toutiao-2026-06-28.md, 7530字节）
- 三平台主题独立：网站=国标双发产业分析 / 微信=DeepSeek人物事件 / 头条=合规元年热点趋势
- 新规：自 6/28 起，「开始更新」指令默认产出当天三件套，主 Agent 不再分步等待
- **sitemap.xml 全量重建**：从 6/3 的 2 篇升级到 60 URL（6 静态 + 27 中文 + 27 英文），含 hreflang 中英文互链 + x-default，commit e4da2c0
- 修复：article-22 英文版命名从旧的 `article-22-en.html` 补齐 `article-22.html` 标准命名
- robots.txt 校验：Sitemap 指令已正确指向 https://ainewsdaily.asia/sitemap.xml
- Yandex ping 成功（HTTP 200）；Google/Bing ping endpoint 均已废弃（HTTP 410），改由主人手动 GSC 提交
- 预览：https://31f45f82.ainewsdaily.pages.dev/sitemap.xml
- **重磅 hero**：中国 AI 治理框架成型：40+ 项国标 + 智能体互联 7 项国标同步落地（来源：国家标准委 / 中国政府网）
- **新增深度文章**：article-27《中国 AI 治理框架成型：40+ 项国标 + 智能体互联 7 项国标，从底层算力到智能体协同的全栈规范化》中英双语
- **news 10 条**：国标双发、GPT-5.6 Sol/Terra/Luna 三梯队、DeepSeek DSpark 开源、特斯拉接入豆包+DeepSeek、DeepSeek 胡润独角兽 3400 亿、工信部 L3/L4 强制性国标、阿里千问输入法 macOS、Anthropic Mythos 5、Marvell CXL 3.64x 压缩、RoboScience Visics 具身大模型
- **侧边栏**：article-27 进首位，挤掉 article-16
- **图片**：本次新增 11 张图标记 used（含 industry-smart-city.jpg / policy-data-privacy.jpg / llm-multimodal-v3.jpg / opensource-github-stars-v3.jpg / autonomous-vehicle-city.jpg / investment-ipo-v3.jpg / autonomous-truck-v3.jpg / llm-rag-v3.jpg / llm-evaluation-v3.jpg / chips-edge-ai-v3.jpg / robotics-humanoid-v3.jpg），used 总数 141，本地可用 63 张
- **commit**: `75c0fb3` (feat(daily): 2026-06-28 update)
- **部署**: https://5cd4b8a8.ainewsdaily.pages.dev
