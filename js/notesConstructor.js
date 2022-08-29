export default class notesConstructor {
    constructor(root, {onNoteEdit} = {}) {
        this.root = root;
        this.onNoteEdit = onNoteEdit;
        this.root.innerHTML =`
            <input type="text" class="notes-title" placeholder="Notes Title">
            <textarea class="notes-body">Start typing...</textarea>
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