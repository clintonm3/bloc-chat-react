import React, { Component } from 'react';

class RoomList extends Component {
  constructor (props) {
  super(props);

  this.state = {rooms: [], name: ''};

  this.roomsRef = this.props.firebase.database().ref('rooms');
  this.handleChange = this.handleChange.bind(this);
  this.createRoom = this.createRoom.bind(this);
}

componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat(room) })
     });
   }

   handleChange = (e) => {
     this.setState({ name: e.target.value })
   }

   createRoom(e) {
     e.preventDefault();
     if (!this.state.name) { return }
     this.roomsRef.push({ name: this.state.name });
     this.setState({ name: "" });
   }

   render() {
     return (
       <section id="rooms">
         <h1>Select A Room</h1>
           <div>
            {this.state.rooms.map((room, index) =>
            <p onClick={(e) => this.props.handleClick(e)} key={index}>{room.name}</p>
          )}
           </div>
           <div>
           <form onSubmit={(e) => this.createRoom(e)} id="room-form">
              <label id="room-label" htmlFor="create-room">Create New Room</label>
              <input id="room-input" type="text" name="create-room" ref="room-input" placeholder="Enter Room Name" value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
              <button id="submit-button" type="submit" form="room-form">Create</button>
           </form>
        </div>
      </section>
    );
  }
}

export default RoomList;
