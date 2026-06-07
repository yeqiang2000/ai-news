/**
 * AI News Daily - 国际化模块 (i18n)
 * 功能：IP地理位置检测语言、浏览器语言回退、手动切换、翻译字典
 */

(function(window) {
    'use strict';

    // ============================================
    // 翻译字典
    // ============================================
    const translations = {
        zh: {
            // 导航
            nav_all: '全部',
            nav_llm: '大模型',
            nav_chips: '芯片算力',
            nav_aiapp: 'AI应用',
            nav_opensource: '开源动态',
            nav_investment: '投融资',
            nav_policy: '政策监管',
            nav_articles: '深度文章',
            nav_about: '关于 ▾',
            nav_about_us: '关于我们',
            nav_contact: '联系方式',
            nav_privacy: '隐私政策',
            nav_disclaimer: '免责声明',

            // Hero
            hero_badge: '今日头条',

            // 内容区
            section_latest: '最新资讯',
            section_latest_icon: '📰',
            last_update: '更新时间: ',
            no_results: '暂无该分类的新闻',
            no_results_icon: '🔍',
            load_error: '加载新闻数据失败，请刷新页面重试',
            load_error_icon: '⚠️',
            img_error: '图片加载失败',

            // 侧边栏
            sidebar_trending: '热门话题',
            sidebar_trending_icon: '🏷️',
            sidebar_deep: '深度好文',
            sidebar_deep_icon: '📌',
            sidebar_deep_tag: '深度分析',
            sidebar_sources: '数据来源',
            sidebar_sources_icon: '📡',

            // Footer
            footer_tagline: '汇聚全球AI科技前沿资讯',
            footer_categories: '分类',
            footer_resources: '资源',
            footer_about: '关于',

            // 分类
            cat_llm: '大模型',
            cat_chips: '芯片算力',
            cat_aiapp: 'AI应用',
            cat_opensource: '开源动态',
            cat_investment: '投融资',
            cat_policy: '政策监管',

            // 相对时间
            just_now: '刚刚',
            minutes_ago: '分钟前',
            hours_ago: '小时前',
            days_ago: '天前',

            // 热门话题标签
            tag_agent: '智能体',
            tag_opensource: '开源',
            tag_gpt5: 'GPT-5',
            tag_nvidia: '英伟达',
            tag_humanoid: '人形机器人',
            tag_ipo: 'IPO',
            tag_3nm: '3nm芯片',
            tag_multimodal: '多模态',
            tag_ai_agent: 'Agent',
            tag_compute: '算力',

            // 深度文章
            // deep_article_1_title: 'AI万亿IPO潮：历史性上市浪潮还是泡沫信号？', // 6月9日发布时启用
            deep_article_2_title: '当国家成为AI股东：美国政府入股科技公司的战略逻辑与风险',
            deep_article_3_title: '特斯拉Robotaxi：全城无人驾驶的豪言与20辆车的现实',

            // 日期分隔符
            date_today: '今天',
            date_yesterday: '昨天',

            // 深度文章视图
            articles_section_title: '深度文章',
            articles_section_icon: '📝',
            articles_read_more: '阅读全文',
            articles_read_time: '阅读时长',
            articles_count_prefix: '共',
            articles_count_suffix: '篇',

            // 语言
            lang_label: '中文',
            lang_switch_to: 'EN'
        },
        en: {
            // Navigation
            nav_all: 'All',
            nav_llm: 'LLM',
            nav_chips: 'Chips & Compute',
            nav_aiapp: 'AI Apps',
            nav_opensource: 'Open Source',
            nav_investment: 'Investment',
            nav_policy: 'Policy',
            nav_articles: 'Deep Reads',
            nav_about: 'About ▾',
            nav_about_us: 'About Us',
            nav_contact: 'Contact',
            nav_privacy: 'Privacy Policy',
            nav_disclaimer: 'Disclaimer',

            // Hero
            hero_badge: 'Top Story',

            // Content
            section_latest: 'Latest News',
            section_latest_icon: '📰',
            last_update: 'Updated: ',
            no_results: 'No news in this category',
            no_results_icon: '🔍',
            load_error: 'Failed to load news data. Please refresh the page.',
            load_error_icon: '⚠️',
            img_error: 'Image failed to load',

            // Sidebar
            sidebar_trending: 'Trending Topics',
            sidebar_trending_icon: '🏷️',
            sidebar_deep: 'Deep Reads',
            sidebar_deep_icon: '📌',
            sidebar_deep_tag: 'Deep Analysis',
            sidebar_sources: 'Data Sources',
            sidebar_sources_icon: '📡',

            // Footer
            footer_tagline: 'Your Daily Dose of AI News',
            footer_categories: 'Categories',
            footer_resources: 'Resources',
            footer_about: 'About',

            // Categories
            cat_llm: 'LLM',
            cat_chips: 'Chips & Compute',
            cat_aiapp: 'AI Apps',
            cat_opensource: 'Open Source',
            cat_investment: 'Investment',
            cat_policy: 'Policy',

            // Relative time
            just_now: 'just now',
            minutes_ago: ' min ago',
            hours_ago: ' hr ago',
            days_ago: ' days ago',

            // Trending topic tags
            tag_agent: 'AI Agents',
            tag_opensource: 'Open Source',
            tag_gpt5: 'GPT-5',
            tag_nvidia: 'NVIDIA',
            tag_humanoid: 'Humanoid Robots',
            tag_ipo: 'IPO',
            tag_3nm: '3nm Chips',
            tag_multimodal: 'Multimodal',
            tag_ai_agent: 'Agent',
            tag_compute: 'Compute',

            // Deep reads
            // deep_article_1_title: "Trillion-Dollar AI IPO Wave: Historic Listing Surge or Bubble Signal?", // Enable on June 9
            deep_article_2_title: "When the State Becomes an AI Shareholder: US Government Equity Stakes in Tech",
            deep_article_3_title: "Tesla Robotaxi: City-Wide Driverless Promise vs 20-Car Reality",

            // Date separators
            date_today: 'Today',
            date_yesterday: 'Yesterday',

            // Deep articles view
            articles_section_title: 'Deep Reads',
            articles_section_icon: '📝',
            articles_read_more: 'Read More',
            articles_read_time: 'Read time',
            articles_count_prefix: '',
            articles_count_suffix: ' articles',

            // Language
            lang_label: 'EN',
            lang_switch_to: '中文'
        }
    };

    // 中文分类 → 翻译key映射
    const categoryKeyMap = {
        '大模型': 'cat_llm',
        '芯片算力': 'cat_chips',
        'AI应用': 'cat_aiapp',
        '开源动态': 'cat_opensource',
        '投融资': 'cat_investment',
        '政策监管': 'cat_policy'
    };

    // 中文分类 → 英文分类名（用于 news.json category 匹配）
    const categoryEnMap = {
        '大模型': 'LLM',
        '芯片算力': 'Chips & Compute',
        'AI应用': 'AI Apps',
        '开源动态': 'Open Source',
        '投融资': 'Investment',
        '政策监管': 'Policy'
    };

    // 英文分类 → 中文分类名（反向映射）
    const categoryZhMap = {};
    for (const [zh, en] of Object.entries(categoryEnMap)) {
        categoryZhMap[en] = zh;
    }

    // ============================================
    // 语言检测与存储
    // ============================================
    let currentLang = 'zh';

    /**
     * 获取存储的语言偏好
     */
    function getStoredLang() {
        try {
            return localStorage.getItem('ai_news_lang') || null;
        } catch (e) {
            return null;
        }
    }

    /**
     * 存储语言偏好
     */
    function setStoredLang(lang) {
        try {
            localStorage.setItem('ai_news_lang', lang);
        } catch (e) { /* ignore */ }
    }

    /**
     * 通过IP检测是否为中国用户
     */
    async function detectByIP() {
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 3000);
            const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
            clearTimeout(timeout);
            if (res.ok) {
                const data = await res.json();
                return data.country_code === 'CN' ? 'zh' : 'en';
            }
        } catch (e) { /* fallback */ }
        return null;
    }

    /**
     * 通过浏览器语言检测
     */
    function detectByBrowser() {
        const lang = navigator.language || navigator.userLanguage || 'zh';
        return lang.startsWith('zh') ? 'zh' : 'en';
    }

    /**
     * 初始化语言（同步设置默认值，异步尝试IP检测）
     */
    function initLang() {
        const stored = getStoredLang();
        if (stored) {
            currentLang = stored;
            return;
        }
        // 先用浏览器语言作为默认
        currentLang = detectByBrowser();
        // 异步尝试IP检测（不阻塞渲染）
        detectByIP().then(ipLang => {
            if (ipLang && ipLang !== currentLang) {
                currentLang = ipLang;
                setStoredLang(currentLang);
                if (typeof window.applyLanguage === 'function') {
                    window.applyLanguage();
                }
            }
        });
    }

    /**
     * 切换语言
     */
    function toggleLang() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        setStoredLang(currentLang);
        if (typeof window.applyLanguage === 'function') {
            window.applyLanguage();
        }
    }

    /**
     * 获取当前语言
     */
    function getLang() {
        return currentLang;
    }

    /**
     * 获取翻译文本
     */
    function t(key) {
        return (translations[currentLang] && translations[currentLang][key]) || key;
    }

    /**
     * 获取分类的显示名称
     */
    function getCategoryName(categoryZh) {
        if (currentLang === 'zh') return categoryZh;
        return categoryEnMap[categoryZh] || categoryZh;
    }

    /**
     * 获取分类的颜色CSS变量名（用中文key）
     */
    function getCategoryColorKey(categoryZh) {
        return categoryZh; // CSS变量保持中文key不变
    }

    /**
     * 从英文分类名反查中文key（用于筛选匹配）
     */
    function normalizeCategory(cat) {
        if (categoryEnMap[cat]) return cat; // 已经是中文
        if (categoryZhMap[cat]) return categoryZhMap[cat]; // 英文→中文
        return cat;
    }

    // 中文热门标签 → 翻译key映射
    const tagKeyMap = {
        "智能体": "tag_agent",
        "开源": "tag_opensource",
        "GPT-5": "tag_gpt5",
        "英伟达": "tag_nvidia",
        "人形机器人": "tag_humanoid",
        "IPO": "tag_ipo",
        "3nm芯片": "tag_3nm",
        "多模态": "tag_multimodal",
        "Agent": "tag_ai_agent",
        "算力": "tag_compute"
    };

    // ============================================
    // 导出
    // ============================================
    window.I18n = {
        init: initLang,
        toggle: toggleLang,
        getLang: getLang,
        t: t,
        getCategoryName: getCategoryName,
        getCategoryColorKey: getCategoryColorKey,
        normalizeCategory: normalizeCategory,
        categoryEnMap: categoryEnMap,
        categoryZhMap: categoryZhMap,
        tagKeyMap: tagKeyMap
    };

})(window);
