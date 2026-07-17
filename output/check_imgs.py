import os
pool_dir = '/app/data/所有对话/主对话/ai-news-site/img/pool/'
images = [
    'industry-predictive.jpg',
    'robotics-factory-v3.jpg',
    'datacenter-cooling.jpg',
    'opensource-foundation-v3.jpg',
    'datacenter-green.jpg',
    'llm-agentic-ai.jpg',
    'opensource-huggingface-v3.jpg',
    'industry-robot-arm.jpg',
    'investment-mergers-v3.jpg',
    'llm-finetune-v3.jpg',
    'autonomous-robotaxi-v3.jpg',
    'network-quantum.jpg',
    'opensource-contribution-v3.jpg',
]
fail = 0
for img in images:
    p = os.path.join(pool_dir, img)
    ok = os.path.exists(p)
    if not ok:
        fail += 1
        print(f"MISSING: {img}")
    else:
        print(f"OK: {img}")
print(f"Total: {len(images)} images, {fail} missing")
