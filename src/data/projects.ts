import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Fast-CLAHE",
    labels: ["Research", "Computer Vision", "GPU", "YOLO26", "Python"],
    description:
      "預訓練物件偵測模型在極端夜間道路場景下幾乎失效。我獨立做出以 HDR 影像作為輸入的 GPU 加速 16-bit CLAHE 前處理模組，避免 LDR 輸入造成的 clipping。在不更動下游模型的架構下，YOLO26xl 夜間 mAP50-95 由 ≈0.41 提升至 0.526+，在解析度為 1200x800 的影像下，前處理 P99 僅約 2.39 ms，可即時部署。",
    imgSrc: "/projects/fast-clahe.png",
    demoLink: null,
    sourceLink: "https://github.com/Laurence-R/fast-clahe",
  },
  {
    title: "Star Dream Nails",
    labels: ["Full-stack", "LINE LIFF", "Supabase", "Next.js", "Booking System"],
    description:
      "美甲行業的款式、設計、預約流程有許多模糊不清的地方，因此採用傳統的聯絡預約方式將會耗費大量的時間。我向美甲師了解美甲的商業模式之後，將這些流程自動化，獨立開發出這套系統且省下了約 75% 的時間。本系統採用 Next.js 開發，在 LINE 的 LIFF 上實現多步驟預約、動態計價、後台與推播功能，並持續維護。",
    imgSrc: "/projects/stardream-nails.png",
    demoLink: "https://stardream-nails.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/stardream-nails",
  },
  {
    title: "InvisiGuard",
    labels: ["Cyber Security", "Image", "Watermarking", "AI"],
    description:
      "需要在瀏覽器內嵌隱形浮水印，且圖檔不上傳伺服器。以 DWT／QIM 在 Web Worker 完成，全程 client-side，零資料外流。",
    imgSrc: "/projects/invisiguard.png",
    demoLink: "https://invisi-guard.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/InvisiGuard",
  },
  {
    title: "Professor Personal Website",
    labels: ["Personal Website", "Next.js", "Tailwind CSS", "React"],
    description:
      "教授個人網站需從舊版 Big5 編碼遷移到現代網頁，展示研究、著作與課程。以 Next.js 重建，讓真實使用者能在現行瀏覽器閱讀與瀏覽。",
    imgSrc: "/projects/iccweb.png",
    demoLink: "https://personal-web-icc.vercel.app/",
    sourceLink: "https://github.com/Laurence-R/icc_web",
  },
];
