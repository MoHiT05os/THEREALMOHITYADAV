# TRMY — TheRealMohitYadav
## Master Specification Document
**Version:** 1.0 | **Date:** June 2026 | **Owner:** Mohit Kumar Yadav

---

## 0. WHO IS TRMY

**TheRealMohitYadav (TRMY)** is the personal operating system of Mohit Kumar Yadav — a 3rd-year B.Tech CSE (AI/ML) student at UPES Dehradun, ISRO intern, and founder-in-progress building toward a Physical AI and autonomous robotics company.

TRMY is not a personal brand. It is the **public architecture of a life's work** — the name, face, and gravitational center of everything Mohit builds, writes, and ships.

### Core identity
- **Title:** The Translator
- **Mission:** Make civilization-scale technology (AI, robotics, space, Physical AI) legible to builders, students, and early-career engineers
- **Voice:** Direct, specific, ambitious. Not a commentator — a builder who explains
- **End destination:** Founding a Physical AI / embodied robotics company (DHRUVA SYSTEMS or VAJRA INDUSTRIES) comparable in ambition to Boston Dynamics or DeepMind Robotics
- **Chapter right now:** ISRO intern → ROS2 → robotics prototype → company

### The TRMY universe (sub-brands)
| Sub-brand | Purpose | Platform |
|---|---|---|
| @MOHITCREATES | Public content — breakdowns, takes, explainers | LinkedIn, Medium, YouTube |
| @MOHITBUILDS | Live project documentation — real work in public | LinkedIn series, website |
| @MOHITLABS | Research decodes, experiments, ablations | Medium, newsletter |
| DHRUVA / VAJRA | The company (future) | Built in public from day one |

---

## 1. THE WEBSITE — therealMohitYadav.com

### 1.1 Purpose
The website is the **single source of truth** for Mohit Yadav. Every link in every bio points here. It must answer three questions in under 10 seconds:
1. Who is this person?
2. What have they built?
3. Why does it matter?

### 1.2 Tech stack
- **Builder:** Google's Project IDX (anti-gravity) or equivalent web IDE
- **Framework:** Preferred — Next.js (React) or plain HTML/CSS/JS if speed is priority
- **Hosting:** Vercel (free tier sufficient for v1)
- **Domain:** therealMohitYadav.com or mohityadav.dev (check availability)
- **Analytics:** Vercel Analytics or Plausible (privacy-first)

### 1.3 Page architecture

#### v1 (Launch by June 14, 2026) — Single page
All sections on one scrollable page. Fast to ship. Covers everything needed.

```
/
├── Hero
├── About
├── Projects
├── TRMY Universe (sub-brands)
├── Writing (Medium feed embed)
├── Now (what I'm working on)
├── Newsletter signup
└── Contact / Connect
```

#### v2 (August 2026) — Multi-page
```
/
├── index (home)
├── /projects (full case studies)
├── /writing (Medium articles)
├── /isro (ISRO chapter — exclusive)
├── /now (live status page)
├── /consulting (services + inquiry form)
└── /newsletter
```

---

## 2. WEBSITE — SECTION-BY-SECTION SPEC

### Section 1 — Hero

**Purpose:** Stop the scroll. Communicate identity in one line.

**Elements:**
- [ ] Name: "Mohit Kumar Yadav"
- [ ] Title line: "Building Physical AI. Translating civilization-scale technology."
- [ ] Sub-line: "ISRO intern. @MOHITCREATES. Founder-in-progress."
- [ ] Primary CTA button: "See what I'm building →" (anchors to Projects)
- [ ] Secondary CTA: "Read my writing" (opens Medium in new tab)
- [ ] Social links row: LinkedIn | Medium | GitHub | YouTube (icons)
- [ ] Profile photo or abstract identity graphic (TRMY mark)

**Design notes:**
- Clean, white or very light background
- Name in large weight (not ALL CAPS)
- No gradients, no particle effects — the words should be enough
- Mobile-first

---

### Section 2 — About

**Purpose:** Convert a visitor into a follower. Tell the story, not the resume.

