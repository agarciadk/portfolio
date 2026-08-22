import { FC } from 'react'
import { JSX } from 'react/jsx-runtime'
import hashLanguages from '@/utils/hashLanguages'
import mail from '@/assets/icons/mail.svg'
import './Footer.scss'

const Footer: FC = (): JSX.Element => {
	const year = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='container footer__container'>
				<div className='footer__brand'>
					<span className='logo'>Alberto<span className='green'>.</span></span>
					<p className='footer__tagline'>Software Engineer crafting web experiences.</p>
				</div>

				<div className='footer__social'>
          <h3>Media</h3>
          <div className='footer__social-links'>
					  <a href='https://github.com/agarciadk' target='_blank' rel='noopener noreferrer' title='GitHub'>
						  <img src={hashLanguages.github} alt='' aria-hidden='true' />
					  </a>
					  <a href='mailto:agarciadk@gmail.com' title='Email'>
						  <img src={mail} alt='' aria-hidden='true' />
					  </a>
          </div>
				</div>
			</div>

			<p className='footer__copy'>© {year} Alberto García de Paredes. All rights reserved.</p>
		</footer>
	)
}

export default Footer
