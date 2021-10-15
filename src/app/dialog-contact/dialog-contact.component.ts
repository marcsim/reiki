import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    let mail = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      telephone: this.form.value.telephone,
      sujet: this.form.value.sujet,
      message: this.form.value.message
    };
    this.sendMailContact(mail);
  }


  public sendMailContact(mail: any): void {
      // this.http.post('http://localhost:4200/sendmail', mail).subscribe(
      this.http.post('https://152.228.173.68:4000/', mail).subscribe(
      res => {
        this.openSnackBar('Message envoyé', 'success');
      },
      err => {
        this.openSnackBar('Erreur dans l\'envoi du message', 'error');
        console.log(err);
      }
    );
  }

  private initFormContact(): void {
    this.form = this.fb.group({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      sujet: new FormControl(''),
      message: new FormControl('')
    });
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