**Content template:**
> I'm Mohit — a final-year engineering student who decided early that the most interesting problems in technology aren't software problems. They're physical ones.
>
> I build at the intersection of computer vision, AI, and robotics. My flagship project is a multi-camera Re-ID pipeline (YOLOv10/11, ByteTrack, OSNet) that tracks people across camera networks without identity cards. I'm currently interning at IIRS, ISRO Dehradun, working on NISAR L-band SAR satellite data under Dr. Shashi Kumar.
>
> I run @MOHITCREATES — a content platform that translates frontier AI and robotics research into usable signal for engineers and builders. And I'm building toward founding a Physical AI company before I'm 30.

**Elements:**
- [ ] 2–3 paragraph narrative (above is a draft)
- [ ] Key facts row: UPES Dehradun | AI/ML + Electronics | CGPA 8.34 | Graduating 2027
- [ ] Current status badge: "Currently @ IIRS, ISRO — June–August 2026"

---

### Section 3 — Projects

**Purpose:** Prove technical depth. Each project = a case study, not a bullet.

**Project cards required:**

- [ ] **Re-ID Pipeline** *(flagship)*
  - Tech: YOLOv10/11, ByteTrack, OSNet
  - What it does: Multi-camera person re-identification without biometric data
  - Status: Built
  - Links: GitHub, demo video if available

- [ ] **ISRO — NISAR SAR Analysis** *(in progress)*
  - Tech: L-band SAR, GCOV products, SNAP/ISCE3, h5py
  - What it does: Processing real satellite data for earth observation science
  - Status: Active — June–August 2026
  - Note: First results to be published end of internship

- [ ] **Virtual Try-On — Indian Traditional Clothing**
  - Tech: Generative AI, diffusion models
  - Status: Built

- [ ] **Tri-Model Emergence System** *(EMERGENCE)*
  - Tech: Vision + reasoning + generative AI — classroom engagement monitoring
  - Status: Built, academic report complete

- [ ] **RAG-Based Legal Advisor Agent**
  - Tech: LangChain, FAISS, LLMs
  - Status: Built

