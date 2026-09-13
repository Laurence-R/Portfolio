import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Fast-CLAHE",
    labels: ["Research", "Computer Vision", "GPU", "YOLO26", "Python"],
    description:
      "提出 GPU 加速 CLAHE 前處理模組，以 HDR 輸入避免 clipping，提升夜間物件偵測準確性。",
    highlights: [
      "YOLO26x 夜間 mAP50-95 由 ≈0.41 提升至 0.526+",
      "1200×800 影像前處理 P99 僅約 2.39 ms，可即時部署",
      "不更動下游模型架構即可接入",
    ],
    imgSrc: "/projects/fast-clahe.png",
    githubUrl: "https://github.com/Laurence-R/fast-clahe",
    actions: [],
  },
  {
    title: "Star Dream Nails",
    labels: ["Full-stack", "LINE LIFF", "Supabase", "Next.js", "Booking System"],
    description:
      "為美甲工作室打造 LINE 預約系統，並提供後台管理、形象網站與顧客推播。",
    highlights: [
      "顧客可在網頁或 LINE 完成多步驟預約與動態計價",
      "店家擁有完整後台與財務檢視",
      "已服務 50+ 位顧客，預約效率提升約 75%",
    ],
    imgSrc: "/projects/stardream-nails.png",
    githubUrl: "https://github.com/Laurence-R/stardream-nails",
    actions: [
      {
        label: "前往預約",
        href: "https://stardream-nails.vercel.app/",
      },
    ],
  },
  {
    title: "InvisiGuard",
    labels: ["Cyber Security", "Image", "Watermarking", "AI"],
    description: "在瀏覽器內嵌隱形浮水印，圖檔全程不上傳伺服器。",
    highlights: [
      "以 DWT／QIM 在 Web Worker 完成浮水印",
      "全程 client-side，零資料外流",
    ],
    imgSrc: "/projects/invisiguard.png",
    githubUrl: "https://github.com/Laurence-R/InvisiGuard",
    actions: [
      {
        label: "開啟工具",
        href: "https://invisi-guard.vercel.app/",
      },
    ],
  },
  {
    title: "Professor Personal Website",
    labels: ["Personal Website", "Next.js", "Tailwind CSS", "React"],
    description:
      "將教授個人網站從舊版 Big5 編碼遷移到現代網頁，展示研究、著作與課程。",
    highlights: [
      "以 Next.js 重建，相容現行瀏覽器",
      "集中呈現研究、著作與課程資訊",
    ],
    imgSrc: "/projects/iccweb.png",
    githubUrl: "https://github.com/Laurence-R/icc_web",
    actions: [
      {
        label: "瀏覽網站",
        href: "https://personal-web-icc.vercel.app/",
      },
    ],
  },
];
