import React, { Component } from 'react'
import LeftContent from '../content/leftContent/LeftContent'
import RightContent from '../content/rightContent/RightContent'
import BottomContent from '../content/bottomContent/BottomContent'
import Footer from '../footer/Footer'

export default class Home extends Component {
  render() {
    return (
    <div className='home-container'>
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
