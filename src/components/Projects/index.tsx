import mockProjects from '../../mocks/projects'
import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
	return (
		<section id='projects'>
			<h2>Proyectos</h2>
			<div className='card-wrapper'>
				{mockProjects.map(mockProject => <ProjectCard key={mockProject.title} {...mockProject} />)}
			</div>
		</section>
	)
}

export default Projects
