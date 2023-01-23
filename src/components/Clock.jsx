import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState, useEffect } from 'react'

function Clock({ city }) {
	const [time, setTime] = useState()

	const { cityName, regionCode, timeZone } = city

	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleTimeString({ regionCode }, { timeZone, hourCycle: 'h24' }))
		}, 1000)
	})

	return (
		<div
			key={cityName}
			className='relative inline-flex flex-col justify-center items-center
            bg-slate-100 mt-8 ml-4 mr-4 mb-4 rounded-lg pt-4 pb-4 pl-4 pr-4 w-1/4'>
			<div className='text-[20px] font-semibold'>{cityName}</div>

			<div className='text-[40px] font-bold mt-6 mb-6'>{time}</div>

			<div className='text-[10px] font-semibold'>{city.timeZone}</div>

			<button className='absolute bottom-6 right-6 hover:text-slate-300'>
				<Link to={`/clock/${cityName}`}>{<AiOutlineSearch size={30} />}</Link>
			</button>
		</div>
	)
}

export default Clock
