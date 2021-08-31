import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { DialogTextComponent } from './dialog-text/dialog-text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public mentionLegale: string; 
  public politiqueConfidentialite: string;

  constructor(
    private dialog: MatDialog
  ) {
    this.mentionLegale = "";
    this.politiqueConfidentialite = "";
  }

  public openTarif(): void {
    const dialogRef = this.dialog.open(DialogTextComponent, {
      width: '650px',
      data: {title: 'Tarif'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  public openContact(): void {
    const dialogRef = this.dialog.open(DialogContactComponent, {
      width: '650px',
      height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openDialogText(title: string, text?: string): void {
    const dialogRef = this.dialog.open(DialogTextComponent, {
      width: '650px',
      data: {title: title, text: text}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

}
