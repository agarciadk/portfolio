import { Project } from '@/types'

const mockProject: Project[] = [
	{
		title: 'Finora',
		description: `Finora is a full-stack personal finance application
    designed to help users manage their finances, track transactions,
    set budgets, and visualize their spending through analytics.`,
		image: 'finora.png',
		languages: [
      'react',
      'typescript',
      'nodejs',
      'postgresql',
      'vite',
      'docker',
      'playwright',
      'prisma',
      'nestjs',
      'sass'
    ],
		githubUrl: 'https://github.com/agarciadk/finora',
		demoUrl: 'https://finora-agarciadk.vercel.app'
	}
]

export default mockProject
