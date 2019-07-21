import React, { Component } from 'react';
import Header from './components/Header';
import NotesForm from './components/NotesForm';
import Notes from './components/Notes';
import app from "./base";

class Home extends Component {
    constructor() {
        super();

        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        document.title="Home page"
        this.db = app.database();
        this.listenForChange();
    }

    listenForChange() {
        this.db.ref('notes').on('child_added', snapshot => {
            let note = {
                id: snapshot.key,
                title: snapshot.val().title,
                note: snapshot.val().note
            }

            let notes = this.state.notes;
            notes.push(note);

            this.setState({
                notes: notes
            });
        });

        this.db.ref('notes').on('child_removed', snapshot => {
            let notes = this.state.notes;
            notes = notes.filter(note => note.id !== snapshot.key);

            this.setState({
                notes: notes
            });
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <Notes notes={this.state.notes} />
                    <NotesForm />
                </main>
            </div>
        );
    }
}


export default Home;