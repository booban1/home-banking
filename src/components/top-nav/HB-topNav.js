import React from 'react'
import  './hb-topnav.css'
import navBtn from './icon-right.svg'

export default function HBtopNav() {
  return (
	<div className='hb-topnav'>
		<img src={navBtn}></img>
		<span className='hb-title'>Home Banking</span>
		<span className='hb-status'>
			<p className='hb-status-avatar'>B</p>
			<span className='hb-status-flag'></span>
		</span>
	</div>
  )
}
