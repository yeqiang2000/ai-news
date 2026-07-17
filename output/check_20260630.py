import os, json, re

base = "/app/data/所有对话/主对话/ai-news-site"

# 走到第 1 级：文件存在 & 字节数
print("=== 1. 文件存在与字节数 ===")
files = [
    f"{base}/articles/article-29.html",
    f"{base}/articles/en/article-29.html",
    f"{base}/output/news-day-20260630.json",
    f"{base}/output/article-meta-20260630.json",
    f"{base}/wechat/wechat-2026-06-30.html",
    f"{base}/toutiao/toutiao-2026-06-30.md",
]
for f in files:
    exist = os.path.exists(f)
    size = os.path.getsize(f) if exist else 0
    print(f"  exists={exist} size={size:>6}B  {os.path.basename(f)}")

# 走到第 2 级：所有 13 张图存在
print("\n=== 2. 13 张图片 os.path.exists 校验 ===")
imgs = [
    "img/pool/industry-predictive.jpg",
    "img/pool/robotics-factory-v3.jpg",
    "img/pool/datacenter-cooling.jpg",
    "img/pool/opensource-foundation-v3.jpg",
    "img/pool/datacenter-green.jpg",
    "img/pool/llm-agentic-ai.jpg",
    "img/pool/opensource-huggingface-v3.jpg",
    "img/pool/industry-robot-arm.jpg",
    "img/pool/investment-mergers-v3.jpg",
    "img/pool/llm-finetune-v3.jpg",
    "img/pool/autonomous-robotaxi-v3.jpg",
    "img/pool/network-quantum.jpg",
    "img/pool/opensource-contribution-v3.jpg",
]
fail = 0
for img in imgs:
    p = os.path.join(base, img)
    ok = os.path.exists(p)
    if not ok:
        fail += 1
        print(f"  ✗ MISSING: {img}")
    else:
        print(f"  ✓ {img}")
print(f"  fail count = {fail}")

# 走到第 3 级：JSON 合法性
print("\n=== 3. JSON 解析校验 ===")
for jf in [f"{base}/output/news-day-20260630.json", f"{base}/output/article-meta-20260630.json"]:
    try:
        data = json.load(open(jf, "r", encoding="utf-8"))
        if "news-day" in jf:
            arts = data.get("articles", [])
            print(f"  ✓ {os.path.basename(jf)}  顶级键有 articles={len(arts)}, hero 存在={('hero' in data)}")
            # 每条 14 字段
            need = ["id","date","category","category_en","title","title_en","summary","summary_en","source","source_en","image","content","content_en","key_points","key_points_en","url"]
            for i, a in enumerate(arts, 1):
                missing = [k for k in need if k not in a]
                if missing:
                    print(f"    ✗ news-{i} 缺字段: {missing}")
            # hero 11 字段
            hero_need = ["id","title","title_en","image","date","source","source_en","summary","summary_en","category","category_en"]
            hero = data.get("hero", {})
            hm = [k for k in hero_need if k not in hero]
            if hm:
                print(f"    ✗ hero 缺字段: {hm}")
        else:
            need = ["id","date","title_zh","title_en","subtitle_zh","subtitle_en","url_zh","url_en","summary_zh","summary_en","category","category_en","image","read_time"]
            missing = [k for k in need if k not in data]
            print(f"  ✓ {os.path.basename(jf)}  字段齐={'是' if not missing else 'NO'}, missing={missing}")
    except Exception as e:
        print(f"  ✗ {jf} JSON 错误: {e}")

# 走到第 4 级：中文双引号检查（应该 0 个）
print("\n=== 4. 中文双引号 \u201C \u201D 检查（必须 0 个） ===")
for f in files:
    if not os.path.exists(f):
        continue
    txt = open(f, "r", encoding="utf-8").read()
    cn_dq = txt.count("\u201C") + txt.count("\u201D")
    print(f"  {os.path.basename(f)}: 中文双引号 = {cn_dq}")

# 走到第 5 级：news url 唯一性 & 真实性
print("\n=== 5. news url 检查 ===")
data = json.load(open(f"{base}/output/news-day-20260630.json", "r", encoding="utf-8"))
urls = [a["url"] for a in data["articles"]]
print(f"  共 {len(urls)} 条 url, 唯一 = {len(set(urls))}")
for u in urls:
    print(f"   - {u}")

# 走到第 6 级：微信文件 table border 检查
print("\n=== 6. 微信文件 677 table 布局 + border 检查 ===")
wx = open(f"{base}/wechat/wechat-2026-06-30.html", "r", encoding="utf-8").read()
print(f"  width=\"677\" 出现: {wx.count('width=\"677\"')}")
print(f"  border:none / border: none 出现: {wx.count('border: none') + wx.count('border:none')}")
print(f"  border-collapse:collapse 出现: {wx.count('border-collapse: collapse') + wx.count('border-collapse:collapse')}")
print(f"  border-left:4px solid #6366f1 出现: {wx.count('border-left: 4px solid #6366f1') + wx.count('border-left:4px solid #6366f1')}")
print(f"  原创声明含『晓色』: {'晓色' in wx}")
print(f"  含 The End: {'The End' in wx}")

# 走到第 7 级：article-29 内联 style + 图片路径
print("\n=== 7. article-29 内联 style 与图片路径 ===")
zh = open(f"{base}/articles/article-29.html", "r", encoding="utf-8").read()
en = open(f"{base}/articles/en/article-29.html", "r", encoding="utf-8").read()
print(f"  zh 内联 <style> 块: {'<style>' in zh}")
print(f"  en 内联 <style> 块: {'<style>' in en}")
print(f"  zh hero img 路径: ../img/pool/industry-predictive.jpg in zh = {'../img/pool/industry-predictive.jpg' in zh}")
print(f"  en hero img 路径: ../../img/pool/industry-predictive.jpg in en = {'../../img/pool/industry-predictive.jpg' in en}")
print(f"  zh h2 数量: {zh.count('<h2>')}")
print(f"  en h2 数量: {en.count('<h2>')}")
print(f"  zh deep-article class: {'deep-article' in zh}")
print(f"  en deep-article class: {'deep-article' in en}")
