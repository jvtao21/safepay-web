import React, { Component } from 'react'
import Parse from 'parse'
import styles from './styles'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    Parse.initialize('Trojan')
    Parse.serverURL = 'https://sandbox.getsafepay.com/api'
  }
  render() {
    return (
      <div style={styles.container}>
        { this.props.children }
      </div>
    )
  }
}