import React from 'react';
import BlurFade from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button.tsx';

type ButtonProps = {
	text: string;
	icon: React.ReactNode;
	onClick: () => void;
	delay?: number;
};

// Temporary component, will be deleted later

const SocialButtonSmall: React.FC<ButtonProps> = ({ text, icon, onClick, delay = 0 }) => {
	return (
		<BlurFade delay={delay} inView>
			<div>
				<Button variant='joutlineSmall' className='w-full' size='r_xl' onClick={onClick}>
					<div className='text-2xl sm:text-3xl md:text-4xl 2xl:text-2xl'>{icon}</div>
					<span>{text}</span>
				</Button>
			</div>
		</BlurFade>
	);
};

export default SocialButtonSmall;
