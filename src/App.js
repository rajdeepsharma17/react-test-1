import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm'
import './App.css';

class App extends Component {

  constructor() {
        super()
        this.state = {
          currentUsername: '',
        }
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
      }
    
      onUsernameSubmitted(username) {
        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        })
          .then(response => {
            this.setState({
              currentUsername: username
            })
          })
          .catch(error => console.error('error', error))
      }
    
  render() {
    return (
      <div className="App">
        <h1>Chatly</h1>
        <UsernameForm onSubmit={this.onUsernameSubmitted}/>
      </div>
    );
  }
}

export default App;
