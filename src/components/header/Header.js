import React, { Component } from 'react'
import styles from './styles'

export default class Header extends Component {
  render() {
    let picture = '/images/Safepay-logo-full.png'
    return (
      <div style={styles.header} className='header'>
        <div style={styles.headerContainer} className='header-container'>
            <a href="/home"><img alt='missing' className='logo' src={picture} /></a>
        </div>
      </div>
    )
  }
}
