import React, { Component } from 'react'
import styles from './styles'

class LeftContent extends Component {
  render() {
    return (
      <div className='content-left'>
          <div className="container">
              <img className='logo-image-android' src='/images/androidHome.png'/>
              <img className='logo-image-iphone' src='/images/iphoneHome.png'/>
          </div>
      </div>
    )
  }
}

export default LeftContent
