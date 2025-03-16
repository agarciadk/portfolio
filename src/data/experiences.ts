import { Experience } from '../types'

const experiences: Experience[] = [
	{
		company: 'Minsait',
		position: 'Software Engineer II',
		sector: 'Finances',
		business: 'B2B',
		beginning: 'Juny, 2024',
		ending: 'Present',
		location: 'Badajoz (Spain)',
		responsibilities: [
      {
        title: `Participated in three distinct projects for BBVA, collaborating in international
        and multidisciplinary teams to deliver innovative solutions:`,
        description: [
          `CRR - Customer Risk Rating: Collaborated with an internation team (half Spanish, half Mexican) 
          to develop a global application aimed at improving customer risk assesment processes.`,
          `RBA Legacy Migration: Transitioned web components from Cells to Vanilla JavaScript, HTML 
          and CSS, ensuring clean, maintainable, and efficient code.`,
          `GloMo (Global Mobile) Venezuela: Currently contributing to the early stages of BBVA's 
          Global Mobile Banking Platform, a groundbreaking initiative to create a unified a scalable 
          mobile banking solution from scratch.`
        ]
      }
    ],
		keys: [
      {
        title: `Successfully contributed to the creation of a global application for BBVA's customer 
        risk assesment processes.`
      },
      {
        title: `Developed comprehensive documentation to guide the implementation of end-to-end (E2E) 
        tests using Cells Pepino, enabling teams to standardize and automate testing processes effectively.`
      }
    ],
	},
	{
		company: 'NEORIS',
		position: 'Software Consultant',
		sector: 'Finances',
		business: 'B2B',
		beginning: 'January, 2024',
		ending: 'Juny, 2024',
		location: 'Madrid (Spain)',
		responsibilities: [
      {
        title: `Participated in the WUT (Wealth Utility Tool) project for BBVA, focusing on the development of 
        profitability engines to optimize financial calculations and decision-making processes.`
      }
    ],
		keys: [
      {
        title: 'N/A'
      }
    ],
	},
	{
		company: 'NTT DATA',
		position: 'Frontend Developer',
		sector: 'Finances',
		business: 'B2B',
		beginning: 'October, 2022',
		ending: 'January, 2024',
		location: 'Salamanca (Spain)',
		responsibilities: [
      {
        title: `Led end-to-end software development processes, overseeing the entire lifecycle from initial 
        analysis and planning to construction, testing, and deployment.`
      },
      {
        title: `Provided mentorship to new team members, offering guidance and support to help them 
        acclimate to the development environment and gain a thorough understanding of the project context.`
      }
    ],
		keys: [
      {
        title: `Optimized the version process, significantly increasing the frequency from once a month 
        to a minimum of once a week.`,
      },
      { title: `Developed a comprehensive welcome pack document for the team, ensuring a smooth 
        onboarding experience and providing essential resources and information.`
      },
      {
        title: `Enhanced my team's efficiency by instructing them in the implementation of the AAA 
        (Arrange-Act-Assert) testing pattern.`
      }
    ],
	}
]

export default experiences
