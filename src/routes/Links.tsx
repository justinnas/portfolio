import BlurFade from '@/components/ui/blur-fade';
import SocialButtonsContainer from '@/components/linksSocialButtons/socialButtonsContainer';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/theme/ThemeContext';
import { GrLocation } from 'react-icons/gr';

export const Links = () => {
	// Ensure that the theme on this page is always dark
	const themeContext = useContext(ThemeContext);
	const { setThemeDark } = themeContext;

	useEffect(() => {
		setThemeDark();
	});

	return (
		<div className="h-screen w-screen flex items-center justify-center overflow-auto bg-[url('src/assets/img/lensflarebg.jpg')] bg-cover bg-center">
			<div className='flex items-center justify-center overflow-auto'>
				<div className='w-72 sm:w-80 md:w-96 2xl:w-80'>
					<BlurFade delay={0.1} inView>
						<div>
							<h1 className='text-4xl sm:text-6xl md:text-7xl 2xl:text-4xl font-black text-left'>
								JUSTINAS
								<br />
								TESELIS
							</h1>
							<h3 className='text-md sm:text-lg md:text-xl 2xl:text-base text- text-left text-gray-500'>
								Photographer
							</h3>
							<h3 className='text-md sm:text-lg md:text-xl 2xl:text-base pb-10 gap-2 text-left text-gray-500 flex items-center'>
								<GrLocation /> Lithuania
							</h3>
						</div>
					</BlurFade>
					<SocialButtonsContainer />
				</div>
			</div>
		</div>
	);
};
