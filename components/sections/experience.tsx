import React from "react";
import { Timeline, TimeLineBlock } from "@/components/ui/timeline";
import Image from "next/image";

const data =[
  {
    title: "2023/06",
    content: (
      <TimeLineBlock 
        title="畢業於桃園市立陽明高中" 
        imageSrcs={["/experience/ymhs.jpg"]}
      />
    )
  },
  {
    title: "2024/01",
    content: (
      <TimeLineBlock
        title="掌握基礎的程式能力"
        description="考上大學以前，我完全沒有任何的程式能力，導致我第一個學期常花至少 3 小時的課後時間去解決一道簡單的題目，還好同學們都很願意分享他們進步的方法，也因此我接觸到了 LeetCode 與 ZeroJudge 這兩個平台，並且開始了我的刷題之路。"
        imageSrcs={["/experience/leetcode.png", "/experience/zerojudge.png"]}
      />
    )
  },
  {
    title: "2024/04",
    content: (
      <TimeLineBlock 
        title="擔任 117 級三系聯合迎新之資工系總召"
        description="迎新是每年大學新生入學的第一個活動，對於新生來說非常重要。作為資工系的總召，我負責協調資工系的迎新活動，確保每個環節都能順利進行。這次經驗讓我學會了如何與不同的人合作，並且在壓力下保持冷靜。"
        imageSrcs={["/experience/welcome_1.jpg", "/experience/welcome_2.jpg", "/experience/welcome_3.jpg"]}
      />
    )
  },
  {
    title: "2025/04",
    content: (
      <TimeLineBlock
        title="113 學年度大專撞球錦標賽團體賽第三名"
        description="自從上了大學我接觸到了撞球這項靜態運動，從此就迷上了這項運動，從一開始的不會打到可以代表學校參加比賽。這段過程讓我學到了專注、耐心與放手一搏的道理。對我來說撞球不是一項玩樂的運動，而是教我很多的處世道理的恩師，從這項運動中學到的道理可以幫助我穩住學習新技術時的心態，不容易受挫。"
        imageSrcs={["/experience/billiards_1.jpg", "/experience/billiards_2.jpg"]}
      />
    )
  },
  {
    title: "2025/09",
    content: (
      <TimeLineBlock 
        title="得到 Meta 的 React 課程認證"
        description="在大學的第二年，我開始對前端開發產生興趣，並且自學了 React 框架。為了驗證我的技能，我參加了 Meta 的 React 基礎與進階課程，並且成功獲得了認證。這個認證不僅提升了我的前端開發能力，也擴大了我的未來職業方向。"
        imageSrcs={["/experience/meta_react_cert.jpg"]}
      />
    )
  }
]

export function Experience() {
  return (
    <section id="experience">
      <div className="relative w-full overflow-clip ">
        <Timeline data={data} />
      </div>
    </section>
  )
}