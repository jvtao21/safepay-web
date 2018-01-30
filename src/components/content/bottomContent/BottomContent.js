import React, { Component } from 'react'

class BottomContent extends Component {
  render() {
    return (
      <div className='bottom-content'>
        <div className="bottom-content-container">
           <div className='title'> How to send money with Safepay </div>
           <div className='three-item-block-container'>
            <div className='three-item-block'>
              <div className="circle"><span>1</span></div>
              <h2>ACCESS SAFEPAY</h2>
              Get started by downloading the Safepay app and signing up with Facebook.
            </div>
            <div className='three-item-block'>
              <div className="circle"><span>2</span></div>
              <h2>PICK A PERSON TO PAY</h2>
              Search for your friends through their name, email address or mobile number. You can send money to anyone in Pakistan as long
              as they're registered on Safepay.
            </div>
            <div className='three-item-block'>
              <div className="circle"><span>3</span></div>
              <h2>CHOOSE THE AMOUNT</h2>
              Enter the amount to send. Your recipient gets a notification after you have completed the payment. It's simple and quick.
            </div>
           </div>
        </div>
      </div>
    )
  }
}

export default BottomContent
