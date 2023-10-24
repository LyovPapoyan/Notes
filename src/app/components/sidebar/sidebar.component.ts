import { Component } from '@angular/core';
import { INote } from 'src/app/core/interfaces/note';
import { NoteService } from 'src/app/core/services/notes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public selectedNoteId!: string;
  public notes!: INote[];

  constructor(public notesService: NoteService) {}

  public selectedNote(id: string): void {
    this.selectedNoteId = id;
  }

  public addNote(): void {
    const title = prompt('Введите заголовок заметки');
    const text = prompt('Введите текст заметки');
    if (title && text) {
      const note = { title, text };
      this.notesService.addNote(note);
    } else {
      alert('Необходимо вводить заголовок и текст заметки.');
    }
  }
}
