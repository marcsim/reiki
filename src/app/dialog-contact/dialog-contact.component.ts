import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {

  public form: FormGroup;
  public durationInSeconds = 5;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.initFormContact();
  }

  public save(): void {
    this.onSubmit();
  }

  public onSubmit() {
    if (
      (this.form.value.nom !== undefined && this.form.value.nom.trim() !== '') &&
      (this.form.value.prenom !== undefined && this.form.value.prenom.trim() !== '') &&
      (this.form.value.email !== undefined && this.form.value.email.trim() !== '') && 
      (this.form.value.telephone !== undefined && this.form.value.telephone.trim() !== '') &&
      (this.form.value.sujet !== undefined && this.form.value.sujet.trim() !== '') && 
      (this.form.value.message !== undefined && this.form.value.message.trim() !== '') && 
      this.form.valid) 
    {
      let mail = {
        nom: this.form.value.nom,
        prenom: this.form.value.prenom,
        email: this.form.value.email,
        telephone: this.form.value.telephone,
        sujet: this.form.value.sujet,
        message: this.form.value.message
      };
      this.sendMailContact(mail);
    } else {
      this.openSnackBar('Erreur dans le formulaire', 'OK');
    }
  }

  public sendMailContact(mail: any): void {
      // this.http.post('http://localhost:4200/sendmail', mail).subscribe(
      this.http.post('https://www.reiki49.fr/', mail).subscribe(
      res => {
        this.openSnackBar('Message envoyé', 'OK');
      },
      err => {
        this.openSnackBar('Erreur dans l\'envoi du message', 'OK');
        console.log(err);
      }
    );
  }

  private initFormContact(): void {
    this.form = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required]),
      sujet: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
