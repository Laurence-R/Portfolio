import { ExternalLink, Github, Clock, CheckCircle2, FolderGit2 } from 'lucide-react'
import { PROJECT_DATA } from '@/lib/constants/projectData'
import Image from 'next/image'


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
							className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-1"
						>
							{/* Header with Logo and Status */}
							<div className={`relative p-6 bg-gradient-to-br ${project.gradient}`}>
								<div className="flex items-start justify-between">
									{/* Logo */}
									<div className="w-20 h-20 bg-white dark:bg-white/90 rounded-xl flex items-center justify-center shadow-lg transition-colors">
										{project.logo ? (
											<div className="relative min-w-[80px] min-h-[80px]">
												<Image
													src={project.logo}
													alt={project.logoAlt || `${project.title} Logo`}
													fill
													className="object-contain"
												/>
											</div>
										) : (
											<FolderGit2 className="w-8 h-8 text-accent" />
										)}
									</div>

									{/* Status Badge */}
									<div className="flex items-center gap-2 px-3 py-1.5 bg-card/95 backdrop-blur-sm rounded-lg shadow-md">
										{project.status === 'completed' ? (
											<>
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												<span className="text-green-500 font-medium text-xs">已完成</span>
											</>
										) : (
											<>
												<Clock className="w-4 h-4 text-orange-500" />
												<span className="text-orange-500 font-medium text-xs">開發中</span>
											</>
										)}
									</div>
								</div>

								{/* Title */}
								<h3 className="font-heading text-2xl font-bold text-foreground mt-4 group-hover:text-accent transition-colors duration-200">
									{project.title}
								</h3>
							</div>

							{/* Content */}
							<div className="p-6 space-y-4">
								{/* Description */}
								<p className="text-muted-foreground text-sm leading-relaxed min-h-[60px]">
									{project.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-lg hover:bg-accent/10 hover:text-accent transition-colors duration-200"
										>
											{tag}
										</span>
									))}
								</div>

								{/* Divider */}
								<div className="border-t border-border pt-4">
									{/* Links */}
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
											>
												<Github className="w-4 h-4" />
												原始碼
											</a>
											{project.demo && (
												<a
													href={project.demo}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
												>
													<ExternalLink className="w-4 h-4" />
													展示
												</a>
											)}
										</div>
									</div>
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
						className="inline-flex items-center gap-2 px-8 py-3 bg-card border-2 border-border text-foreground rounded-xl font-medium hover:bg-muted hover:border-accent transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
					>
						<Github className="w-5 h-5" />
						在 GitHub 查看更多專案
					</a>
				</div>
			</div>
		</section>
	)
}


