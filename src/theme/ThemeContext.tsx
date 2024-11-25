import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
	setThemeDark: () => void;
}

const defaultThemeContext: ThemeContextProps = {
	theme: 'dark',
	toggleTheme: () => {},
	setThemeDark: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(() => {
		return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const setThemeDark = () => {
		setTheme('dark');
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme, setThemeDark }}>{children}</ThemeContext.Provider>;
};
