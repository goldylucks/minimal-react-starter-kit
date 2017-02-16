import React, { Component, PropTypes } from 'react'

import styles from './SimpleForm.css'

export default class SimpleForm extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render () {
    return (
      <div className={ styles.container }>
        <h3>This is the Simple form header</h3>
        <input value={ this.props.lastName } onChange={ this.onLastNameChange } />
        <div>SIMPLE FORM props.lastName = { this.props.lastName }</div>
      </div>
    )
  }

  onLastNameChange = evt => {
    this.props.onChange(evt.target.value)
  }
}
