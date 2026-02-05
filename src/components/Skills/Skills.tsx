import { JSX } from 'react/jsx-runtime'
import Section from '@/components/Section/Section'
import Node from '../Icons/Node';
import Typescript from '../Icons/Typescript';
import Javascript from '../Icons/Javascript';
import CSS from '../Icons/CSS';
import LitElement from '../Icons/LitElement';
import Git from '../Icons/Git';
import './Skills.scss'

const Skills = (): JSX.Element => {
	const icons = [Javascript, LitElement, Node, CSS, Git, Typescript];
	return <Section id='skills' title='Skills'>
		<div className='skills-section'>
			<div className='skills-marquee'>
				<div className='skills-track'>
					{[...Array(10).keys()].map(() =>
						<ul className='skills-row'>
						{icons.map((element) =>
							<li className='skills-icon'>{element()}</li>
						)}
						</ul>
					)}
				</div>
			</div>
		</div>
	</Section>
}

export default Skills
