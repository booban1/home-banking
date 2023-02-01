import React from 'react'
import './hb-input.css'
import userIcon from './user.svg'

export default function HBinput(props) {
  return (
    <div className='hb-input'>
        <p className='hb-input-label'>{props.label}</p>
        <div className='hb-input-area'>
          <img src={userIcon} alt="user"></img>
          <input type="text" defaultValue={props.defval}></input>
        </div>
    </div>
  )
}
