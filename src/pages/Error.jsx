import React from 'react'
import { Link } from "react-router-dom"


function Error() {
  return (
    <div>
    <h2 className='font-semibold text-2xl'>404 - Page Not Found</h2>
    <p>Back to <Link className=' text-slate-500 font-semibold' to="/">Home</Link></p>
    </div>

  )
}

export default Error