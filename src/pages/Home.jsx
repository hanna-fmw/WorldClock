import React from 'react'
import Clock from '../components/Clock'
import cities from '../data'

function Home() {
	return (
		<div>
			{cities.map((city) => {
				return <Clock city={city} />
			})}
		</div>
	)
}

export default Home
