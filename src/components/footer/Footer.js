import React, { Component } from 'react'
// import styles from './styles'

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
              <a alt='' href="https://itunes.apple.com/us/app/venmo/id351727428?mt=8"><img alt='missing' className='app-store-badge' src='/images/apple-app-store.svg'/></a>
              <a href="https://itunes.apple.com/us/app/venmo/id351727428?mt=8"><img alt='missing' className='google-play-badge' src='/images/google-play-badge.svg'/></a>
            </div>
          </div>
        </div>
      <div className='copyright'>
        <div className='copyright-container'><span>Venmo is a service of PayPal, Inc., a licensed provider of money transfer services (NMLS ID: 910457). All money transmission is provided by PayPal, Inc. pursuant to PayPal, Inc.’s licenses. © 2017 PayPal, Inc.
        </span>
        <a href="https://itunes.apple.com/us/app/venmo/id351727428?mt=8"><img alt='missing' className='wabi' src='/images/wabiLogo.png'/></a>

      </div>
      </div>
      </div>
    )
  }
}

export default Footer
