import { JSX } from 'react/jsx-runtime'
import Section from '@/components/Section/Section'
import Node from '../Icons/Node';
import Typescript from '../Icons/Typescript';
import Javascript from '../Icons/Javascript';
import './Skills.scss'

const Skills = (): JSX.Element => {
	return <Section id='skills' title='Skills'>
		<div className='skills-section'>
			<div className='skills-marquee'>
				<div className='skills-track'>
					<ul className='skills-row'>
						<li className='skills-icon'><Javascript /></li>
						<li>Lit Element</li>
						<li className='skills-icon'><Node /></li>
						<li>CSS</li>
						<li>Git</li>
						<li className='skills-icon'><Typescript /></li>
					</ul>
					<ul className='skills-row'>
						<li className='skills-icon'><Javascript /></li>
						<li>Lit Element</li>
						<li className='skills-icon'><Node /></li>
						<li>CSS</li>
						<li>Git</li>
						<li className='skills-icon'><Typescript /></li>
					</ul>
				</div>
			</div>
		</div>
	</Section>
}

export default Skills
