import mockProjects from '../../mocks/projects'
import Section from '../Section'
import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
	return (
		<Section id='projects'>
			<h2>Projects</h2>
			<div className='card-wrapper'>
				{mockProjects.map(mockProject =>
					<ProjectCard key={mockProject.title} {...mockProject} />
				)}
			</div>
		</Section>
	)
}

export default Projects
