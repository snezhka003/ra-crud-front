import { Component } from "react";
import GetButton from "./GetButton";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

export default class Notes extends Component {
  state = {
    notes: []
  }

  componentDidMount = () => this.loadFromServer();

  loadFromServer = () => {
    console.log('work load');
    fetch(import.meta.env.VITE_API_URL)
    .then(response => response.json())
    .then(notes => this.setState({ notes }))
  }

  deleteFromServer = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/${id}`, { method: 'DELETE' })
    .then(() => this.loadFromServer())
  }

  addToServer = ({ id = 0, content }) => {
    fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify({ id, content }),
    }).then(() => this.loadFromServer())
  }

  render() {
    return (
      <div className="notes">
        <GetButton onGet={this.loadFromServer} />
        <NotesList item={this.state.notes} onDelete={this.deleteFromServer} />
        <NotesInput onAdd={this.addToServer} />
      </div>
    );    
  }
}