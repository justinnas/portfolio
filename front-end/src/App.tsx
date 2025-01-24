import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './routes/Home';
import { Links } from './routes/Links';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/links' element={<Links />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
