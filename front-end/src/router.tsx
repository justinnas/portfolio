import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Links } from './pages/Links';

export const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/links', element: <Links /> },
	{ path: '*', element: <Navigate to='/' replace /> },
]);
