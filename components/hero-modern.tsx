'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function HeroModern() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24">
            <div className="max-w-7xl w-full">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground animate-fade-in">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        歡迎來到我的作品集
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight animate-fade-in-up">
                        嗨，我是
                        <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            張勝麟
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                        全端開發者 • AI 技術愛好者
                    </p>

                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                        專注於打造優雅、高效能的網頁應用程式。
                        熱愛將創意轉化為實用的數位體驗。
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-400">
                        <button className="group px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-xl">
                            查看作品
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>

                        <button className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200 cursor-pointer shadow-sm">
                            下載履歷
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up animation-delay-500">
                        <a
                            href="https://github.com/Laurence-R"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-accent transition-all duration-200 cursor-pointer"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-accent transition-all duration-200 cursor-pointer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:sdjoid@gmail.com"
                            className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-accent transition-all duration-200 cursor-pointer"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="pt-16 animate-fade-in-up animation-delay-600">
                        <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
                            <span className="text-sm">向下滾動</span>
                            <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
                                <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
