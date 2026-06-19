/**
 * AI News Daily - Article Language Switcher
 * Adds a floating language toggle button on article pages
 * Links to the alternate language version of the same article
 */
(function() {
    'use strict';

    // Detect current language from URL path or localStorage
    function getCurrentLang() {
        if (window.location.pathname.includes('/en/')) return 'en';
        var stored = localStorage.getItem('ai_news_lang');
        return stored || 'zh';
    }

    // Build the alternate language URL
    function getAlternateUrl(lang) {
        var path = window.location.pathname;
        if (lang === 'en') {
            // Chinese → English: /articles/article-X.html → /articles/en/article-X.html
            return path.replace('/articles/', '/articles/en/');
        } else {
            // English → Chinese: /articles/en/article-X.html → /articles/article-X.html
            return path.replace('/articles/en/', '/articles/');
        }
    }

    var currentLang = getCurrentLang();
    var targetLang = currentLang === 'zh' ? 'en' : 'zh';
    var targetLabel = targetLang === 'en' ? 'EN' : '中文';
    var targetUrl = getAlternateUrl(targetLang);

    // Sync localStorage with current page language
    localStorage.setItem('ai_news_lang', currentLang);

    // Create floating toggle button
    var btn = document.createElement('a');
    btn.href = targetUrl;
    btn.className = 'article-lang-toggle';
    btn.textContent = targetLabel;
    btn.title = targetLang === 'en' ? 'Read in English' : '阅读中文版';

    // Styles
    var style = document.createElement('style');
    style.textContent = '\
        .article-lang-toggle {\
            position: fixed;\
            top: 20px;\
            right: 20px;\
            z-index: 9999;\
            display: flex;\
            align-items: center;\
            justify-content: center;\
            width: 48px;\
            height: 48px;\
            border-radius: 50%;\
            background: linear-gradient(135deg, #8b5cf6, #6366f1);\
            color: white;\
            font-size: 14px;\
            font-weight: 700;\
            text-decoration: none;\
            box-shadow: 0 4px 15px rgba(99,102,241,0.4);\
            transition: all 0.3s ease;\
            letter-spacing: 0.5px;\
        }\
        .article-lang-toggle:hover {\
            transform: scale(1.1) translateY(-2px);\
            box-shadow: 0 6px 25px rgba(99,102,241,0.6);\
        }\
        @media (max-width: 768px) {\
            .article-lang-toggle {\
                top: 12px;\
                right: 12px;\
                width: 40px;\
                height: 40px;\
                font-size: 12px;\
            }\
        }\
    ';
    document.head.appendChild(style);
    document.body.appendChild(btn);
})();
