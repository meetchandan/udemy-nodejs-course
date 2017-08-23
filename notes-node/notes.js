
const fs = require('fs');

var fetchNotes = () => {
  var notes = [];
  try{
    notes = JSON.parse(fs.readFileSync('notes.json'));
  }
  catch(e){
  }
  return notes;
}

var saveNotes = (notes) => {
  var noteString = JSON.stringify(notes);
  fs.writeFileSync('notes.json', noteString);
}

var addNote = (title, body) => {
  var allNotes = fetchNotes();
  var noteObj = {
    title,
    body
  }
  var duplicateNotes = allNotes.filter(note => note.title === title);
  if(duplicateNotes.length === 0){
    allNotes.push(noteObj);
    saveNotes(allNotes);
    return title;
  }
}

var removeNote = (title) => {
  var allNotes = fetchNotes();

  var notes = allNotes.filter(note => note.title !== title);
  if(notes.length > 0){
    saveNotes(notes);
  }
  return notes.length !== allNotes.length;
}

var getAll = () => {
  return fetchNotes();
}

var readNote = (title) => {
  return fetchNotes().filter(note => note.title == title);
}

var logNote = (note) => {
  debugger;
  console.log("---")
  console.log(`Title : ${note.title}`)
  console.log(`Body : ${note.body}`)
}

module.exports = {
  addNote,
  removeNote,
  getAll,
  readNote,
  logNote
}
