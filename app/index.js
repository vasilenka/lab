import './index.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <p>This is the tinkering starter kit for React ⚛️</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)