// app/types/projectData.ts

// 定義專案資料的介面
type ProjectStatus = 'in-progress' | 'completed'

export interface ProjectData {
	title: string,
	description: string,
	tags: string[],
	github: string,
	demo: string | null,
	status: ProjectStatus,
	gradient: string,
}