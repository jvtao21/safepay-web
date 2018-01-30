import React, { Component } from 'react'
import Parse from 'parse'
import Notifications, {notify} from 'react-notify-toast'
import EmailInput from './Input'

const iOSURL = "https://itunes.apple.com/pk/app/safepay-pakistan/id1234427585?mt=8"
const androidURL = "https://play.google.com/store/apps/details?id=com.dyno.trojan"

function validateEmail(email) {
  const re = /[^\s@]+@[^\s@]+\.[^\s@]+/
  return re.test(email);
}

class RightContentButton extends Component {
  render() {
    const { action, title, isLoading } = this.props
    return (
      <button
        className='content-button'
        disabled={isLoading}
        onClick={action}>
        { title }
      </button>
    )
  }
}

class RightContent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      error: "",
      email: "",
      status: ""
    }
  }

  requestEmail = () => {
    const { email } = this.state
    if (!validateEmail(email)) {
      const err = "Please enter a valid email"
      this.setState({ error: err, status: "fail" }, () => {
        notify.show(`Unable to send email: ${err}`, "error", 2000)
      })

      return
    }

    this.setState({ isLoading: true }, this.sendEmail)
  };

  sendEmail = () => {
    const { email } = this.state
    Parse.Cloud.run("Marketing___download", { email }).then(() => {
      this.setState({
        isLoading: false,
        error: "",
        status: "success"
      }, () => { 
        notify.show("Check your email for a download link!", "success", 2000) 
      })
    }).catch(err => {
      this.setState({
        isLoading: false,
        error: err.message,
        status: "fail"
      }, () => {
        notify.show(`Unable to send email: ${err.message}`, "error", 2000)
      })
    })
  };

  setButtonAction = () => {
    const agent = this.getUserAgent()
    let url = 'https://www.getsafepay.com'
    if (agent === 'iOS') {
      url = iOSURL
    } else if (agent === 'Android') {
      url = androidURL
    }

    window.open(url, '_blank')
  };

  getUserAgent = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
       return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
       return "iOS";
    }
    return 'website'
  };

  isMobile = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true
    }

    return false
  };

  saveEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  };

  getEmailInput = () => {
    const isMobile = this.isMobile()
    if (!isMobile) {
      return <EmailInput 
        onBlur={this.saveEmail} />
    }

    return null
  };

  getButtonTitle = () => {
    if (this.isMobile()) {
      return "Download Now"
    }

    return "Email me a link"
  };

  getButtonAction = () => {
    if (this.isMobile()) {
      return this.setButtonAction
    }

    return this.requestEmail
  };

  render() {
    return (
      <div className='content-right'>
        <Notifications />
        <div className='content-right-container'>
          <div className='header-title'>Make and share payments</div>
          { this.getEmailInput() }
          <RightContentButton 
            title={this.getButtonTitle()} 
            action={this.getButtonAction()} />
        </div>
      </div>
    )
  }
}


export default RightContent
