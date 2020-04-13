import React from 'react';
import './App.css';
import Card from './components/Card'
import FollowerList from './components/FollowerList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      userText: ''
    }
  };

  componentDidMount() {
    fetch('https://api.github.com/users/dscromer')
      .then(res => res.json())
      .then(userdata => {
        this.setState({ user: userdata});
      })
      .catch(err => {
        console.log(err)
      })

    fetch('https://api.github.com/users/dscromer/followers')
    .then(res => res.json())
    .then(followerdata => {
      this.setState({followers: followerdata});
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleChanges = e => {
    this.setState({ userText: e.target.value })
  }

  fetchUser = e => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${this.state.userText}`)
      .then(res => res.json())
      .then(userdata => {
        this.setState({ user: userdata});
      })
      .catch(err => {
        console.log(err)
      })

    fetch(`https://api.github.com/users/${this.state.userText}/followers`)
    .then(res => res.json())
    .then(followerdata => {
      this.setState({followers: followerdata});
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
  return (
    <div>
      <h1>{this.state.user.name}'s Github Card</h1>
      <input
        type='text'
        value={this.state.userText}
        onChange={this.handleChanges}
        placeholder='Enter a username'
      />
      <button onClick={this.fetchUser}>Find This User</button>
      <Card user={this.state.user} />
      <FollowerList followers={this.state.followers} />
    </div>
  );
}
}

export default App;
