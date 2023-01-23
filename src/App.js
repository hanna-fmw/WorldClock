import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import SharedLayout from './components/SharedLayout'
import Clock from './components/Clock'
import SingleClock from './components/SingleClock'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					<Route path='clock' element={<Clock />} />
					<Route path='clock/:singleClockId' element={<SingleClock />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
