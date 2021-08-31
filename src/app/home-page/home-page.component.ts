import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTextComponent } from '../dialog-text/dialog-text.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  public scrollToContent(): void {
    document.getElementById('content').scrollTo({left: 0, top: 950, behavior: 'smooth'});
  }

  public readMore(index: number): void {
    let $title: string = '';
    let $text: string = '';
    if (index === 1) {
      $title = `Le reiki, une méthode de transmission d'énergie`;
      $text = `Le reiki est un moyen de développement personnel et une approche thérapeutique manuelle pour une meilleure écoute du corps.
      C’est également une préparation émotionnelle face à certaines situations qui permet de faire appel aux ressources naturelles que chaque personne possèdent. 
      Cette thérapie par apposition des mains permet de transmettre l'énergie vitale pour libérer les blocages et de développer le processus d'auto-guérison. 
      Praticienne qualifiée, mon cabinet est situé à La Pouëze près de Segré, Lion-d’Angers, Montreuil-Juigné, Beaucouzé ou encore Avrillé, je propose des soins à titre préventif pour favoriser votre capital santé (apporter un bien-être, prendre un moment pour soi...) mais aussi à titre curatif suite à une maladie ou à un accident. 
      En pratique régulière, le reiki se base sur la pose des mains de votre énergéticienne à distance ou sur le corps ce qui permet d’apporter l’énergie qui va se diriger naturellement vers les zones qui en ont le plus besoin.`;
    } else if (index === 2) {
      $title = `Anita Vivien , praticienne de reiki à La Pouëze`;
      $text = `Passionnée par le reiki et l’art japonais d'harmonisation et de guérison, praticienne qualifiée je vous reçois à La Pouëze Erdre en Anjou dans le département du Maine-et-Loire.
      Je propose des séances de reiki adaptées à chaque personne afin de vous aider à retrouver votre capitale santé (apporter un bien-être, prendre un moment pour soi, et aider le corps à s'auto-guérir).
      Née en 1972 dans les Mauges, j'ai travaillé dans le commerce pendant 28 ans.
      De part mon expérience de vie, j'ai eu la chance de découvrir le monde et les bienfaits du Reiki.
      L'énergie reiki ma permis d'améliorer mon quodidien, d'accepter les moments plus difficiles de ma vie, d'avoir une autre vision de mon corps, de mon mental.
      Pour cela j'ai suivi les formations :
          REIKI USUI 1 : shoden
          REIKI USUI 2 : okuden
          REIKI USUI 3 : shinpiden  ainsi que le REIKI KARUNA® 1et 2 qui complète et renforce le reiki usui.
      Après avoir compris les vertus bienfaisantes du reiki, j'ai décidée d'en faire mon métier pour vous apporter cette belle énergie de vie qui aidera votre corps et votre mental à se ressourcer et à retrouver une vie harmonieuse.
      Praticienne qualifiée, je vous reçois à mon domicile dans le département du Maine-et-Loire et j'ai la possibilité de me déplacer chez vous ou en institut dans un rayon de 30 km autour de La Pouëze, notamment à Segré, au Lion-d’Angers, à Montreuil-Juigné, à Beaucouzé ou encore à Avrillé.`;
    } else if (index === 3) {
      $title = `Pourquoi ?`;
      $text = `Le reiki, énergie universelle
      Cette technique japonaise de soin énergétique restaure et ré-harmonise l’équilibre physique, mental, émotionnel et spirituel.
      Cette technique naturelle par apposition des mains permet de canaliser l’énergie vitale pour libérer les blocages et accélérer le processus d’auto-guérison et stimuler notre système immunitaire.
      Le reiki est un allié très puissant pour aider à gérer la douleur, le stress, la dépression, les troubles physiques, émotionnels, les infections, les dépendances, les troubles du sommeil...
      Le reiki aide dans la maladie, limite les effets secondaires des chimiothérapies, radiothérapies.
      Aide en fin de vie, libère les angoisses.
      Permet de retrouver la sérénité et la joie de vivre... 
      Que vous soyez à La Pouëze, Segré, Lion-d’Angers, Montreuil-Juigné, Beaucouzé ou encore Avrillé, bénéficiez d'une séance de Reiki adaptée à vos besoins.`;
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
    } else if (index === 6) {
      $title = `Handicapés`;
      $text = `Le Reiki est une méthode de soin énergétique répondant à un besoin de patients trop souvent négligé par la médecine moderne.
      Besoin d’autant plus important lorsque l’on est en situation de lourd handicap moteur ou mental.
      Je peux exercer avec la personne handicapée même dans son contexte hospitalier.
      Le but est de vous accompagner vers un état d'esprit plus propice aux soins médicaux et à un état plus serein avec le corps en retrouvant la confiance et l'estime de soi.`;
    } else {
      $title = `Animaux`;
      $text = `Les animaux sont des êtres vivants, ils méritent notre attention et nos soins.
      Ils sont très réceptifs à l'apport d'énergie.
      Tout animal peut donc être aidé par la méthode du Reiki pour tout signe de faiblesse physique, de difficulté relationnelle avec les autres, de douleur suite à une maladie, une blessure ou une intervention chirurgicale ou encore en fin de vie..
      Ce soin énergétique de 20 min leur permettra de les apaiser et de les soulager.
      Je me déplace dans un rayon de 30 km si besoin auprès de l'animal, dans son cadre de vie.`;
    }
    const dialogRef = this.dialog.open(DialogTextComponent, {
      width: '900px',
      data: {
        title: $title,
        text: $text
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
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
