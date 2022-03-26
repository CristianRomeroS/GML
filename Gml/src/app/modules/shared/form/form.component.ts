import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { contact } from '../interfaces/contact.interfaces';
import { PoliticadeprivacidadComponent } from '../politicadeprivacidad/politicadeprivacidad.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  private phonePattern: RegExp = new RegExp('^(?:6[0-9]{2}|7[1-9][0-9]|9[0-9]{2})(?: ?[0-9]{3}){2}\r?$');
  public formContact: FormGroup = this.fb.group({
    name: ['consulta', [Validators.required]],
    email: ['consulta@consulta', [Validators.required, Validators.pattern(this.emailPattern)]],
    phone: [, [Validators.required, Validators.pattern(this.phonePattern)]],
    mensaje: [, Validators.required],
    aceptar: [false, [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    public dialog: MatDialog, public http: HttpClient) { }
  private body: string = "<!DOCTYPE html><meta charset=UTF-8><meta name=viewport content=\"width=device-width,initial-scale=1\"><meta name=x-apple-disable-message-reformatting><title></title><style>div,h1,p,table,td{font-family:Arial,sans-serif}</style><body style=margin:0;padding:0><table role=presentation style=width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#fff><tr><td style=padding:0 align=center><table role=presentation style=\"width:602px;border-collapse:collapse;border:1px solid #ccc;border-spacing:0;text-align:left\"><tr><td style=\"padding:40px 0 30px 0;background:#70bbd9\"align=center><tr><td style=\"padding:36px 30px 42px 30px\"><table role=presentation style=width:100%;border-collapse:collapse;border:0;border-spacing:0><tr><td style=\"padding:0 0 36px 0;color:#153643\"><h1 style=\"font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;text-align:center\">Instalaciones Siacara</h1><p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif\">Consulta de<h4 style=\"margin:0 0 20px 0;font-family:Arial,sans-serif\">Datos de contacto</h4><p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif\">Correo:<p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif\">Teléfono:<h4 style=\"margin:0 0 20px 0;font-family:Arial,sans-serif\">Consulta</h4><p style=\"margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;border:1px solid;padding:5px 5px 5px 5px\">CUERPO</table><tr><td style=padding:30px;background:#ee4c50><table role=presentation style=width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif><tr><p style=margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#fff>® Instalaciones Siacara, Madrid 2022<br></table></table></table>";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'pMYuTdFoUnd9UikIEeOueMz8ctf0ydcbnpzXkgfP',
      'X-Parse-REST-API-Key': 'lIbBt2H1qPtLwjcAq1WkXBO363Fqh92iUxbuOHcG'
    })
  };

  ngOnInit(): void {

  }


  public enviar() {
    const consulta: contact = {
      nombre: this.formContact.get('name')?.value,
      correo: this.formContact.get('email')?.value,
      telefono: this.formContact.get('phone')?.value,
      mensaje: this.formContact.get('mensaje')?.value
    }

    let cuerpo = this.body.replace("Consulta de", "Consulta de " + consulta.nombre);
    cuerpo = cuerpo.replace("Correo:", "Correo: " + consulta.correo);
    cuerpo = cuerpo.replace("Teléfono:", "Teléfono: " + consulta.telefono);
    cuerpo = cuerpo.replace("CUERPO", consulta.mensaje);

    consulta.text = cuerpo;
    this.http.post("https://parseapi.back4app.com/functions/sendEmail", consulta, this.httpOptions).subscribe(data => {
      console.log(data);
    });

  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(PoliticadeprivacidadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
