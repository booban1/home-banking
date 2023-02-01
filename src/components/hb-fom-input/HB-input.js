import React from 'react'
import './hb-input.css'
import userIcon from './user.svg'

export default function HBinput() {
  return (
    <div className='hb-input'>
        <p>User Name</p>
        <div className='hb-input-area'>
          <img src={userIcon} alt="user"></img>
          <input type="text"></input>
        </div>
    </div>
  )
}
