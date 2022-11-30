import React, { Component } from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

export default class SwipeButtons extends Component {
  render() {
    return (
      <div className='swipeButtons'>
        <IconButton className="swipeButtons_repeat">
            <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_left">
            <CloseIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_start">
            <StarRateIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_right">
            <FavoriteIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_lightning">
            <FlashOnIcon fontSize="large"/>
        </IconButton>
      </div>
    )
  }
}
