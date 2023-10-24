import { Injectable } from '@angular/core';
import { INote } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  public notes: INote[] = [
    {
      id: '1',
      title: 'Заметка 1',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: '2',
      title: 'Заметка 2',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
    {
      id: '3',
      title: 'Заметка 3',
      text: 'Any desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    },
  ];

  public getNote(id: string): INote | undefined {
    return this.notes.find((note) => note.id === id);
  }

  public addNote(note: INote): void {
    this.notes.push({
      ...note,
      id: String(this.notes.length + 1),
    });
  }
}
