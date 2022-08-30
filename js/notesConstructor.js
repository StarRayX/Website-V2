export default class notesConstructor {
    constructor(root, {onNoteEdit} = {}) {
        this.root = root;
        this.onNoteEdit = onNoteEdit;
        this.root.innerHTML =`
            <input type="text" class="notes-title" placeholder="Notes Title">
            <hr class="notesHr">
            <textarea class="notes-body" id="notesBody">Start typing...</textarea>
            <p id="demo"></p>
        `;

        const inpTitle = this.root.querySelector(".notes-title");
        const inpBody = this.root.querySelector(".notes-body");

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });
    };

    updateActiveNote(note) {
        this.root.querySelector(".notes-title").value = note.title;
        this.root.querySelector(".notes-body").value = note.body;
    }
};