import type { AboutContent } from "@/types/portfolio";

export const aboutContent: AboutContent = {
  intro: [
    "我是彰師大資訊工程學系大四學生，熟悉全端開發與電腦視覺。能獨立把系統做到上線維護，也能把研究做成可量化的結果。",
    "目前主要專注在 Fast-CLAHE，以及持續維護中的 Star Dream Nails。也曾在 GDG on Campus NCUE 擔任前端講師。課外曾擔任迎新總召，並代表學校取得大專撞球錦標賽團體賽第三名。",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "PyTorch",
    "Supabase",
    "LINE LIFF",
    "GPU",
  ],
  focusLabel: "Current Focus",
  featuredFocus: {
    tabLabel: "Fast-CLAHE",
    badge: "百萬專題計畫",
    title: "Fast-CLAHE — GPU 加速夜間 HDR 前處理",
    description:
      "提出 GPU 加速 CLAHE 前處理模組，透過 HDR 的特性避免 Data Clipping，提升夜間物件偵測準確性。",
    highlights: [
      "YOLO26xl 夜間 mAP50-95 由 ≈0.41 提升至 0.526+",
      "前處理模組處理 1200x800 解析度影像的 P99 延遲僅約 2.39 ms",
    ],
    tags: ["CLAHE", "PyTorch", "GPU", "Real-time", "TensorRT", "YOLO26"],
    githubUrl: "https://github.com/Laurence-R/fast-clahe",
  },
  secondaryFocus: [
    {
      tabLabel: "Star Dream Nails",
      title: "Star Dream Nails — 服務預約系統",
      description:
        "為美甲工作室打造 LINE 預約系統，並提供後台管理、形象網站與顧客推播。持續維護中。",
      highlights: [
        "顧客可在 LINE 內完成多步驟預約與動態計價",
        "店家擁有後台管理服務、顧客管理、預約訂單管理、推播通知預約事件等功能",
      ],
      tags: ["Next.js", "LINE LIFF", "Supabase", "Full-stack"],
      demoUrl: "https://stardream-nails.vercel.app/",
      githubUrl: "https://github.com/Laurence-R/stardream-nails",
    },
  ],
};
