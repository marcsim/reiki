import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
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
    private dialog: MatDialog,
    private meta: Meta,
    private title: Title,
  ) {
    this.mentionLegale = "";
    this.politiqueConfidentialite = "";
    this.meta.addTags([
      {name: 'description', content: 'Site de conseil en Reiki et en soins énergétique. Ce site met en avant des prestations de massage et de soins énergétiques'},
      {name: 'author', content: 'Marc-antoine simon'},
      {name: 'keywords', content: 'reiki, reiki formation, reiki danger, reiki usui, reiki à distance, reiki avis, reiki zen meditation music, reiki bienfaits, reiki 3 minutes, reiki 3 min, reiki paris, reiki forum, reiki musique, reiki définition, reiki signification, reiki lyo, reiki youtub, reiki symboles, reiki bordeaux, reiki massag, reiki karun, reiki c\'est quoi, reiki toulouse, reiki music, reiki montpellier, reiki musique clochette 3 minutes, reiki secte, reiki image, reiki energie, reiki symbols'},
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-05-17', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { name: 'copyright', content:'Anita vivien' },
      { property: 'og:title', content: 'Reiki et soins énergétiques | Pour enfants, adultes, handicapés'},
      { property: 'og:description', content: 'Site de conseil en Reiki et en soins énergétique. Ce site met en avant des prestations de massage et de soins énergétiques'},
      { property: 'og:url', content: 'https://wwww.reiki49.fr'},
      { property: 'og:site_name', content: 'Reiki49'}
    ]);
    this.setTitle('Reiki et soins énergétiques | Pour enfants, adultes et handicapés');
  }

  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }

  public openTarif(): void {
    const dialogRef = this.dialog.open(DialogTextComponent, {
      width: '650px',
      data: {title: 'Tarif'}
    });
    dialogRef.afterClosed().subscribe(result => {})
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
