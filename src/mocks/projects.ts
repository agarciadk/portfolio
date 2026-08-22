import { Project } from '@/types'

const mockProject: Project[] = [
	{
		title: 'Project 1',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
		image: 'https://placehold.co/600x400/333/png',
		languages: ['react', 'typescript', 'nodejs', 'express', 'postgresql'],
		githubUrl: 'https://github.com/example/project-1',
		demoUrl: 'https://project-1.example.com'
	},
	{
		title: 'Project 2',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
		image: 'https://placehold.co/600x400/333/png',
		languages: ['vuejs', 'typescript', 'dotnet', 'sqlserver'],
		githubUrl: 'https://github.com/example/project-2',
		demoUrl: 'https://project-2.example.com'
	},
	{
		title: 'Project 3',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
		image: 'https://placehold.co/600x400/333/png',
		languages: ['angular', 'typescript', 'spring', 'mysql'],
		githubUrl: 'https://github.com/example/project-3'
	}
]

export default mockProject
