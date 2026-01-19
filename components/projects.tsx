'use client'
import { ExternalLink, Github, Clock, CheckCircle2 } from 'lucide-react'
import { PROJECT_DATA } from '@/app/constants/projectData'

export default function Projects() {
    const projects = PROJECT_DATA
    return (
        <section id="projects" className="py-24 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                        專案作品
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        我的學習成果與實作專案展示
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-xl"
                        >
                            {/* Image/Gradient Header */}
                            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-foreground/80 text-2xl font-bold mb-2">
                                            {project.title}
                                        </div>
                                        {/* Status Badge */}
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs">
                                            {project.status === 'completed' ? (
                                                <>
                                                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                    <span className="text-green-500 font-medium">已完成</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Clock className="w-3 h-3 text-orange-500" />
                                                    <span className="text-orange-500 font-medium">開發中</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                                    >
                                        <Github className="w-4 h-4" />
                                        程式碼
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors duration-200 cursor-pointer"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            線上展示
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Profile Link */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Laurence-R"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted hover:border-accent transition-all duration-200 cursor-pointer"
                    >
                        <Github className="w-5 h-5" />
                        在 GitHub 查看更多專案
                    </a>
                </div>
            </div>
        </section>
    )
}

    
