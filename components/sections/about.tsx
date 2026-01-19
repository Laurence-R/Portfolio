'use client'

import { Code2, Brain, Cpu, Image as ImageIcon, GraduationCap, User } from 'lucide-react'
import Image from 'next/image'

export default function About() {
	const skills = [
		{
			icon: Code2,
			title: '全端開發',
			description: '精通前後端技術棧，從使用者介面到伺服器架構，提供完整解決方案。',
			color: 'bg-blue-500/10 text-blue-500',
		},
		{
			icon: Brain,
			title: 'AI 協作開發',
			description: '善用 AI 工具輔助開發，提升效率與程式碼品質，實現智慧化開發流程。',
			color: 'bg-purple-500/10 text-purple-500',
		},
		{
			icon: Cpu,
			title: 'Edge AI 部署',
			description: '專注於邊緣運算 AI 應用，將機器學習模型部署至邊緣裝置。',
			color: 'bg-green-500/10 text-green-500',
		},
		{
			icon: ImageIcon,
			title: '影像處理研究',
			description: '深入研究電腦視覺與影像處理技術，開發智慧影像分析應用。',
			color: 'bg-orange-500/10 text-orange-500',
		},
	]

	const education = {
		school: '國立彰化師範大學',
		department: '資訊工程學系',
		degree: '學士',
		description: '深厚的電腦科學與軟體工程基礎，專注於人工智慧與影像處理領域研究。',
	}

	const stats = [
		{ number: '10+', label: '技術專案', sublabel: 'Projects' },
		{ number: '5+', label: '技術棧', sublabel: 'Tech Stack' },
		{ number: '2+', label: '研究領域', sublabel: 'Research Areas' },
	]

	return (
		<section id="about" className="py-24 px-4 bg-muted/30">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
						關於我
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						彰師大資工系學生，專注於全端開發與 AI 技術應用
					</p>
				</div>

				{/* Main Content - Two Column Layout */}
				<div className="grid lg:grid-cols-3 gap-8 mb-16">
					{/* Left Column - Profile & Education */}
					<div className="lg:col-span-1 space-y-6">
						{/* Profile Card */}
						<div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300">
							<div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
								<User className="w-8 h-8 text-accent" />
							</div>
							<h3 className="font-heading text-2xl font-bold text-center text-foreground mb-2">
								張勝麟
							</h3>
							<p className="text-center text-muted-foreground text-sm mb-4">
								全端開發者 • AI 研究者
							</p>
							<div className="pt-4 border-t border-border">
								<p className="text-sm text-muted-foreground leading-relaxed">
									熱愛技術創新，致力於將 AI 技術應用於實際問題解決，打造有價值的產品與服務。
								</p>
							</div>
						</div>

						{/* Education Card */}
						<div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
									<Image
										width={48}
										height={48}
										src="/NCUE_seal.svg"
										alt="NCUE Logo"
										className="object-contain"
									/>
								</div>
								<div>
									<h3 className="font-heading text-lg font-semibold text-foreground mb-1">
										{education.school}
									</h3>
									<p className="text-accent font-medium text-sm mb-2">
										{education.department}
									</p>
									<p className="text-muted-foreground text-xs mb-3">
										{education.degree}
									</p>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{education.description}
									</p>
								</div>
							</div>
						</div>

						{/* Stats */}
						<div className="bg-card border border-border rounded-xl p-6">
							<div className="grid grid-cols-3 gap-4">
								{stats.map((stat, index) => (
									<div key={index} className="text-center">
										<div className="font-heading text-2xl font-bold text-accent mb-1">
											{stat.number}
										</div>
										<div className="text-foreground text-xs font-medium mb-1">
											{stat.label}
										</div>
										<div className="text-muted-foreground text-[10px]">
											{stat.sublabel}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Skills Grid */}
					<div className="lg:col-span-2">
						<div className="grid md:grid-cols-2 gap-6">
							{skills.map((skill, index) => {
								const Icon = skill.icon
								return (
									<div
										key={index}
										className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg"
									>
										<div className={`w-14 h-14 ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
											<Icon className="w-7 h-7" />
										</div>
										<h3 className="font-heading text-xl font-semibold text-foreground mb-3">
											{skill.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{skill.description}
										</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
