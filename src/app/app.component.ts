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
    private router: Router,
    private dialog: MatDialog
  ) {
    this.mentionLegale = "Nom Société/Entreprise : VIVIEN ANITA Forme : Entrepreneur individuel Représentée par : ANITA VIVIEN Siège social : 22 Rue du Pressoir 49370 La poueze N° TVA intracommunautaire : FR44789999083 N° SIRET : 78999908300015 RCS : Non renseigné Directeur de la publication : ANITA VIVIEN Email : contact@plenizen-lapoueze.com Tél. : 06.51.29.09.28 Hébergement :OVH 2 rue Kellermann - 59100 Roubaix - France SAS au capital de 10 069 020 € RCS Lille Métropole 424 761 419 00045 Code APE 2620Z N° TVA : FR 22 424 761 419 L’Editeur, responsable du Site, se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes mentions légales. PROPRIÉTÉ INTELLECTUELLE Les marques et les logotypes figurant sur le site constituent des signes déposés par l’Editeur ou par des tiers/partenaires et protégés au titre du droit des marques. Toute reproduction, imitation ou usage, total ou partiel, de ces signes distinctifs sans l’autorisation expresse de l’Editeur et en violation des interdictions prévues aux articles L.713-2 et suivants du Code la propriété intellectuelle engage la responsabilité de leur auteur au titre d’actes de contrefaçon.Les autres signes distinctifs, notamment les dénominations sociales, noms commerciaux, enseignes, noms de domaine reproduits sur le site sont la propriété de l’Editeur ou de tiers/partenaires, et toute reproduction sans autorisation expresse de l’Editeur est susceptible d’engager la responsabilité civile de son auteur sur le fondement de l’article 1240 du Code civil.Il en est de même des éventuelles bases de données figurant sur le site Internet qui sont protégées par les dispositions de la loi du 11 juillet 1998 portant transposition dans le Code de la propriété intellectuelle (CPI) de la directive européenne du 11 mars 1996 relative à la protection juridique des bases de données.Les liens hypertextes mis en place dans le cadre du site Internet en direction d’autres ressources présentes sur le réseau de l’Internet, et notamment vers ses partenaires ont fait l’objet d’une autorisation préalable expresse. Toute information accessible via un lien hypertexte n’est pas publiée par l’Editeur du présent site, celui-ci ne disposant d’aucun droit portant sur les contenus mis en ligne à travers lesdits liens.Aucun lien hypertexte menant au Site ne peut être activé sans l’autorisation expresse et préalable de l’Editeur.Les photographies reproduisant des produits proposés à la vente ne sont pas contractuelles.RESPONSABILITÉLa responsabilité de l’Editeur ne peut être engagée en cas de défaillance, panne ou interruption empêchant l’accès au Site ou limitant son usage.Le matériel de connexion et de navigation utilisée relève de la seule responsabilité de son utilisateur, lequel doit prendre toutes les mesures appropriées pour protéger son matériel, s’agissant notamment d’attaques virales.L’Editeur décline toute responsabilité résultant d’une intrusion frauduleuse d’un tiers ayant entrainé une modification des informations présentées sur le Site.";
    this.politiqueConfidentialite = "La présente politique de confidentialité est fondée sur le Règlement UE 2016/679 relatif à la protection des données (RGPD) ainsi que sur votre consentement éclairé. Elle a pour objectif de vous informer sur le traitement de vos données à caractère personnel.  Cette politique de confidentialité ne s’applique qu’aux renseignements recueillis par le présent site, bien que ce dernier puisse contenir des liens vers d’autres sites externes. Nous ne pouvons vous garantir que ces sites appliquent la même politique que nous en matière de respect de la vie privée, c’est pourquoi nous vous recommandons de prendre connaissance des politiques de confidentialité des sites web que vous seriez amené(e) à visiter à partir de celui-ci avant de remettre vos données personnelles.  Nous nous réservons la possibilité de modifier à tout moment cette politique de confidentialité, ces modifications entrant en vigueur immédiatement. Or, à chaque nouvelle utilisation du présent site, vous vous soumettez à la politique de confidentialité en vigueur.  Aussi, nous vous invitons à relire régulièrement cette page afin de maintenir votre consentement.  Qui est le responsable du Site ?  Le Site est édité par la société VIVIEN ANITA ayant son siège social 22 Rue du Pressoir - 49370 La poueze et ayant la qualité de responsable de traitement.  Pour toute question ou démarche relative à la collecte et au traitement de vos données à caractère personnel, merci de nous contacter à l’adresse suivante contact@plenizen-lapoueze.com .  Quels renseignements sont collectés sur ce Site ?  Lorsque vous visitez un site internet, vous demeurez anonyme. Les informations collectées au cours de votre navigations servent à analyser votre comportement sur ce site et l’usage que vous en avez afin d’améliorer votre expérience utilisateur.  Les autres données personnelles que nous collectons, tels que vos nom, prénom, adresse postale, numéro de téléphone ou adresse mail, ne sont collectées que si vous acceptez de nous les fournir, par exemple lorsque vous adhérez à notre newsletter, dans le cadre de la gestion de votre demande de devis / d’information ou si vous souhaitez être recontacté(e).  Nous nous engageons par ailleurs à ne recueillir que les informations strictement nécessaires au traitement de votre demande.  En effectuant toute démarche pour nous contacter, vous garantissez l’exactitude des données à caractère personnel que vous communiquez.  Pourquoi collectons-nous vos données personnelles ?  Nous collectons vos données personnelles afin de : Gérer et assurer la relation client (demande de renseignements, devis, traitement des demandes, communication des offres commerciales ou de newsletters, amélioration de la navigation sur notre site, optimisation du développement du Site, personnalisation des services, authentification des données transmises, prévention des incidents de sécurité ou des fraudes, etc.).  La collecte de ces données à caractère personnel est fondée à la fois sur nos obligations légales et votre consentement.  Comment vos données à caractère personnel sont-elles utilisées ?  Les données personnelles communiquées sont traitées par notre société en sa qualité de responsable de traitement du Site.  Nous nous engageons à respecter la stricte confidentialité de vos données personnelles et de les utiliser uniquement pour les finalités pour lesquelles vous avez accepté de nous les communiquer. Toutefois, elles ne seront pas conservées plus longtemps que nécessaire, soit durant toute la durée de notre collaboration augmentée du délai de prescription légale. Après quoi, elles seront détruites.  Nous pouvons être amenés à les transférer à des tiers sous-traitants tels que notre prestataire informatique, notre hébergeur, lesquels peuvent être situés au sein ou en dehors de l’Union européenne. Nous veillons à ce que ces transferts s’effectuent dans le respect de la présente Politique, dans le cadre des clauses contractuelles types édictées par la Commission européenne s’agissant de nos prestataires hors UE et avec un niveau de protection équivalent et adapté, et dans la limite de ce qui est strictement nécessaire à l’exécution de leurs prestations.  Quelle est la durée de conservation ?  Les données à caractère personnel collectées et traitées par le Site sont conservées pour la durée nécessaire à leur finalité, exposée ci-dessus, et dans la limite des délais légaux pour satisfaire toute obligation légale ou réglementaire ou engager/répondre à tout litige.  Comment vos données sont-elles protégées ?  En notre qualité de responsable de traitement, nous mettons en œuvre des mesures techniques et organisationnelles appropriées, conformément aux obligations légales en vigueur, pour protéger vos données personnelles contre l’altération, la perte accidentelle ou illicite, l’utilisation, la divulgation ou l’accès non autorisé, notamment par notre politique générale de sécurité informatique, la sensibilisation aux exigences de confidentialité de nos collaborateurs, la sécurisation de nos locaux et outils informatiques, le choix de nos partenaires et de nos sous-traitants.  Quels sont vos droits ?  Vous avez le droit de ne pas vouloir nous communiquer de données personnelles.  Dans ce cas, vous pourrez naviguer sur ce site, cependant vous n’aurez pas accès à l’ensemble de ses fonctionnalités (adhérer à la newsletter par exemple, demander à être recontacté(e), …)  Vous avez un droit d’accès, de correction, de retrait, de limitation des traitements de vos données personnelles.  Vous pouvez exercer ce droit, par exemple en les mettant à jour, en nous demandant de les rectifier, de les compléter, de les mettre à jour, de les verrouiller ou en nous demandant à ce que vos renseignements ne figurent plus sur notre liste de diffusion, en nous contactant à l’adresse suivante contact@plenizen-lapoueze.com.  Vous avez le droit d’introduire une réclamation auprès de la CNIL si vous l’estimez nécessaire. Dans ce cas, nous vous invitons à consulter leur site internet aux fins de connaître les modalités d’exécution (www.cnil.fr).En amont, il est recommandé de contacter VIVIEN ANITA afin de trouver une solution.  Vous avez également un droit à la portabilité de vos données à caractère personnel.  Vous pouvez, à la même adresse que précédemment, demander à ce que l’on vous restitue sur un support utilisable toutes les données personnelles que vous nous avez fournies en vue par exemple de les transférer à un tiers.  Enfin, vous avez un droit d’opposition au traitement de vos données pour des motifs légitimes ainsi qu’un droit d’opposition à ce que ces données soient utilisées à d’autres fins que celles auxquelles vous avez consenti(e). Vous pouvez user de ce droit en contactant le responsable de traitement à l’adresse rappelée ici contact@plenizen-lapoueze.com.  Plus de questions :  Pour toutes questions cernant cette politique de confidentialité ou vos données à caractère personnel, n’hésitez pas à nous contacter à contact@plenizen-lapoueze.com ou par courrier 22 Rue du Pressoir - 49370 - La poueze.";
  }

  public goToHome(): void {
    this.router.navigate(['/home']);
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
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openDialogText(title: string, text: string): void {
    const dialogRef = this.dialog.open(DialogTextComponent, {
      width: '650px',
      data: {title: title, text: text}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

}
