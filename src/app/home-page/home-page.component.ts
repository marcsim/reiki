import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogTextComponent } from '../dialog-text/dialog-text.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public readMore(index: number): void {
    let $title: string = '';
    let $text: string = '';
    if (index === 1) {
      // this.router.navigate(['/information', index]);
      $title = `Le reiki, une méthode de transmission d'énergie`;
    } else if (index === 2) {
      $title = `Anita Vivien , praticienne de reiki à La Pouëze`;
    } else if (index === 3) {
      $title = `Pourquoi ?`;
    } else if (index === 4) {
      $title = `Bébés - enfants`;
      $text = `Ce soin énergétique permet un travail sur les tracas du quotidien des plus jeunes comme les peurs, les réveils nocturnes ou difficultés d'endormissement, l'hyperactivité, la confiance en soi, la concentration, la préparation aux examens scolaires, les traumatismes vécus comme une séparation, un divorce …
      La séance est plus courte que chez les adultes car ils sont plus réceptifs, il faut compter environ 40 minutes.
      En pratique, l’enfant est allongé sur le dos, habillé et je travaille uniquement avec les mains sans même toucher le corps de l’enfant, ce qui est rassurant pour les enfants qui ont parfois de la retenue vis-à-vis de leur corps et du praticien.
      Chaque enfant, est différent et je m’adapte au cas par cas.
      La séance de Reiki doit être acceptée et en aucun cas imposée à vos enfants.`;
    } else if (index === 5) {
      $title = `Adultes`;
      $text = `Le Reiki est une pratique naturelle basée sur l'apport d'énergie. 
      Une séance est avant tout un moment pour revenir à soi, libérer son corps et son esprit des tensions du quotidien, des énergies "usées", dissoudre les blocages.
      Prenez le temps de prendre le recul nécessaire, de mettre votre mental au repos.
      Le soin Reiki permet de gagner en vitalité, en énergie, de soulager vos tensions et vos douleurs, de vous "reconnecter" à vous-même et de reprendre confiance en vous et goût à la vie...`;
    } else {
      $title = `Handicapés`;
      $text = `Le Reiki est une méthode de soin énergétique répondant à un besoin de patients trop souvent négligé par la médecine moderne.
      Besoin d’autant plus important lorsque l’on est en situation de lourd handicap moteur ou mental.
      Je peux exercer avec la personne handicapée même dans son contexte hospitalier.
      Le but est de vous accompagner vers un état d'esprit plus propice aux soins médicaux et à un état plus serein avec le corps en retrouvant la confiance et l'estime de soi.`;
    }
    const dialogRef = this.dialog.open(DialogTextComponent, {
      width: '900px',
      data: {
        title: $title,
        text: $text
      }
    });
    dialogRef.afterClosed().subscribe(result => {})
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
