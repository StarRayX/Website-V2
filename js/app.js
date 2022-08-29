import notesConstructor from "./notesConstructor";
import notesAPI from "./notesAPI";

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

    _setNotes() {
        this.notes = notes;
        this.view.updateNoteList(notes);
    }

    _setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote();
    }

    _handlers() {
        return {
            onNoteEdit: (title, body) => {
                console.log(title, body);
            }
        }
    }
}