import React, { Component } from 'react'
// import styles from './styles'

const iOSURL = "https://itunes.apple.com/pk/app/safepay-pakistan/id1234427585?mt=8"
const androidURL = "https://play.google.com/store/apps/details?id=com.dyno.trojan"
const line1 = "Safepay is a service of Intelligent Financial Technologies Inc a PCI compliant technology company."
const line2 = "Intelligent Financial Technologies is located in Karachi, Pakistan and San Francisco, California"
const copyright = line1 + " " + line2

class Footer extends Component {
  render() {
    return (
    <div>
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-block-group'>
            <div className='footer-block'>
              <h4>Company</h4>
              <ul>Our Team</ul>
            </div>
            <div className='footer-block'>
              <h4>Community</h4>
              <ul>Facebook</ul>
              <ul>Twitter</ul>
              <ul>Blog</ul>
            </div>
            <div className='footer-block'>
              <h4>Terms</h4>
              <ul>Legal</ul>
            </div>
          </div>
            <div className='footer-block-badges'>
              <a alt='' href={iOSURL}><img alt='missing' className='app-store-badge' src='/images/apple-app-store.svg'/></a>
              <a href={androidURL}><img alt='missing' className='google-play-badge' src='/images/google-play-badge.svg'/></a>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <div className='copyright-container'>
            <span>
              { copyright }
            </span>
            <a href={iOSURL}><img alt='missing' className='wabi' src='/images/wabiLogo.png'/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
