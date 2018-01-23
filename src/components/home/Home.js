import React, { Component } from 'react'
import Header from '../header/Header'
import LeftContent from '../content/leftContent/LeftContent'
import RightContent from '../content/rightContent/RightContent'
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div style={styles.container} className='home-container'>
      <Header/>
        <div className='home-content'>
          <LeftContent />
          <RightContent />
        </div>
    </div>
    )
  }
}
