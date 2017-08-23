
const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash')

const notes = require('./notes.js')

const argv = yargs.command('add', 'Add a new note', {
            title: {
              describe : 'Title of the note',
              demand : true,
              alias : 't'
            },
            body: {
              describe : 'Body of the note',
              demand : true,
              alias : 'b'
            }
          })
          .help()
          .argv

var command = process.argv[2]
if (command == 'add'){
  var title = notes.addNote(argv.title, argv.body);
  console.log(title ? title + " added" : "Note with that title already exists");
}
else if (command == 'remove') {
    var response = notes.removeNote(argv.title);
    console.log(response ? argv.title + " deleted" : "Note not found");
}
else if (command == 'read') {
  var note = notes.readNote(argv.title);
  if (note.length > 0){
    notes.logNote(note[0]);
  }
  else{
    console.log("Note not found")
  }
}
else if (command == 'list') {
  var allNotes = notes.getAll();
  if(allNotes.length > 0){
    allNotes.forEach(n => notes.logNote(n))
  }
  else{
    console.log("No notes found");
  }
}
else{
  console.log("Command not recognized");
}

// notes.addNote()
