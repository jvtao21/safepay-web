import React, { Component } from 'react'

class RightContentButton extends Component {
  constructor(props) {
    super(props)
    this.setBtnAction = this.setBtnAction.bind(this)
  }

  getUserAgent(){
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
       return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
       return "iOS";
    }
    return 'website'
  }

setBtnAction() {
  const agent = this.getUserAgent()
  console.log(agent)
  let url = 'https://www.google.com/'
  if (agent === 'iOS') {
    url = 'https://itunes.apple.com/pk/app/safepay-pakistan/id1234427585?mt=8'
  } else if (agent === 'Android') {
    url = 'https://www.google.com/'
  }
  console.log(url)
    window.open(url, '_blank')
}

  render() {
    return (
      <button
        className='content-button'
        onClick={this.setBtnAction}
      >
        Download
      </button>
    )
  }
}

class RightContent extends Component {
  render() {
    return (
      <div className='content-right'>
        <div className='content-right-container'>
          <div className='header-title'>Send money and make purchases</div>
          <RightContentButton />
        </div>
      </div>
    )
  }
}


export default RightContent
