import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-text',
  templateUrl: './dialog-text.component.html',
  styleUrls: ['./dialog-text.component.scss']
})
export class DialogTextComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
      public dialogRef: MatDialogRef<DialogTextComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

}
