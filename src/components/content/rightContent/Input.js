import React, { Component } from 'react'

export default class EmailInput extends Component {
  render() {
    return (
      <input 
        className="form-control input email" 
        id="signup_email_field" 
        name="email"
        onBlur={this.props.onBlur}
        placeholder="Enter your email address" 
        type="email" />
    )
  }
}