import React, { Component } from 'react'
import './Post.css'
export default class Post extends Component {
  render() {
    return (
      <div className='post'>
        <div className='post_header'>
            <Avatar
                className="post_avatar"
                alt={username}
                src="/static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
        </div>
        <img className='post_image' src={imageUrl} alt="React" />
        <h4 className='post_text'><strong>{username}</strong>{caption}</h4>
      </div>
    )
  }
}

