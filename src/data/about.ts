import type { AboutContent } from "@/types/portfolio";

export const aboutContent: AboutContent = {
  intro: [
    "我目前就讀彰師大資訊工程學系大四，非常喜歡探索資訊技術。從零基礎到全端開發，到人工智慧再到影像處理領域，雖然我涉及了多個程式語言與領域，但我更重視的是如何運用這些技術來解決實際問題，創造有意義的成果。",
    "在 AI 時代下，工程師的價值不再是單純的程式碼撰寫，而是如何將技術與創意結合，打造出真正有用且具影響力的解決方案。目前專注於百萬專題 Fast-CLAHE 與全端實作接案。",
    "同時作為 Google Developer Group on Campus NCUE 的一員，我樂於在社群中分享、探索新技術，與志同道合的人一起推動技術向前。",
  ],
  focusLabel: "Current Focus",
  featuredFocus: {
    tabLabel: "Fast-CLAHE",
    badge: "百萬專題計畫",
    title: "Fast-CLAHE — GPU 加速夜間 HDR 前處理",
    description:
      "提出 GPU 加速 CLAHE 前處理模組，在不大幅改動後端模型的前提下，賦予 YOLO26 的夜間物件偵測能力。",
    highlights: [
      "夜間 mAP50 由 ≈0.001 提升至 0.67+",
      "前處理 P99 延遲約 2.39 ms，可即時部署",
    ],
    tags: ["CLAHE", "PyTorch", "GPU", "Real-time", "TensorRT", "YOLO26"],
    githubUrl: "https://github.com/Laurence-R/fast-clahe",
  },
  secondaryFocus: [
    {
      tabLabel: "Edge AI",
      title: "Privacy-First Edge AI Monitor",
      description:
        "裝置端處理敏感影像、僅上傳匿名熱區事件，在隱私保護下協助零售陳列決策。",
    },
    {
      tabLabel: "Stardream Nails",
      title: "Stardream Nails — 全端接案",
      description:
        "為美甲工作室打造 LINE LIFF 預約與 Supabase 後台，含動態報價與推播通知。",
      demoUrl: "https://stardream-nails.vercel.app/",
      githubUrl: "https://github.com/Laurence-R/stardream-nails",
    },
  ],
};
