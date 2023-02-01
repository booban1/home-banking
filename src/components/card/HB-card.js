import React from 'react'
import './hbcard.css'
import banklogo from './bankLogo.png'

export default function HBcard() {
  return (
	<div className='hb-card'>
		<p  className='hb-card-bankname	'>HBT Bank</p>
		<p  className='hb-card-bankacn'>122 5656 566 8845 </p>
		<div className='hb-card-serial'>
			<p className='hb-card-hname'>Booban Design</p>
			<p className='hb-card-hname'>01/30</p>
			<span className='hb-card-logo'>
				<img src={banklogo}></img>
			</span>
		</div>

	</div>
  )
}
