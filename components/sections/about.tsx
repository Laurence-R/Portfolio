import { CometCard } from "@/components/ui/comet-card"
import { ArrowUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* 左側照片 */}
        <div className="flex items-center justify-center">
          <CometCard>
            <button
              type="button"
              className="my-10 flex w-72 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 sm:w-80 md:my-20 md:p-4 lg:w-120"
              aria-label="View invite F7RA"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                    alt="Invite background"
                    src="me.jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-shrink-0 items-center pl-4 font-mono text-white">
                <ArrowUp />&nbsp;Me
              </div>
            </button>
          </CometCard>
        </div>
        {/* 右側文字 */}
        <div className="flex flex-1 flex-col items-center gap-8 py-8 sm:gap-10 md:gap-12 lg:py-24 lg:pl-16 xl:pl-24">
          {/* 關於我 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl">
              About Me
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
              我目前就讀彰師大資訊工程學系，今年大三，非常喜歡探索資訊技術。從零基礎到全端開發，到人工智慧再到影像處理領域，雖然我涉及了多個程式語言與領域，但我更重視的是如何運用這些技術來解決實際問題，創造有意義的產品。
              畢竟在 AI 時代下，工程師的價值不再是單純的程式碼撰寫，而是如何將技術與創意結合，打造出真正有用且具影響力的解決方案。
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
              同時作為 Google Developer Group on Campus NCUE 的一員，
              我樂於在社群中分享、探索新技術，與志同道合的人一起推動技術向前。
            </p>
          </div>

          {/* 近期專注方向 */}
          <div className="space-y-6">
            <p className="text-xl font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
              Current Focus
            </p>

            {/* 主要研究 — 影像增強技術 */}
            <div className="rounded-xl border border-indigo-300 bg-indigo-50/60 p-6 dark:border-indigo-800 dark:bg-indigo-950/40">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block rounded-full bg-indigo-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  NSTC 國科會計畫
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                PG-DENet — 物理導向類畫化影像增強網路
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                本研究旨在解決自動駕駛在夜間環境中面臨的感知失效問題。夜間影像常因低光、眩光與動態範圍不足而產生細節截斷，使偵測模型效能大幅下降，且夜間資料稀缺使重新訓練成本極高。為突破此瓶頸，我們提出 PG-DENet，一種物理導向、可解釋且低延遲的類晝化影像增強網路。PG-DENet 以 Retinex 模型為基礎，結合深度展開網路實現物理一致的影像分解，並透過 Wasserstein 特徵對齊機制，使增強後影像在 YOLO11 特徵空間貼近日間資料。模型具備即插即用特性，無需重新訓練偵測器即可提升夜間偵測準確率，並在記憶體與運算效能上達成即時應用需求。本研究期望在視覺品質、機器感知與效能三方面皆超越現行方法。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Retinex Theory", "DUN", "Wasserstein Alignment", "YOLO11", "TensorRT"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-indigo-100 px-2 py-0.5 text-[11px] font-medium text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* 其他研究方向 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Vision-Language Models",
                  description:
                    "研究視覺語言模型的多模態理解能力，探索影像與文字之間的語義橋接與推理。",
                },
                {
                  title: "Nvidia Cosmos",
                  description:
                    "深入研究 Nvidia 世界基礎模型平台，探索物理世界模擬與生成式 AI 的下一步可能。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30"
                >
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}