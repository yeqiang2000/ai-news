/**
 * AI News Daily - 主脚本 (双语版·多日内容)
 * 功能：动态加载新闻数据、分类筛选、相对时间转换、国际化、多日内容展示
 */

(function() {
    'use strict';

    // ============================================
    // 配置
    // ============================================
    const CONFIG = {
        dataUrl: 'data/news.json',
        articlesUrl: 'data/articles.json',
        animationDuration: 300,
        maxDays: 5  // 最多保留5天内容
    };

    // ============================================
    // 状态管理
    // ============================================
    let state = {
        newsData: null,
        articlesData: null,  // 深度文章数据
        allArticles: [],  // 所有天的文章汇总
        currentCategory: '全部',  // 始终用中文key存储
        isArticleView: false  // 是否在深度文章视图
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
        heroBadge: document.getElementById('hero-badge'),
        newsGrid: document.getElementById('news-grid'),
        noResults: document.getElementById('no-results'),
        lastUpdateTime: document.getElementById('last-update-time'),
        mustReadList: document.getElementById('must-read-list'),
        navTags: document.querySelectorAll('.nav-tag'),
        mobileNavTags: document.querySelectorAll('.mobile-nav-tag'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        mobileNav: document.querySelector('.mobile-nav'),
        mobileNavClose: document.querySelector('.mobile-nav-close'),
        footerLinks: document.querySelectorAll('.footer-links a'),
        langToggle: document.getElementById('lang-toggle')
    };

    // ============================================
    // 工具函数
    // ============================================

    /**
     * 获取新闻的本地化标题
     */
    function getLocalizedField(item, field) {
        const lang = I18n.getLang();
        const enField = field + '_en';
        if (lang === 'en' && item[enField]) {
            return item[enField];
        }
        return item[field];
    }

    /**
     * 计算相对时间
     */
    function getRelativeTime(dateStr) {
        const now = new Date();
        const date = new Date(dateStr);
        const diff = now - date;
        
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 1) return I18n.t('just_now');
        if (minutes < 60) return `${minutes}${I18n.t('minutes_ago')}`;
        if (hours < 24) return `${hours}${I18n.t('hours_ago')}`;
        if (days < 7) return `${days}${I18n.t('days_ago')}`;
        
        const lang = I18n.getLang();
        const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
        return date.toLocaleDateString(locale, {
            month: 'short',
            day: 'numeric'
        });
    }

    /**
     * 格式化完整日期
     */
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const lang = I18n.getLang();
        const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
        return date.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    /**
     * 格式化日期分隔符
     */
    function formatDateSeparator(dateStr) {
        const date = new Date(dateStr);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const target = new Date(date);
        target.setHours(0, 0, 0, 0);
        const diffDays = Math.round((today - target) / 86400000);
        
        const lang = I18n.getLang();
        const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
        const formatted = date.toLocaleDateString(locale, {
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
        
        if (diffDays === 0) {
            return I18n.t('date_today') + ' · ' + formatted;
        } else if (diffDays === 1) {
            return I18n.t('date_yesterday') + ' · ' + formatted;
        }
        return formatted;
    }

    /**
     * 获取分类标签颜色（CSS变量用中文key）
     */
    function getCategoryClass(categoryZh) {
        const categoryMap = {
            '大模型': 'var(--cat-大模型)',
            '芯片算力': 'var(--cat-芯片算力)',
            'AI应用': 'var(--cat-AI应用)',
            '开源动态': 'var(--cat-开源动态)',
            '投融资': 'var(--cat-投融资)',
            '政策监管': 'var(--cat-政策监管)'
        };
        return categoryMap[categoryZh] || 'var(--accent-primary)';
    }

    /**
     * 防抖函数
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
     */
    function renderHero(heroData) {
        if (!heroData) return;

        DOM.heroImage.src = heroData.image;
        DOM.heroImage.alt = getLocalizedField(heroData, 'title');
        DOM.heroSource.textContent = getLocalizedField(heroData, 'source');
        DOM.heroDate.textContent = formatDate(heroData.date);
        DOM.heroLink.textContent = getLocalizedField(heroData, 'title');
        DOM.heroLink.href = 'news.html?id=' + (heroData.id || '');
        DOM.heroSummary.textContent = getLocalizedField(heroData, 'summary');
        
        const catZh = heroData.category;
        DOM.heroCategory.textContent = I18n.getCategoryName(catZh);
        DOM.heroCategory.setAttribute('data-category', catZh);
        DOM.heroCategory.style.background = getCategoryClass(catZh);
    }

    /**
     * 创建新闻卡片HTML
     */
    function createNewsCard(article) {
        const catZh = article.category;
        const categoryColor = getCategoryClass(catZh);
        const title = getLocalizedField(article, 'title');
        const summary = getLocalizedField(article, 'summary');
        const source = getLocalizedField(article, 'source');
        const categoryName = I18n.getCategoryName(catZh);
        
        return `
            <article class="news-card" data-id="${article.id}" data-date="${article.date}">
                <div class="news-card-image">
                    <img src="${article.image}" alt="${title}" loading="lazy">
                </div>
                <div class="news-card-body">
                    <div class="news-card-meta">
                        <span class="news-card-source">${source}</span>
                        <span class="news-card-date">${getRelativeTime(article.date)}</span>
                    </div>
                    <h3 class="news-card-title">
                        <a href="news.html?id=${article.id}">${title}</a>
                    </h3>
                    <p class="news-card-summary">${summary}</p>
                    <div class="news-card-footer">
                        <span class="category-tag" data-category="${catZh}" style="background: ${categoryColor}">
                            ${categoryName}
                        </span>
                    </div>
                </div>
            </article>
        `;
    }

    /**
     * 创建日期分隔符HTML
     */
    function createDateSeparator(dateStr) {
        return `
            <div class="date-separator" data-date="${dateStr}">
                <span class="date-separator-line"></span>
                <span class="date-separator-text">${formatDateSeparator(dateStr)}</span>
                <span class="date-separator-line"></span>
            </div>
        `;
    }

    /**
     * 渲染新闻网格（支持多天内容+日期分隔）
     */
    function renderNewsGrid(daysData) {
        if (!daysData || daysData.length === 0) {
            DOM.newsGrid.innerHTML = '';
            DOM.noResults.style.display = 'block';
            return;
        }

        DOM.noResults.style.display = 'none';
        DOM.newsGrid.style.opacity = '0';
        
        setTimeout(() => {
            let html = '';
            
            daysData.forEach(function(dayData, dayIndex) {
                // 添加日期分隔符（第一天的分隔符在hero下方，其他天在卡片之间）
                if (dayIndex === 0) {
                    html += createDateSeparator(dayData.date);
                } else {
                    html += createDateSeparator(dayData.date);
                }
                
                // 渲染该天的文章
                dayData.articles.forEach(function(article) {
                    html += createNewsCard(article);
                });
            });
            
            DOM.newsGrid.innerHTML = html;
            DOM.newsGrid.style.opacity = '1';
        }, CONFIG.animationDuration);
    }

    /**
     * 渲染新闻网格（按分类筛选后，仍然保留日期分隔）
     */
    function renderFilteredNewsGrid(daysData, category) {
        if (!daysData || daysData.length === 0) {
            DOM.newsGrid.innerHTML = '';
            DOM.noResults.style.display = 'block';
            return;
        }

        // 筛选各天中属于该分类的文章
        const filteredDays = daysData.map(function(dayData) {
            return {
                date: dayData.date,
                articles: dayData.articles.filter(function(article) {
                    return article.category === category;
                })
            };
        }).filter(function(dayData) {
            return dayData.articles.length > 0;
        });

        renderNewsGrid(filteredDays);
    }

    // ============================================
    // 深度文章视图
    // ============================================

    /**
     * 加载深度文章数据
     */
    async function loadArticlesData() {
        if (state.articlesData) return state.articlesData;
        try {
            const response = await fetch(CONFIG.articlesUrl);
            if (!response.ok) throw new Error('HTTP error');
            state.articlesData = await response.json();
            return state.articlesData;
        } catch (error) {
            console.error('Failed to load articles data:', error);
            return null;
        }
    }

    /**
     * 创建深度文章卡片HTML
     */
    function createArticleCard(article, index) {
        const catZh = article.category;
        const categoryColor = getCategoryClass(catZh);
        const title = getLocalizedField(article, 'title');
        const summary = getLocalizedField(article, 'summary');
        const categoryName = I18n.getCategoryName(catZh);
        const readMore = I18n.t('articles_read_more');
        const readTime = I18n.t('articles_read_time');
        const delay = 0.1 + index * 0.08;
        const lang = I18n.getLang();
        const articleUrl = (lang === 'en' && article.url_en) ? article.url_en : article.url;

        return `
            <article class="deep-article-card" style="animation-delay: ${delay}s">
                <a href="${articleUrl}" class="deep-article-link">
                    <div class="deep-article-image">
                        <img src="${article.image}" alt="${title}" loading="lazy">
                        <span class="deep-article-number">#${index + 1}</span>
                    </div>
                    <div class="deep-article-body">
                        <div class="deep-article-meta">
                            <span class="category-tag" data-category="${catZh}" style="background: ${categoryColor}">
                                ${categoryName}
                            </span>
                            <span class="deep-article-date">${formatDate(article.date)}</span>
                            ${article.read_time ? '<span class="deep-article-readtime">🕐 ' + readTime + ' ' + article.read_time + '</span>' : ''}
                        </div>
                        <h3 class="deep-article-title">${title}</h3>
                        <p class="deep-article-summary">${summary}</p>
                        <span class="deep-article-readmore">${readMore} →</span>
                    </div>
                </a>
            </article>
        `;
    }

    /**
     * 渲染深度文章视图
     */
    function renderArticlesView(articles) {
        if (!articles || articles.length === 0) {
            DOM.newsGrid.innerHTML = '';
            DOM.noResults.style.display = 'block';
            return;
        }

        DOM.noResults.style.display = 'none';
        DOM.newsGrid.style.opacity = '0';

        // 更新section标题
        var sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.innerHTML = '<span class="title-icon">' + I18n.t('articles_section_icon') + '</span>' + I18n.t('articles_section_title');
        }

        // 更新更新时间显示为文章数量
        var countLabel = I18n.t('articles_count_prefix') + articles.length + I18n.t('articles_count_suffix');
        DOM.lastUpdateTime.textContent = countLabel;

        // 隐藏hero区
        var heroSection = document.querySelector('.hero-section');
        if (heroSection) heroSection.style.display = 'none';

        // 添加文章视图样式标记
        DOM.newsGrid.classList.add('articles-grid-mode');

        setTimeout(function() {
            var html = '';
            articles.forEach(function(article, index) {
                html += createArticleCard(article, index);
            });
            DOM.newsGrid.innerHTML = html;
            DOM.newsGrid.style.opacity = '1';
        }, CONFIG.animationDuration);
    }

    /**
     * 恢复新闻视图（从深度文章视图切回）
     */
    function restoreNewsView() {
        if (!state.isArticleView) return;
        state.isArticleView = false;

        // 恢复section标题
        var sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.innerHTML = '<span class="title-icon">' + I18n.t('section_latest_icon') + '</span>' + I18n.t('section_latest');
        }

        // 恢复hero区
        var heroSection = document.querySelector('.hero-section');
        if (heroSection) heroSection.style.display = '';

        // 移除文章视图样式标记
        DOM.newsGrid.classList.remove('articles-grid-mode');
    }

    /**
     * 渲染本周必读
     */
    function renderMustRead(articles) {
        if (!articles || articles.length === 0) return;

        const topArticles = articles.slice(0, 5);
        
        DOM.mustReadList.innerHTML = topArticles
            .map((article, index) => {
                const title = getLocalizedField(article, 'title');
                const source = getLocalizedField(article, 'source');
                return `
                    <li class="must-read-item" data-id="${article.id}">
                        <span class="must-read-number">${index + 1}</span>
                        <div class="must-read-content">
                            <h4 class="must-read-title">${title}</h4>
                            <span class="must-read-meta">${source} · ${getRelativeTime(article.date)}</span>
                        </div>
                    </li>
                `;
            })
            .join('');

        DOM.mustReadList.querySelectorAll('.must-read-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = item.dataset.id;
                if (id) window.location.href = 'news.html?id=' + id;
            });
        });
    }

    /**
     * 更新最后更新时间
     */
    function updateLastUpdateTime(lastUpdated) {
        DOM.lastUpdateTime.textContent = getRelativeTime(lastUpdated);
    }

    // ============================================
    // UI翻译应用
    // ============================================

    /**
     * 更新页面所有静态UI文本
     */
    function applyUITranslations() {
        const lang = I18n.getLang();

        // 更新html lang属性
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        // 更新页面标题
        document.title = lang === 'zh' 
            ? 'AI News Daily - 每日AI新闻聚合 | 大模型·芯片·AI应用·开源·投融资'
            : 'AI News Daily - Daily AI News Aggregator | LLM · Chips · AI Apps · Open Source · Investment';

        // Hero badge
        if (DOM.heroBadge) DOM.heroBadge.textContent = I18n.t('hero_badge');

        // Section titles
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.innerHTML = `<span class="title-icon">${I18n.t('section_latest_icon')}</span>${I18n.t('section_latest')}`;
        }
        
        // Last update label
        const lastUpdateLabel = document.querySelector('.last-update');
        if (lastUpdateLabel) {
            lastUpdateLabel.innerHTML = `${I18n.t('last_update')}<span id="last-update-time"></span>`;
            // 重新获取DOM引用
            DOM.lastUpdateTime = document.getElementById('last-update-time');
            if (state.newsData) updateLastUpdateTime(state.newsData.last_updated);
        }

        // No results text
        if (DOM.noResults) {
            DOM.noResults.querySelector('p').textContent = I18n.t('no_results');
            DOM.noResults.querySelector('.no-results-icon').textContent = I18n.t('no_results_icon');
        }

        // Sidebar titles
        document.querySelectorAll('.sidebar-title').forEach(el => {
            const icon = el.querySelector('.title-icon');
            const iconText = icon ? icon.textContent : '';
            // 根据内容判断是哪个section
            const nextSibling = el.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains('tag-cloud')) {
                el.innerHTML = `<span class="title-icon">${I18n.t('sidebar_trending_icon')}</span>${I18n.t('sidebar_trending')}`;
            } else if (nextSibling && nextSibling.id === 'must-read-list') {
                el.innerHTML = `<span class="title-icon">${I18n.t('sidebar_deep_icon')}</span>${I18n.t('sidebar_deep')}`;
            } else if (nextSibling && nextSibling.classList.contains('sources-list')) {
                el.innerHTML = `<span class="title-icon">${I18n.t('sidebar_sources_icon')}</span>${I18n.t('sidebar_sources')}`;
            }
        });

        // 深度文章推荐标签
        document.querySelectorAll('.rec-tag').forEach(el => {
            el.textContent = I18n.t('sidebar_deep_tag');
        });

        // 深度文章标题
        document.querySelectorAll('.rec-title').forEach((el, i) => {
            const key = `deep_article_${i + 1}_title`;
            if (I18n.t(key) !== key) el.textContent = I18n.t(key);
        });

        // Footer
        const footerTagline = document.querySelector('.footer-tagline');
        if (footerTagline) footerTagline.textContent = I18n.t('footer_tagline');
        
        document.querySelectorAll('.footer-column h4').forEach((el, i) => {
            if (i === 0) el.textContent = I18n.t('footer_categories');
            else if (i === 1) el.textContent = I18n.t('footer_resources');
            else if (i === 2) el.textContent = I18n.t('footer_about');
        });

        // Footer category links
        const footerCatLinks = document.querySelectorAll('.footer-column:first-child a');
        const catKeys = ['cat_llm', 'cat_chips', 'cat_aiapp', 'cat_opensource', 'cat_investment'];
        footerCatLinks.forEach((link, i) => {
            if (catKeys[i]) link.textContent = I18n.t(catKeys[i]);
        });

        // Footer about links
        const aboutLinkTexts = [I18n.t('nav_about_us'), I18n.t('nav_contact'), I18n.t('nav_privacy'), I18n.t('nav_disclaimer')];
        const footerAboutLinks = document.querySelectorAll('.footer-column:last-child a');
        footerAboutLinks.forEach((link, i) => {
            if (aboutLinkTexts[i]) link.textContent = aboutLinkTexts[i];
        });

        // 导航标签
        updateNavTranslations();

        // 语言切换按钮
        if (DOM.langToggle) {
            DOM.langToggle.textContent = I18n.t('lang_switch_to');
        }

        // 热门标签
        updateTagCloud();

        // 侧边栏深度文章链接 - 英文模式切换到英文版
        const lang = I18n.getLang();
        document.querySelectorAll('.article-rec-item').forEach(link => {
            const href = link.getAttribute('href');
            if (lang === 'en' && href && !href.includes('/en/')) {
                link.setAttribute('href', href.replace('articles/', 'articles/en/'));
            } else if (lang === 'zh' && href && href.includes('/en/')) {
                link.setAttribute('href', href.replace('articles/en/', 'articles/'));
            }
        });
    }

    /**
     * 更新导航栏翻译
     */
    function updateNavTranslations() {
        const navMap = {
            '全部': 'nav_all',
            '大模型': 'nav_llm',
            '芯片算力': 'nav_chips',
            'AI应用': 'nav_aiapp',
            '开源动态': 'nav_opensource',
            '投融资': 'nav_investment',
            '政策监管': 'nav_policy',
            '深度文章': 'nav_articles'
        };

        DOM.navTags.forEach(tag => {
            const cat = tag.dataset.category;
            if (cat && navMap[cat]) {
                tag.textContent = I18n.t(navMap[cat]);
            }
        });
        DOM.mobileNavTags.forEach(tag => {
            const cat = tag.dataset.category;
            if (cat && navMap[cat]) {
                tag.textContent = I18n.t(navMap[cat]);
            }
        });

        // About dropdown
        const dropdownTrigger = document.querySelector('.dropdown-trigger');
        if (dropdownTrigger) dropdownTrigger.textContent = I18n.t('nav_about');
        
        const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
        const aboutKeys = ['nav_about_us', 'nav_contact', 'nav_privacy', 'nav_disclaimer'];
        dropdownLinks.forEach((link, i) => {
            if (aboutKeys[i]) link.textContent = I18n.t(aboutKeys[i]);
        });

        // Mobile about links
        const mobileAboutLinks = document.querySelectorAll('.mobile-nav-tag[href]');
        mobileAboutLinks.forEach((link, i) => {
            if (aboutKeys[i]) link.textContent = I18n.t(aboutKeys[i]);
        });
    }

    /**
     * 更新热门标签翻译
     */
    function updateTagCloud() {
        const tagKeyMap = I18n.tagKeyMap;
        document.querySelectorAll('.hot-tag').forEach(el => {
            const tagZh = el.dataset.tag;
            if (tagKeyMap[tagZh]) {
                el.textContent = I18n.t(tagKeyMap[tagZh]);
            }
        });
    }

    // ============================================
    // 筛选功能
    // ============================================

    function filterNews(category) {
        state.currentCategory = category;
        updateNavTagsState(category);
        
        if (category === '深度文章') {
            // 切换到深度文章视图
            state.isArticleView = true;
            loadArticlesData().then(function(data) {
                if (data && data.articles) {
                    renderArticlesView(data.articles);
                }
            });
            return;
        }
        
        // 如果从深度文章视图切回，恢复新闻视图
        restoreNewsView();
        
        if (!state.newsData || !state.newsData.days) return;
        
        if (category === '全部') {
            renderNewsGrid(state.newsData.days);
            renderHero(state.newsData.days[0].hero);
            updateLastUpdateTime(state.newsData.last_updated);
        } else {
            renderFilteredNewsGrid(state.newsData.days, category);
            const categoryHero = state.newsData.days[0].articles.find(
                article => article.category === category
            );
            if (categoryHero) renderHero(categoryHero);
        }
    }

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

    function initEventListeners() {
        DOM.navTags.forEach(tag => {
            tag.addEventListener('click', () => {
                filterNews(tag.dataset.category);
                closeMobileNav();
            });
        });

        DOM.mobileNavTags.forEach(tag => {
            tag.addEventListener('click', () => {
                if (tag.dataset.category) {
                    filterNews(tag.dataset.category);
                    closeMobileNav();
                }
            });
        });

        DOM.mobileMenuBtn.addEventListener('click', openMobileNav);
        DOM.mobileNavClose.addEventListener('click', closeMobileNav);

        DOM.mobileNav.addEventListener('click', (e) => {
            if (e.target === DOM.mobileNav) closeMobileNav();
        });

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

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileNav();
        });

        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                const msg = I18n.t('img_error');
                e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%231e1e28' width='400' height='250'/%3E%3Ctext fill='%2364748b' font-family='sans-serif' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(msg)}%3C/text%3E%3C/svg%3E`;
            }
        }, true);

        // 语言切换
        if (DOM.langToggle) {
            DOM.langToggle.addEventListener('click', () => {
                I18n.toggle();
            });
        }
    }

    function openMobileNav() {
        DOM.mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        DOM.mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================
    // 数据加载
    // ============================================

    async function loadNewsData() {
        try {
            const response = await fetch(CONFIG.dataUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            state.newsData = data;
            
            // 兼容旧格式：如果没有days字段，包装为新格式
            if (!data.days && data.articles) {
                data.days = [{
                    date: data.hero ? data.hero.date : data.last_updated,
                    hero: data.hero,
                    articles: data.articles
                }];
            }
            
            // 限制最多保留的天数
            if (data.days.length > CONFIG.maxDays) {
                data.days = data.days.slice(0, CONFIG.maxDays);
            }
            
            // 汇总所有文章（用于MustRead等）
            state.allArticles = data.days.flatMap(day => day.articles);
            
            // 渲染最新一天的hero
            renderHero(data.days[0].hero);
            // 渲染所有天的新闻（含日期分隔）
            renderNewsGrid(data.days);
            // MustRead取最新一天的文章
            renderMustRead(data.days[0].articles);
            updateLastUpdateTime(data.last_updated);
            
        } catch (error) {
            console.error('Failed to load news data:', error);
            DOM.newsGrid.innerHTML = `
                <div class="no-results" style="display: block;">
                    <span class="no-results-icon">${I18n.t('load_error_icon')}</span>
                    <p>${I18n.t('load_error')}</p>
                </div>
            `;
        }
    }

    // ============================================
    // 全局语言切换回调
    // ============================================

    window.applyLanguage = function() {
        applyUITranslations();
        if (state.isArticleView && state.articlesData && state.articlesData.articles) {
            renderArticlesView(state.articlesData.articles);
        } else if (state.newsData && state.newsData.days) {
            renderHero(state.newsData.days[0].hero);
            if (state.currentCategory === '全部') {
                renderNewsGrid(state.newsData.days);
            } else {
                renderFilteredNewsGrid(state.newsData.days, state.currentCategory);
            }
            renderMustRead(state.newsData.days[0].articles);
            updateLastUpdateTime(state.newsData.last_updated);
        }
    };

    // ============================================
    // 初始化
    // ============================================

    function init() {
        // 初始化i18n
        I18n.init();
        
        // 添加过渡效果
        DOM.newsGrid.style.transition = `opacity ${CONFIG.animationDuration}ms ease`;
        
        // 初始化事件监听
        initEventListeners();
        
        // 加载数据
        loadNewsData().then(() => {
            // 数据加载后应用翻译
            applyUITranslations();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();