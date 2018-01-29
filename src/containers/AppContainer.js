import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles'

class AppContainer extends Component {

  render() {
    return (
      <div style={styles.container}>
        { this.props.children }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
