import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Library from './pages/Library/Library'
import Statistics from './pages/Statistics/Statistics'
import { useState } from 'react'
import Login from './pages/Login/Login'

function App() {
	const [user, setUser] = useState('')

	return (
		<>
			<Header />
			{!user ? (
				<Login />
			) : (
				<>
					<Routes>
						<Route path='/' element={<Library />} />
						<Route path='/statistics' element={<Statistics />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</>
			)}
		</>
	)
}

export default App
