import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import { ThemeProvider } from '@/theme/ThemeContext';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
);
