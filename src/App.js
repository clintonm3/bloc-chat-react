import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBY_FPGUqLS_yY3HJ7R8PruTnA_PZlvjmQ",
  authDomain: "bloc-chat-react-562c1.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-562c1.firebaseio.com",
  projectId: "bloc-chat-react-562c1",
  storageBucket: "bloc-chat-react-562c1.appspot.com",
  messagingSenderId: "720684732453"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeRoom: "", username: "" };
  }

  setUser = (user) => {
    if (user !== null) {
      this.setState({ username: user.displayName });
    }
  }

  selectRoom(room) {
    this.setState({ activeRoom: room.target.innerHTML });
  }

  render() {
    return (
      <section className="section-content">
        <aside id="left-section">
        <h1 id="title">Bloc Chat</h1>
          <RoomList firebase={firebase} activeRoom={this.state.activeRoom} handleClick={(e) => this.selectRoom(e)}/>
          <User firebase={firebase} setUser={(user) => this.setUser(user)} username={this.state.username}/>
        </aside>
        <aside id="right-section">
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom} user={this.state.username}/>
        </aside>
      </section>
    );
  }
}

export default App;
