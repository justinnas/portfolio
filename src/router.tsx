import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './routes/Home';
import { Links } from './routes/Links';

export const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/links', element: <Links /> },
	{ path: '*', element: <Navigate to='/' replace /> },
]);
