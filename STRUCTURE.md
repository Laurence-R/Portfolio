## 專案結構

```
my-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/           # 建議：布局相關
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/         # 建議：頁面區塊
│   │   ├── hero-modern.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   └── ui/              # shadcn/ui 元件
├── lib/
│   ├── utils.ts
│   ├── types/           # 或直接 types/
│   │   └── projectData.ts
│   └── constants/       # 或直接 constants/
│       └── projectData.ts
├── public/
│   ├── NCUE_seal.svg
│   └── projects/
└── ...
```