import { Component } from '@angular/core';

interface Note {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  notes: Note[] = [
    { title: 'First note', text: 'This is the first note' },
    { title: 'Second note', text: 'This is the second note' },
    { title: 'Third note', text: 'This is the third note' }
  ];

  selectedNote: Note | null = null;

  selectNote(note: Note) {
    this.selectedNote = note;
  }

   addNote() {
     const title = prompt('Enter note title');
     const text = prompt('Enter note text');
     if (title && text) {
       const note = { title, text };
       this.notes.push(note);
       this.selectedNote = note;
     }
   }
}
