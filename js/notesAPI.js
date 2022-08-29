export default class notesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes;
    }

    static saveNote(noteToSave) {
        const notes = notesAPI.getAllNotes();
        const loaded = notes[0]
        if (notes.length == 1) {
            loaded.title = noteToSave.title;
            loaded.body = noteToSave.body;
            loaded.updated = new Date().toISOString();
        } else {
            notes.push(noteToSave);
        }

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }
}