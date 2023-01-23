import React from 'react'
import { FaGlobe } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='w-screen bg-slate-300 flex items-center justify-between text-white text-2xl pt-6 pb-6 pl-[40px] pr-[40px]'>
			<div>{<FaGlobe size={50} />}</div>

			<ul className='flex flex-row space-x-10'>
				<li className='font-semibold text-white'>
					<NavLink
						to='/'
						style={({ isActive }) => {
							return { color: isActive && 'grey' }
						}}>
						Home
					</NavLink>
				</li>
				<li className='font-semibold text-white'>
					<NavLink
						to='/about'
						style={({ isActive }) => {
							return { color: isActive && 'grey' }
						}}>
						About
					</NavLink>
				</li>
				<li className='font-semibold text-white'>
					<NavLink
						to='/contact'
						style={({ isActive }) => {
							return { color: isActive && 'grey' }
						}}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
