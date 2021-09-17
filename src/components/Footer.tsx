import React from 'react'
import style from '@/components/Footer.module.scss'

import FacebookIcon from '@/assets/images/icon-facebook.svg'
import InstagramIcon from '@/assets/images/icon-instagram.svg'
import PinterestIcon from '@/assets/images/icon-pinterest.svg'
import TwitterIcon from '@/assets/images/icon-twitter.svg'
const Footer = () => {
	return (
		<div className={ style.footer}>
			<h3 className={style.footer__title}>Shortly</h3>
			<div className={style['footer__link-wrapper']}>
				<span className={style['footer__link-title']}>Features</span>
				<span className={style['footer__link'] }>Link Shortening</span>
				<span className={style['footer__link'] }>Branded Links</span>
				<span className={style['footer__link'] }>Analytics</span>
			</div>
			<div className={style['footer__link-wrapper']}>
				<span className={style['footer__link-title']}>Resources</span>
				<span className={style['footer__link'] }>Blog</span>
				<span className={style['footer__link'] }>Developers</span>
				<span className={style['footer__link'] }>Support</span>
			</div>
			<div className={style['footer__link-wrapper']}>
				<span className={style['footer__link-title']}>Company</span>
				<span className={style['footer__link'] }>About</span>
				<span className={style['footer__link'] }>Our Team</span>
				<span className={style['footer__link'] }>Careers</span>
				<span className={style['footer__link'] }>Contact</span>
			</div>
			<div className={style['footer__link-socmed']}>
				<img alt="Facebook icon" src={FacebookIcon} className={style['footer__link-socmed--icon'] } />
				<img alt="Twitter icon" src={TwitterIcon} className={style['footer__link-socmed--icon'] } />
				<img alt="Pinterest icon" src={PinterestIcon} className={style['footer__link-socmed--icon'] } />
				<img alt="Instagram icon" src={InstagramIcon} className={style['footer__link-socmed--icon'] } />
			</div>
		</div>
	)
}

export default Footer
