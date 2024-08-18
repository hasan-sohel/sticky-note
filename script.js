var add = document.querySelector("#add");
var main_section = document.querySelector("#main-section");
var counter = 0;

function addNote(title = "", details = "") {
    counter++;
    var newNoteDiv = document.createElement("div");
    newNoteDiv.classList.add("main");
    newNoteDiv.innerHTML = `<div class="first-part">
        <div class="counting">${counter}</div>
        <div><input class="titles" type="text" placeholder="Title" value="${title}"></div>
        <div class="button-container">
            <button class="save-button buttons" onclick="saveFunction()">
                <i class="fa-solid fa-floppy-disk"></i>
            </button>
            <button class="delete-button buttons">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
    <div id="second-part">
        <textarea class="details" placeholder="Write Your Details Here...">${details}</textarea>
    </div>`
    main_section.appendChild(newNoteDiv);

    newNoteDiv.querySelector(".delete-button").addEventListener("click", function(){
        newNoteDiv.remove();
        saveFunction();

    })
}

function saveFunction() {
    var allNotes = document.querySelectorAll(".main");
    var noteArray = []; 
    console.log(allNotes);
    allNotes.forEach((main) => {
        var noteTitle = main.querySelector(".titles");
        var noteDetails = main.querySelector(".details");
        var noteObj = {
            "title": noteTitle.value,
            "details": noteDetails.value
        };
        noteArray.push(noteObj);
    });
    localStorage.setItem("main", JSON.stringify(noteArray));
}
var all_saved_note = JSON.parse(localStorage.getItem("main"));
console.log(all_saved_note);

if(all_saved_note.length == 0){
    addNote();
}
all_saved_note.forEach((elm) => {
    addNote(elm.title, elm.details);
});