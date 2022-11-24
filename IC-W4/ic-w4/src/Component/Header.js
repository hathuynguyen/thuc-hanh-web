import React, { Component } from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>
        <img className='header_logo' src="logo192.png" alt="header"/>
        <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>    
      </div>
    )
  }
}
