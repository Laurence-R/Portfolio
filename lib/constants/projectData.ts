// app/constants/projectData.ts
import { ProjectData } from "@/lib/types/projectData";

export const PROJECT_DATA: ProjectData[] = [
	{
		title: 'AI-Tool-Hub',
		description: '一個全端的 AI 工具管理平台，整合多種 AI 服務，提供統一的介面管理和使用各類 AI 工具。',
		tags: ['Next.js', 'TypeScript', 'AI Integration', 'Full-Stack'],
		github: 'https://github.com',
		demo: null,
		status: 'in-progress',
		gradient: 'from-purple-500/20 to-blue-500/20',
	},
	{
		title: 'InvisiGuard',
		description: '實現影像隱寫術的 Web 應用，能夠在圖片中隱藏和提取訊息，確保資訊的隱密傳輸。',
		tags: ['Steganography', 'Image Processing', 'Web App', 'Security'],
		github: 'https://github.com',
		demo: 'https://example.com',
		status: 'completed',
		gradient: 'from-green-500/20 to-emerald-500/20',
	},
	{
		title: 'Chicken-Transformer',
		description: '部署在 Nvidia Jetson Orin Nano 上的智慧健身遊戲，結合 AI 辨識與隨機骰子機制，讓運動更有趣。',
		tags: ['Edge AI', 'Jetson Orin Nano', 'Computer Vision', 'IoT'],
		github: 'https://github.com',
		demo: null,
		status: 'completed',
		gradient: 'from-orange-500/20 to-red-500/20',
	},
	{
		title: 'Say Something',
		description: '類似 Meta Thread 的社交平台，具備完整的帳戶系統、貼文發布、互動功能，打造輕量化的社群體驗。',
		tags: ['Social Media', 'Authentication', 'React', 'Database'],
		github: 'https://github.com',
		demo: null,
		status: 'in-progress',
		gradient: 'from-blue-500/20 to-cyan-500/20',
	},
]