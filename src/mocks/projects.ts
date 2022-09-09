import { Project } from '../types'

const mockProject: Project[] = [
	{
		title: 'Project 1',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
		image: 'https://via.placeholder.com/250/333',
		languages: ['react', 'typescript', 'nodejs', 'express', 'postgresql']
	},
	{
		title: 'Project 2',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
		image: 'https://via.placeholder.com/250/333',
		languages: ['vuejs', 'typescript', 'dotnet', 'sqlserver']
	},
	{
		title: 'Project 3',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`,
		image: 'https://via.placeholder.com/250/333',
		languages: ['angular', 'typescript', 'spring', 'mysql']
	}
]

export default mockProject
