import { useContext } from 'react';
import { ThemeContext } from '@/theme/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeButton = () => {
	const themeContext = useContext(ThemeContext);

	const { theme, toggleTheme } = themeContext;

	return (
		<span onClick={toggleTheme} className='p-4 focus:outline-none cursor-pointer'>
			{theme === 'light' ? <Moon /> : <Sun />}
		</span>
	);
};
