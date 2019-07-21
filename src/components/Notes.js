import React, { Component } from 'react';
import app from "./../base";

export class Notes extends Component {


  removeNote (id) {
    app.database().ref('notes').child(id).remove();
  }

  render() {
    return (
      <section className="notes-wrapper">
        <h3>Notes</h3>
        <div className="notes row">
            {this.props.notes.map(note => (
                <div className="note col col-12 col-sm-6 col-md-4 col-lg-4" key={note.id}>
                    <div className="content">
                        <div className="note-title">
                            <h3>{note.title}</h3>
                            <div className="remove" onClick={()=> this.removeNote(note.id)}>x</div>
                        </div>
                        <div className="note-content">
                            <p>{note.note}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    )
  }
}

export default Notes;