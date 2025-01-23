import React from 'react';
import BlurFade from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button.tsx';

type ButtonProps = {
	text: string;
	icon: React.ReactNode;
	onClick: () => void;
	delay?: number;
};

const SocialButton: React.FC<ButtonProps> = ({ text, icon, onClick, delay = 0 }) => {
	return (
		<BlurFade delay={delay} inView>
			<div>
				<Button variant='joutline' className='w-full' size='r_xxl' onClick={onClick}>
					<div className='text-3xl sm:text-4xl md:text-5xl 2xl:text-3xl'>{icon}</div>
					<span>{text}</span>
				</Button>
			</div>
		</BlurFade>
	);
};

export default SocialButton;
