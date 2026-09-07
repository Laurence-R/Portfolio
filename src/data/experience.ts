import type { ExperienceEntry } from "@/types/portfolio";

export const experienceEntries: ExperienceEntry[] = [
  {
    date: "2025 — 今",
    title: "Fast-CLAHE — 百萬專題計畫",
    description:
      "負責 GPU 加速夜間 HDR 前處理模組。YOLO26xl 夜間 mAP50-95 由 ≈0.41 提升至 0.526+，前處理 P99 約 2.39 ms，可即時部署。",
    imageSrcs: ["/projects/fast-clahe.png"],
  },
  {
    date: "2025 — 今",
    title: "Star Dream Nails — 獨立全端開發與維護",
    description:
      "為美甲工作室獨立交付 LINE 預約、後台與推播，系統已上線並持續維護。",
    imageSrcs: ["/projects/stardream-nails.png"],
  },
  {
    date: "2025/09",
    title: "GDG on Campus NCUE 前端講師",
    description:
      "在 Google Developer Group on Campus NCUE 擔任前端工程講師，整理並分享前端實作與學習路徑。",
    imageSrcs: [
      "/experience/gdg_course_1.webp",
      "/experience/gdg_course_2.webp",
      "/experience/gdg_course_3.webp",
      "/experience/gdg_course_4.webp",
    ],
  },
  {
    date: "2025/09",
    title: "取得 Meta React 課程認證",
    description:
      "完成 Meta 的 React 基礎與進階課程並取得認證。",
    imageSrcs: ["/experience/meta_react_cert.jpg"],
  },
];
