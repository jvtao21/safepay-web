import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Home from '../components/home/Home'
import '../styles/styles.css'

class HomeContainer extends Component {
  render() {
    return <Home />
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
)(HomeContainer)
