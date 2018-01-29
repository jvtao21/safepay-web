import React, { Component } from 'react'
import Header from '../header/Header'
import LeftContent from '../content/leftContent/LeftContent'
import RightContent from '../content/rightContent/RightContent'
import BottomContent from '../content/bottomContent/BottomContent'
import Footer from '../footer/Footer'
import styles from './styles'

export default class Home extends Component {
  render() {
    return (
    <div style={styles.container} className='home-container'>
      <Header/>
      <div>
        <div className='home-content'>
          <LeftContent />
          <RightContent />
        </div>
        <BottomContent />
      </div>
      <Footer/>
    </div>
    )
  }
}
