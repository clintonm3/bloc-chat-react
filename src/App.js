import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
