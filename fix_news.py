#!/usr/bin/env python3
import json

with open('data/news.json') as f:
    d = json.load(f)
with open('data/articles.json') as f:
    a = json.load(f)

a59 = a['articles'][0]

# First, restore 07-29 day with correct articles (from yesterday's backup)
# The current days[0] has 07-29 articles overwritten with 07-30 content
# The hero is correct (article-58), only the articles need fixing
# Since we already had the correct articles in the production version yesterday,
# let me restore them from the git history

# Actually, let me just check what's in the current days[2] (07-27) - 
# those should be the correct format articles from the original
print("Sample article from days[2]:", d['days'][2]['articles'][0]['title'][:50])

# The simplest approach: the days[0] currently has 07-30 articles but labeled as 07-29
# I need to:
# 1. Create a new 07-30 day with those articles + article-59 hero
# 2. Restore 07-29 day with correct articles

# Let me just build the 07-30 day from the current days[0] articles + new hero
day_30_articles = d['days'][0]['articles']
for art in day_30_articles:
    art['date'] = '2026-07-30'

new_day_30 = {
    "date": "2026-07-30",
    "hero": {
        "id": "article-59",
        "title": a59['title'],
        "title_en": a59['title_en'],
        "summary": a59['summary'],
        "summary_en": a59['summary_en'],
        "image": a59.get('image', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop'),
        "category": a59['category'],
        "category_en": a59.get('category_en', 'LLM'),
        "date": "2026-07-30",
        "url": "/articles/article-59.html",
        "url_en": "/articles/en/article-59.html"
    },
    "articles": day_30_articles
}

# Now restore 07-29 day - need the correct articles from yesterday
# The 07-29 articles should be about: 中国大模型调用量, 英伟达SSI, MCP升级, etc.
# I'll retrieve them from git
import subprocess
result = subprocess.run(
    ['git', 'show', '771845f:data/news.json'],
    capture_output=True, text=True, cwd='.'
)
if result.returncode == 0:
    old_news = json.loads(result.stdout)
    # Find the 07-29 day in the old version
    for day in old_news['days']:
        if day['date'] == '2026-07-29':
            d['days'][0] = day
            print(f"Restored 07-29 day with {len(day['articles'])} articles")
            break

# Insert 07-30 at position 0
d['days'].insert(0, new_day_30)
# Keep only 5 days
d['days'] = d['days'][:5]
d['last_updated'] = '2026-07-30'

with open('data/news.json', 'w') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)

print("\nFinal state:")
for day in d['days']:
    print(f"  {day['date']}: {len(day['articles'])} articles, hero: {day['hero']['title'][:30]}")
print(f"last_updated: {d['last_updated']}")