import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default class Step extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    const { onClick, value } = this.props
    return (
      <button className='step'
        onClick={onClick}>
        {value}
      </button>
    )
  }
}
