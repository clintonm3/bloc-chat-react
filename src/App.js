import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
    this.state = { activeRoom: "" };
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
        </aside>
        <aside id="right-section">
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
        </aside>
      </section>
    );
  }
}

export default App;
