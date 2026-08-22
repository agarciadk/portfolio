import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import projectsData from '@/data/projects'
import Section from '@/components/Section/Section'
import ProjectCard from '@/sections/Projects/ProjectCard'
import './Projects.scss'

const Projects: FC = (): JSX.Element => {
	return (
		<Section className='projects-section' id='projects' title='Projects' titleLineWidth={60}>
			<div className='card-wrapper'>
				{projectsData.map(project =>
					<ProjectCard key={project.title} {...project} />
				)}
			</div>
		</Section>
	)
}

export default Projects
