import React, { Component } from 'react'
// import styles from './styles'

class BottomContent extends Component {
  render() {
    return (
      <div className='bottom-content'>
          <div className="bottom-content-container">
               <div className='title'> How to send money with Safepay </div>
               <div className='three-item-block-container'>
                <div className='three-item-block'>
                  <div className="circle"><span>1</span></div>
                  <h2>ACCESS ZELLE</h2>
                  Get started by enrolling your email or mobile number through your mobile banking app or with the Zelle app.
                </div>
                <div className='three-item-block'>
                  <div className="circle"><span>2</span></div>
                  <h2>PICK A PERSON TO PAY</h2>
                  Enter the preferred email address or mobile number of the recipient. You can send money to almost anyone1 with a bank account in the U.S.
                </div>
                <div className='three-item-block'>
                  <div className="circle"><span>3</span></div>
                  <h2>CHOOSE THE AMOUNT</h2>
                  Enter the amount to send. Your recipient gets a notification explaining how to complete the payment, simply and quickly.
                </div>
               </div>
          </div>
      </div>
    )
  }
}

export default BottomContent
