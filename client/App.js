import React, { Component } from 'react'
import SimpleForm from './components/SimpleForm/SimpleForm'

export default class App extends Component {

  state = {
    lastName: 'Goldstein',
  }

  render () {
    return (
      <div style={ { padding: 20, border: '1px solid blue' } }>
        APP
        <div>APP state.lastName = { this.state.lastName }</div>
        <SimpleForm
          name='david'
          lastName={ this.state.lastName }
          onChange={ this.onLastNameChange }
        />
      </div>
    )
  }

  onLastNameChange = lastName => {
    this.setState({ lastName })
  }

}
