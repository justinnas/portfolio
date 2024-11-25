import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok, FaUnsplash } from 'react-icons/fa';
import SocialButton from './socialButton';

const navigateToLink = (href: string) => {
	window.open(href, '_blank'); // Open the link in a new tab
};

const socialLinks = [
	{
		text: 'Instagram',
		icon: <BsInstagram />,
		onClick: () => navigateToLink('https://www.instagram.com/jtesel'),
		delay: 0.35,
	},
	{
		text: 'TikTok',
		icon: <FaTiktok />,
		onClick: () => navigateToLink('https://www.tiktok.com/@jtesel'),
		delay: 0.45,
	},
	{
		text: 'Unsplash',
		icon: <FaUnsplash />,
		onClick: () => navigateToLink('https://unsplash.com/jtesel'),
		delay: 0.55,
	},
];

const SocialButtonsContainer: React.FC = () => {
	return (
		<div className='min-h-64 items-center justify-center'>
			{socialLinks.map((link, index) => (
				<div className='pb-4'>
					<SocialButton key={index} text={link.text} icon={link.icon} onClick={link.onClick} delay={link.delay} />
				</div>
			))}
		</div>
	);
};

export default SocialButtonsContainer;
