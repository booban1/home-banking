import React, { Component } from 'react';
import './hb-input.css'
import userIcon from './user.svg'


export class HBinput extends Component {

  constructor(props) {
	  super(props);
	
	  this.state = {
      item: {
        name: 'name',
        label: "label"
      }
	}
}

  changeHandler = event => {
    event.persist();
  
    let value = event.target.value;
  
    this.setState(prevState => ({
      item: { ...prevState.item,  [event.target.name]: value }
    }))
  };

  render(){
    return (
      <div className='hb-input'>
          <p className='hb-input-label'>{this.state.item.label}</p>
          <div className='hb-input-area'>
            <img src={userIcon} alt="user"></img>
            <input 
                type="text"
                placeholder="enter name"
                name="name"
                value={this.state.item.name}
                onChange={this.changeHandler}
                
            />
          </div>
      </div>
    )
  }
  }
export default HBinput;