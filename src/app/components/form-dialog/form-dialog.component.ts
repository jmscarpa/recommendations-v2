import { Recommendation } from '../../models/recommendation';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit, OnChanges {

  @Input() public recommendation?: Recommendation;
  @Input() public showDialog: boolean = false;
  @Output() public onCloseDialog: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('dialog')
  public dialog!: ElementRef<HTMLDialogElement>;

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.showDialog) {
      this.dialog.nativeElement.showModal()
    }
  }

  public onAfterSave(): void {
    this.dialog.nativeElement.close()
    this.onCloseDialog.emit()
  }


}
