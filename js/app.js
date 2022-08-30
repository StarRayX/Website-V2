import notesConstructor from "./notesConstructor.js";
import notesAPI from "./notesAPI.js";

export default class app {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new notesConstructor(root, this._handlers());

        this._refreshNotes();
    }

    _refreshNotes() {
        const notes = notesAPI.getAllNotes();

        this._setNotes(notes);

        if (notes.length > 0) {
            this._setActiveNote(notes[0])
        }
    }

    _setNotes(notes) {
        this.notes = notes;
    }

    _setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note);
    }

    _handlers() {
        return {
            onNoteEdit: (title, body) => {
                notesAPI.saveNote({
                    title,
                    body
                });

                this._refreshNotes();
            }
            
        }
    }
}