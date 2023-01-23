import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import cities from '../data'

export default function SingleClock() {
	const [time, setTime] = useState()

	const { singleClockId } = useParams() //singleClockId = "URL-parametern" i App.js
	const city = cities.find((city) => {
		return city.cityName === singleClockId //cityName = vår key
	})

	useEffect(() => {
		setInterval(() => {
			let newTime = new Date().toLocaleTimeString(city.regionCode, { timeZone: city.timeZone, timestyle: 'long', hourCycle: 'h24' })
			setTime(newTime)
		}, 1000)
	})

	return (
		<div>
			<div
				className='relative inline-flex flex-col justify-center items-center 
         bg-slate-100 mt-8 ml-4 mr-4 mb-4 rounded-lg pt-8 pb-8 pl-8 pr-8 w-[600px] h-[400px]'>
				<div className='text-[40px] font-semibold'>{city.cityName}</div>
				<div className='text-[60px] font-bold mt-8 mb-6'>{time}</div>
				<div className='text-[20px] font-semibold'>{city.timeZone}</div>
				<button className='absolute bottom-6 right-6 hover:text-slate-300'>
					<Link to='/'>{<AiFillCloseCircle />}</Link>
				</button>
			</div>
		</div>
	)
}
