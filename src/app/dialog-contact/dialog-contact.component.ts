import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initFormContact();
  }

  public sendEmail(url, data): Observable<any> {
    return this.http.post(url, data);
  }

  public onSubmit() {
    console.log(this.form.value);
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
    this.sendEmail("http://localhost:8080/sendmail", mail).subscribe(
      data => {
        let res: any = data;
        console.log('email envoyé');
      },
      err => {
        console.log(err);
      }, () => {
        console.log('test');
      }
    );
  }

  public initFormContact(): void {
    this.form = this.fb.group({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      sujet: new FormControl(''),
      message: new FormControl('')
    });
  }

}
