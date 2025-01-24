import { TextHoverEffect } from '@/components/ui/text-hover-client';
import { PiGithubLogo } from 'react-icons/pi';
import { FaLinkedinIn } from 'react-icons/fa6';
import { ThemeButton } from '@/components/ui/themeButton';
import HyperText from '@/components/ui/hyper-text';
import BlurFade from '@/components/ui/blur-fade';
import SocialButtonSmall from '@/components/linksSocialButtons/socialButtonSmall';

export const Home = () => {
	const navigateToLink = (href: string) => {
		window.open(href, '_blank'); // Open the link in a new tab
	};

	return (
		<div className='h-screen w-screen flex flex-col items-center justify-center'>
			<div className='mb-auto mt-auto'>
				<div className='h-[7rem] z-20 '>
					<TextHoverEffect text='JUSTINAS TESELIS' />
				</div>
				<BlurFade delay={1} inView>
					<div className='flex items-center pb-8 -mt-4 justify-center'>
						<p className='text-xs sm:text-md md:text-md 2xl:text-lg font-extralight text-gray-500'>
							{' '}
							Software Developer.{' '}
						</p>
					</div>
				</BlurFade>
				<div className='flex flex-col sm:flex-row items-center justify-center w-full gap-4'>
					<div className='w-48 sm:w-64 md:w-64 2xl:w-56'>
						<SocialButtonSmall
							text='Github'
							icon={<PiGithubLogo />}
							onClick={() => navigateToLink('https://www.github.com/justinnas')}
							delay={1.25}
						/>
					</div>
					<div className='w-48 sm:w-64 md:w-64 2xl:w-56'>
						<SocialButtonSmall
							text='LinkedIn'
							icon={<FaLinkedinIn />}
							onClick={() => navigateToLink('https://www.linkedin.com/in/justinasteselis')}
							delay={1.5}
						/>
					</div>
				</div>
			</div>
			<div className='bottom-0 flex items-center h-20 justify-center text-gray-500'>
				<div className='w-40'>
					<HyperText className='text-sm' text='Under development.' />
				</div>
				<ThemeButton />
			</div>
		</div>
	);
};
