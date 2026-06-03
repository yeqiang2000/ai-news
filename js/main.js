/**
 * AI News Daily - 主脚本
 * 功能：动态加载新闻数据、分类筛选、相对时间转换
 */

(function() {
    'use strict';

    // ============================================
    // 配置
    // ============================================
    const CONFIG = {
        dataUrl: 'data/news.json',
        animationDuration: 300
    };

    // ============================================
    // 状态管理
    // ============================================
    let state = {
        newsData: null,
        currentCategory: '全部'
    };

    // ============================================
    // DOM 元素缓存
    // ============================================
    const DOM = {
        heroImage: document.getElementById('hero-image'),
        heroSource: document.getElementById('hero-source'),
        heroDate: document.getElementById('hero-date'),
        heroTitle: document.getElementById('hero-title'),
        heroLink: document.getElementById('hero-link'),
        heroSummary: document.getElementById('hero-summary'),
        heroCategory: document.getElementById('hero-category'),
        newsGrid: document.getElementById('news-grid'),
        noResults: document.getElementById('no-results'),
        lastUpdateTime: document.getElementById('last-update-time'),
        mustReadList: document.getElementById('must-read-list'),
        navTags: document.querySelectorAll('.nav-tag'),
        mobileNavTags: document.querySelectorAll('.mobile-nav-tag'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        mobileNav: document.querySelector('.mobile-nav'),
        mobileNavClose: document.querySelector('.mobile-nav-close'),
        footerLinks: document.querySelectorAll('.footer-links a')
    };

    // ============================================
    // 工具函数
    // ============================================

    /**
     * 计算相对时间
     * @param {string} dateStr - ISO日期字符串
     * @returns {string} 相对时间字符串
     */
    function getRelativeTime(dateStr) {
        const now = new Date();
        const date = new Date(dateStr);
        const diff = now - date;
        
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 1) return '刚刚';
        if (minutes < 60) return `${minutes}分钟前`;
        if (hours < 24) return `${hours}小时前`;
        if (days < 7) return `${days}天前`;
        
        return date.toLocaleDateString('zh-CN', {
            month: 'short',
            day: 'numeric'
        });
    }

    /**
     * 格式化完整日期
     * @param {string} dateStr - ISO日期字符串
     * @returns {string} 格式化日期
     */
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    /**
     * 获取分类标签颜色
     * @param {string} category - 分类名称
     * @returns {string} 颜色类名
     */
    function getCategoryClass(category) {
        const categoryMap = {
            '大模型': 'var(--cat-大模型)',
            '芯片算力': 'var(--cat-芯片算力)',
            'AI应用': 'var(--cat-AI应用)',
            '开源动态': 'var(--cat-开源动态)',
            '投融资': 'var(--cat-投融资)'
        };
        return categoryMap[category] || 'var(--accent-primary)';
    }

    /**
     * 防抖函数
     * @param {Function} func - 要防抖的函数
     * @param {number} wait - 等待时间
     * @returns {Function}
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ============================================
    // 渲染函数
    // ============================================

    /**
     * 渲染Hero区
     * @param {Object} heroData - Hero数据
     */
    function renderHero(heroData) {
        if (!heroData) return;

        DOM.heroImage.src = heroData.image;
        DOM.heroImage.alt = heroData.title;
        DOM.heroSource.textContent = heroData.source;
        DOM.heroDate.textContent = formatDate(heroData.date);
        DOM.heroLink.textContent = heroData.title;
        DOM.heroLink.href = heroData.url;
        DOM.heroSummary.textContent = heroData.summary;
        
        DOM.heroCategory.textContent = heroData.category;
        DOM.heroCategory.setAttribute('data-category', heroData.category);
        DOM.heroCategory.style.background = getCategoryClass(heroData.category);
    }

    /**
     * 创建新闻卡片HTML
     * @param {Object} article - 文章数据
     * @returns {string} HTML字符串
     */
    function createNewsCard(article) {
        const categoryColor = getCategoryClass(article.category);
        
        return `
            <article class="news-card" data-id="${article.id}">
                <div class="news-card-image">
                    <img src="${article.image}" alt="${article.title}" loading="lazy">
                </div>
                <div class="news-card-body">
                    <div class="news-card-meta">
                        <span class="news-card-source">${article.source}</span>
                        <span class="news-card-date">${getRelativeTime(article.date)}</span>
                    </div>
                    <h3 class="news-card-title">
                        <a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>
                    </h3>
                    <p class="news-card-summary">${article.summary}</p>
                    <div class="news-card-footer">
                        <span class="category-tag" data-category="${article.category}" style="background: ${categoryColor}">
                            ${article.category}
                        </span>
                    </div>
                </div>
            </article>
        `;
    }

    /**
     * 渲染新闻网格
     * @param {Array} articles - 文章列表
     */
    function renderNewsGrid(articles) {
        if (!articles || articles.length === 0) {
            DOM.newsGrid.innerHTML = '';
            DOM.noResults.style.display = 'block';
            return;
        }

        DOM.noResults.style.display = 'none';
        
        // 添加淡出效果
        DOM.newsGrid.style.opacity = '0';
        
        setTimeout(() => {
            DOM.newsGrid.innerHTML = articles
                .map(article => createNewsCard(article))
                .join('');
            
            // 添加淡入效果
            DOM.newsGrid.style.opacity = '1';
        }, CONFIG.animationDuration);
    }

    /**
     * 渲染本周必读
     * @param {Array} articles - 文章列表（前5条）
     */
    function renderMustRead(articles) {
        if (!articles || articles.length === 0) return;

        const topArticles = articles.slice(0, 5);
        
        DOM.mustReadList.innerHTML = topArticles
            .map((article, index) => `
                <li class="must-read-item" data-url="${article.url}">
                    <span class="must-read-number">${index + 1}</span>
                    <div class="must-read-content">
                        <h4 class="must-read-title">${article.title}</h4>
                        <span class="must-read-meta">${article.source} · ${getRelativeTime(article.date)}</span>
                    </div>
                </li>
            `)
            .join('');

        // 绑定点击事件
        DOM.mustReadList.querySelectorAll('.must-read-item').forEach(item => {
            item.addEventListener('click', () => {
                const url = item.dataset.url;
                if (url) window.open(url, '_blank', 'noopener,noreferrer');
            });
        });
    }

    /**
     * 更新最后更新时间
     * @param {string} lastUpdated - 最后更新时间
     */
    function updateLastUpdateTime(lastUpdated) {
        DOM.lastUpdateTime.textContent = getRelativeTime(lastUpdated);
    }

    // ============================================
    // 筛选功能
    // ============================================

    /**
     * 筛选新闻
     * @param {string} category - 分类名称
     */
    function filterNews(category) {
        state.currentCategory = category;
        
        // 更新导航标签状态
        updateNavTagsState(category);
        
        // 根据分类筛选
        let filteredArticles = state.newsData.articles;
        
        if (category !== '全部') {
            filteredArticles = state.newsData.articles.filter(
                article => article.category === category
            );
        }
        
        // 渲染
        renderNewsGrid(filteredArticles);
        
        // 更新Hero区显示
        if (category === '全部') {
            renderHero(state.newsData.hero);
        } else {
            // 找到该分类的第一篇文章作为Hero
            const categoryHero = state.newsData.articles.find(
                article => article.category === category
            );
            if (categoryHero) {
                renderHero(categoryHero);
            }
        }
    }

    /**
     * 更新导航标签状态
     * @param {string} activeCategory - 当前分类
     */
    function updateNavTagsState(activeCategory) {
        DOM.navTags.forEach(tag => {
            tag.classList.toggle('active', tag.dataset.category === activeCategory);
        });
        DOM.mobileNavTags.forEach(tag => {
            tag.classList.toggle('active', tag.dataset.category === activeCategory);
        });
    }

    // ============================================
    // 事件处理
    // ============================================

    /**
     * 初始化事件监听
     */
    function initEventListeners() {
        // 桌面导航标签点击
        DOM.navTags.forEach(tag => {
            tag.addEventListener('click', () => {
                filterNews(tag.dataset.category);
                closeMobileNav();
            });
        });

        // 移动端导航标签点击
        DOM.mobileNavTags.forEach(tag => {
            tag.addEventListener('click', () => {
                filterNews(tag.dataset.category);
                closeMobileNav();
            });
        });

        // 移动端菜单按钮
        DOM.mobileMenuBtn.addEventListener('click', openMobileNav);
        
        // 移动端关闭按钮
        DOM.mobileNavClose.addEventListener('click', closeMobileNav);

        // 移动端导航外层点击关闭
        DOM.mobileNav.addEventListener('click', (e) => {
            if (e.target === DOM.mobileNav) {
                closeMobileNav();
            }
        });

        // 底部链接
        DOM.footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const category = link.dataset.category;
                if (category) {
                    e.preventDefault();
                    filterNews(category);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        // 键盘事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileNav();
            }
        });

        // 图片加载错误处理
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"%3E%3Crect fill="%231e1e28" width="400" height="250"/%3E%3Ctext fill="%2364748b" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E图片加载失败%3C/text%3E%3C/svg%3E';
            }
        }, true);
    }

    /**
     * 打开移动端导航
     */
    function openMobileNav() {
        DOM.mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    /**
     * 关闭移动端导航
     */
    function closeMobileNav() {
        DOM.mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================
    // 数据加载
    // ============================================

    /**
     * 加载新闻数据
     */
    async function loadNewsData() {
        try {
            const response = await fetch(CONFIG.dataUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            state.newsData = data;
            
            // 渲染页面
            renderHero(data.hero);
            renderNewsGrid(data.articles);
            renderMustRead(data.articles);
            updateLastUpdateTime(data.last_updated);
            
        } catch (error) {
            console.error('加载新闻数据失败:', error);
            
            // 显示错误提示
            DOM.newsGrid.innerHTML = `
                <div class="no-results" style="display: block;">
                    <span class="no-results-icon">⚠️</span>
                    <p>加载新闻数据失败，请刷新页面重试</p>
                </div>
            `;
        }
    }

    // ============================================
    // 初始化
    // ============================================

    /**
     * 应用启动入口
     */
    function init() {
        // 添加过渡效果
        DOM.newsGrid.style.transition = `opacity ${CONFIG.animationDuration}ms ease`;
        
        // 初始化事件监听
        initEventListeners();
        
        // 加载数据
        loadNewsData();
    }

    // DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
