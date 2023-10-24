import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { INote } from 'src/app/core/interfaces/note';
import { NoteService } from 'src/app/core/services/notes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<void> = new Subject();

  public selectedNote?: INote;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _notesService: NoteService
  ) {}

  public ngOnInit(): void {
    this._activatedRoute.params
      .pipe(takeUntil(this._destroy$))
      .subscribe((res) => {
        this.selectedNote = this._notesService.getNote(res['id']);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
