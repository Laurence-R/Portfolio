'use client'

import { BookOpen, Code, Lightbulb, Award, Calendar, GraduationCap } from 'lucide-react'

export default function Experience() {
  const learningPath = [
    {
      icon: GraduationCap,
      title: '資訊工程學系',
      institution: '國立彰化師範大學',
      period: '2022 - 現在',
      description: '主修電腦科學與軟體工程，專注於人工智慧與影像處理領域的學習與研究。',
      highlights: [
        '資料結構與演算法',
        '機器學習與深度學習',
        '電腦視覺與影像處理',
        '網頁應用程式開發',
      ],
      tags: ['Python', 'C++', 'AI/ML', 'Computer Vision'],
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      icon: Code,
      title: '全端開發實戰',
      institution: '自主學習',
      period: '2023 - 現在',
      description: '透過線上課程與實際專案，深入學習現代網頁開發技術棧，建立完整的全端開發能力。',
      highlights: [
        '掌握 React 與 Next.js 框架',
        '熟悉 TypeScript 開發',
        '學習資料庫設計與 API 開發',
        '實作多個完整專案',
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      icon: Lightbulb,
      title: 'Edge AI 研究',
      institution: '專題研究',
      period: '2024 - 現在',
      description: '研究邊緣運算環境下的 AI 模型部署與優化，探索輕量化模型在實際應用中的可能性。',
      highlights: [
        '研究模型壓縮與量化技術',
        '實作邊緣裝置部署方案',
        '優化推論效能與準確度',
        '撰寫技術文件與論文',
      ],
      tags: ['TensorFlow Lite', 'ONNX', 'Edge Computing', 'Optimization'],
      color: 'bg-green-500/10 text-green-500',
    },
    {
      icon: Award,
      title: '開源貢獻與競賽',
      institution: '課外活動',
      period: '2023 - 現在',
      description: '積極參與開源專案與程式競賽，透過實作與交流提升技術能力。',
      highlights: [
        '參與開源專案開發',
        '程式競賽經驗',
        '技術社群分享',
        '線上課程學習與認證',
      ],
      tags: ['GitHub', 'Open Source', 'Hackathon', 'Community'],
      color: 'bg-orange-500/10 text-orange-500',
    },
  ]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            學習歷程
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            持續學習，不斷成長的技術之路
          </p>
        </div>

        {/* Learning Timeline */}
        <div className="space-y-8">
          {learningPath.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 ${item.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-accent font-medium">{item.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    {/* Highlights */}
                    <ul className="grid md:grid-cols-2 gap-2 mb-4">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="font-heading text-2xl font-bold text-foreground mb-1">
              50+
            </div>
            <div className="text-muted-foreground text-sm">學習時數/月</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <Code className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="font-heading text-2xl font-bold text-foreground mb-1">
              10+
            </div>
            <div className="text-muted-foreground text-sm">完成專案</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <Lightbulb className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="font-heading text-2xl font-bold text-foreground mb-1">
              5+
            </div>
            <div className="text-muted-foreground text-sm">技術棧</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <Award className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="font-heading text-2xl font-bold text-foreground mb-1">
              3+
            </div>
            <div className="text-muted-foreground text-sm">競賽參與</div>
          </div>
        </div>
      </div>
    </section>
  )
}