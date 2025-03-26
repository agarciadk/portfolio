import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import mockProjects from '@/mocks/projects'
import Section from '@/components/Section/Section'
import ProjectCard from '@/components/Projects/ProjectCard'
import './Projects.scss'

const Projects: FC = (): JSX.Element => {
	return (
		<Section className='projects-section' id='projects'>
			<div className='title'>
				<h2>Projects</h2>
			</div>
			<div className='card-wrapper'>
				{mockProjects.map(mockProject =>
					<ProjectCard key={mockProject.title} {...mockProject} />
				)}
			</div>
		</Section>
	)
}

export default Projects