- [ ] **AI Agent Fast Stack — Interactive Artifact**
  - Tech: React, Vercel deploy
  - What it does: 7-layer production AI agent architecture explorer
  - Status: Live — [ai-agent-infographic-2026.vercel.app](https://ai-agent-infographic-2026.vercel.app)
  - Also on: Gumroad (digital product)

- [ ] **Plastic Waste Detection**
  - Tech: YOLOv8, Detectron2

- [ ] **Integrated Traffic Control**
  - Tech: YOLO + OpenCV

- [ ] **LLM AI Agent with Tool Use**
  - Tech: LangChain

- [ ] **AI Workflow Automation Suite**
  - Tech: n8n, REST APIs

**Card design spec:**
- Project name (large)
- One-line what it does
- Tech stack tags (pills)
- Status badge (Built / Active / Planned)
- Links: GitHub | Live demo | Case study

---

### Section 4 — The TRMY Universe

**Purpose:** Show the architecture. Let visitors understand that TRMY is bigger than one platform.

**Elements:**
- [ ] 4-card grid: MOHITCREATES | MOHITBUILDS | MOHITLABS | [Company]
- [ ] Each card: name, one-line purpose, link to platform
- [ ] "Why TRMY?" — one paragraph explaining the philosophy

---

### Section 5 — Writing

**Purpose:** Showcase the content. Pull Medium articles automatically if possible.

**Elements:**
- [ ] Last 3–5 Medium articles (title, date, read time, link)
- [ ] "Read all on Medium →" CTA
- [ ] Optional: Featured article at top (manually set)

---

### Section 6 — Now

**Purpose:** The "/now" concept — a live status page showing what Mohit is working on right now. Builds authenticity. Updates monthly.

**Elements:**
- [ ] Current project: ISRO internship — NISAR L-band SAR
- [ ] Currently learning: [update monthly]
- [ ] Currently reading: [update monthly]
- [ ] Currently building: [update monthly]
- [ ] Last updated date stamp

---

### Section 7 — Newsletter

**Purpose:** Capture emails before they leave. The list is the most durable asset.

**Elements:**
- [ ] Headline: "The TRMY Letter"
- [ ] Sub: "One email per week. Curated signal from the frontier of AI, robotics, and Physical AI — plus what I'm building."
- [ ] Email input + subscribe button
- [ ] Platform: Beehiiv (recommended) or Substack
- [ ] Social proof: "Join [X] engineers and builders"
- [ ] No-spam promise (one line)

---

### Section 8 — Contact

**Elements:**
- [ ] Email (displayed or via form)
- [ ] LinkedIn link (primary)
- [ ] "Open to: Collaborations | Speaking | Consulting | Internship opportunities"
- [ ] Optional: Calendly embed for direct booking

---

## 3. BRAND IDENTITY SPEC

### 3.1 Name hierarchy
```
TRMY (TheRealMohitYadav)
  └── @MOHITCREATES  (content)
  └── @MOHITBUILDS   (build log)
  └── @MOHITLABS     (research)
  └── [Company name] (future)
```

### 3.2 Voice and tone
- **Direct.** No hedging. No "I think maybe." State things.
- **Specific.** Numbers over adjectives. "43% faster" not "much faster."
- **Ambitious without arrogance.** You're building something hard. Say so plainly.
- **Peer-to-peer.** Talk to senior engineers and founders as peers, not as a student.
- **Translation-first.** Every piece of content should make something complex clear.

### 3.3 Phrases to use
- "Building Physical AI"
- "Translating civilization-scale technology"
- "ISRO → Robotics → Company"
- "Not a commentator — a builder who explains"

### 3.4 Phrases to never use
- "Passionate about" (everyone is)
- "Aspiring [anything]" (you are already doing it)
- "I am just a student" (never apologize for your stage)
- "Excited to share" (just share it)

### 3.5 Visual identity (v1 — minimal)
- Primary color: Deep purple (#26215C) — TRMY anchor
- Accent: Teal (#1D9E75) — action and energy
- Warning/highlight: Amber (#BA7517)
- Background: White or near-white
- Font: Inter or DM Sans (free, clean, technical)
- No logo needed for v1 — name in font is the mark

---

## 4. LINKEDIN GRAND LAUNCH — Step by Step

### Phase 0 — Profile overhaul (before first post)

**Do this before publishing anything.**

- [ ] **Headline:** "Building Physical AI | @MOHITCREATES | ISRO Intern | CS + AI/ML @ UPES"
  - Alt option: "The Translator | CV + Robotics Engineer | ISRO × NISAR | Founder-in-progress"
- [ ] **Banner image:** Custom — TRMY wordmark or "TheRealMohitYadav" on clean background with MOHITCREATES tagline
- [ ] **Profile photo:** Professional, high contrast, looking directly at camera
- [ ] **About section:** 5-paragraph version of the About section above. End with CTA: "Follow for weekly breakdowns on AI, robotics, and what's being built at the frontier."
- [ ] **Featured section:** Pin 3 items:
  - The YOLO v2.6 post (15K impressions — your proof of traction)
  - The AI Agent Stack artifact (Vercel link)
  - therealMohitYadav.com (once live)
- [ ] **Experience:** Add ISRO internship with proper title and Dr. Shashi Kumar's name
- [ ] **Skills:** Prioritize: Computer Vision, PyTorch, Object Detection, ROS2, SAR Remote Sensing, LangChain
- [ ] **Custom URL:** linkedin.com/in/therealMohitYadav or /mohityadav-trmy

---

### Phase 1 — The return (Week 1, June 7–14)

**Post cadence: 5 posts this week. The algorithm needs a signal surge.**

#### Post 1 — Day 1 (June 7 or 8): The comeback
```
Hook: "I went quiet for 20 days. Here's what I was building."

Body:
- 3 things built during the silence (website, product, ISRO prep)
- The TRMY announcement — what it is, why it exists
- The arc: ISRO → Robotics → Company

Format: Text post, medium length (8–10 lines)
CTA: "What are you building this summer? Drop it below."
Tags: #TRMY #BuildingInPublic #PhysicalAI
```

#### Post 2 — Day 3: Technical breakdown (YOLO formula)
```
Hook: [Pick the hottest CV/AI news from that week]
Format: Bullet breakdown, 5–7 points, one company tag, 3 hashtags
CTA: Practitioner-to-practitioner question
```

#### Post 3 — Day 5: Controversial take
```
Topic: "The AI framework debate is the wrong conversation. Here's what actually matters."
Format: Short — 6 lines max. Opinion. Let comments disagree.
CTA: "What do you think?"
```

#### Post 4 — Day 7: ISRO teaser
```
Hook: "In [X] days I walk into IIRS Dehradun to work on real NISAR satellite data."
Body: What NISAR is, why it matters, what I'll be doing
CTA: "Follow @MOHITBUILDS for the raw documentation."
Format: Medium length, one image if possible (NISAR graphic)
```

#### Post 5 — Day 10: Artifact drop
```
Action: Re-release the AI Agent Stack artifact with a shorter, tighter caption
Caption max: 4 lines. Let the tool speak.
Link in first comment (not the post itself — LinkedIn suppresses external links in posts)
```

---

### Phase 2 — Volume and velocity (Weeks 2–3)

**Cadence: 3 posts per week minimum. Never more than 3 days between posts.**

**Content mix per week:**
- 1 × Technical breakdown (YOLO formula — company tag, specific numbers)
- 1 × Build log / personal update (MOHITBUILDS)
- 1 × Opinion / take / provocation (short, generates comments)

**Engagement rules:**
- Reply to every comment within 24 hours, minimum
- Comment on 5 posts per day from accounts in your target audience (CV engineers, founders, AI builders)
- Never comment "Great post!" — always add a specific technical or contextual point

---

### Phase 3 — ISRO era (Mid-June onward)

**This is your moat. No one else has this content.**

**Weekly ISRO content:**
- [ ] Day 1 post: "I just walked into IIRS Dehradun. Here's what the first day looked like."
- [ ] Weekly reflection: What working with real satellite data taught me this week
- [ ] Technical drop: One specific thing you learned — as specific as confidentiality allows
- [ ] Keep @MOHITCREATES content alive in parallel — don't go mono-topic

**Content you're allowed to post about ISRO (general guidance):**
- Your experience and learning (always fine)
- Public NISAR mission details (publicly available)
- Methodology you're applying (if not proprietary)
- Team structure and work culture (with discretion)

**Content to clear with supervisor first:**
- Specific results or findings
- Internal tools or data pipelines
- Anything mentioning classified or pre-release data

---

## 5. PENDING ACTIONS — Master Checklist

### Immediate (This week — June 7–14)

- [ ] Update LinkedIn profile (headline, banner, about, featured)
- [ ] Register domain: therealMohitYadav.com
- [ ] Set up Vercel account for hosting
- [ ] Set up Beehiiv account for newsletter
- [ ] Write and publish comeback post (Day 1)
- [ ] Package AI Agent Stack artifact on Gumroad — set price at $9
- [ ] Create TRMY banner image for LinkedIn

### Short-term (June 14–30)

- [ ] Build and launch website v1 (single page, all 8 sections)
- [ ] Publish 8–10 LinkedIn posts (Phase 1 + Phase 2)
- [ ] ISRO internship begins — Day 1 post ready in draft before you arrive
- [ ] Medium: Write first TRMY-era long-form article (expand the best LinkedIn post)
- [ ] Set up newsletter — first issue within 2 weeks of launch

### Medium-term (July–August)

- [ ] ISRO weekly content series running
- [ ] Website v2 planning (project case studies, consulting page)
- [ ] Gumroad: Second digital product (Notion template or CV engineering toolkit)
- [ ] LinkedIn: Hit 2,000 followers milestone
- [ ] YouTube: Record first video (script already exists from TERAFAB blueprint)
- [ ] Define company name — DHRUVA SYSTEMS vs VAJRA INDUSTRIES — decide by Aug 1

### Ongoing

- [ ] Post 3× per week on LinkedIn — no gaps longer than 3 days
- [ ] Reply to all comments within 24 hours
- [ ] Update /now page on website monthly
- [ ] 1 Medium article per week (can be expanded LinkedIn post)
- [ ] 1 newsletter issue per week

---

## 6. MONETIZATION ROADMAP

### Tier 1 — Now (0–1,000 followers)
| Product | Platform | Price | Status |
|---|---|---|---|
| AI Agent Fast Stack artifact | Gumroad | $9–19 | Ready to package |
| Notion CV/AI workflow template | Gumroad | $9 | Build in 1 day |
| Resume review (async) | Gumroad / DMs | $19–29 | Offer after 500 followers |

### Tier 2 — Soon (1,000–5,000 followers)
| Product | Platform | Price | Status |
|---|---|---|---|
| CV engineering consulting (1:1) | Calendly + Stripe | $50–100/hr | Launch at 2K followers |
| "Build your first Re-ID pipeline" guide | Gumroad | $29–49 | After ISRO internship |
| Company AI stack audit (async) | Direct | $200–500 | Launch at 3K followers |

### Tier 3 — Later (5,000+ followers)
| Product | Platform | Price | Status |
|---|---|---|---|
| Physical AI / CV cohort (20 seats) | Cohort platform | $299–499 | After 10K followers |
| TRMY sponsorships (Ultralytics, CV tools) | Direct outreach | $500–2000/post | After 5K followers |
| Speaking engagements | Direct | Variable | After ISRO chapter lands |

---

## 7. CONTENT CALENDAR — JUNE 2026

| Date | Type | Hook / Topic | Sub-brand |
|---|---|---|---|
| June 7–8 | Comeback post | "I went quiet for 20 days. Here's what I was building." | TRMY |
| June 10 | Technical breakdown | Latest CV/AI news — YOLO formula | MOHITCREATES |
| June 12 | Opinion | "The AI framework debate is the wrong conversation" | MOHITCREATES |
| June 14 | ISRO teaser | "In X days I join IIRS Dehradun" | MOHITBUILDS |
| June 15 | Artifact drop | AI Agent Stack — tight caption, link in comment | MOHITCREATES |
| June 17 | Paper decode | 1 relevant CV/SAR paper this week | MOHITLABS |
| June 19 | Physical AI take | "Why I'm building robots, not apps" | TRMY |
| Mid-June | ISRO Day 1 | "I just walked into IIRS Dehradun." | MOHITBUILDS |
| Ongoing | Weekly ISRO | Reflection, technical drop, what I learned | MOHITBUILDS |
| Ongoing | 2× per week | Technical breakdown + opinion/take | MOHITCREATES |

---

## 8. METRICS — What success looks like

### 30-day targets (by July 7)
- LinkedIn impressions: 100,000+ (from 54K total in 12 months — this is achievable in one good month)
- New followers: 500+
- Website live: Yes
- Newsletter subscribers: 100+
- Gumroad revenue: First sale

### 90-day targets (by September 7)
- LinkedIn impressions: 500,000+ cumulative this summer
- Followers: 3,000+
- Newsletter: 500+ subscribers
- Medium: 5+ articles, Top Creator status maintained
- Gumroad: 50+ sales

### End of year targets (December 2026)
- LinkedIn followers: 10,000+
- Newsletter: 2,000+ subscribers
- Revenue: First ₹50,000 from digital products
- Company name registered
- YouTube: First 10 videos live

---

## 9. NOTES FOR THE AI BUILDER (Google IDX / Cursor / etc.)

If you are an AI assistant reading this file to build the TRMY website:

1. **Read this entire file first.** The website is an expression of TRMY, not a generic portfolio.
2. **The hero section is the most important.** Spend 50% of your design energy here.
3. **Every word matters.** Do not use placeholder text like "Lorem ipsum." Use the actual copy from Section 2.
4. **Projects are case studies, not bullet points.** Each project card should tell a mini-story.
5. **The /now page is non-negotiable.** It's what makes this feel alive, not static.
6. **Mobile-first.** Most of the LinkedIn audience will click the link on mobile.
7. **Speed over perfection.** v1 should be live in one week. v2 can be polished.
8. **Newsletter signup goes above the fold on mobile.**
9. **No dark mode required for v1.** Clean white, fast, readable.
10. **Test every link before considering it done.**

---

*Last updated: June 7, 2026*
*Owner: Mohit Kumar Yadav — TheRealMohitYadav*
*Contact: [your email]*
