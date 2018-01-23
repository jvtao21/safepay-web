import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'

export default class Header extends Component {
  render() {
    let picture = '/images/safepayLogo.png'
    return (
      <div style={styles.header} className='header'>
        <img className='logo' src={picture} />
      </div>
    )
  }
}
