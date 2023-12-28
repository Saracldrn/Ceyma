import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  userData = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };
  sendEmail(form: any) {
    console.log('Datos del formulario:', this.userData);
    const dialogRef = this.dialog.open(ModalComponent);
    var url_gmail="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=comercialceyma@gmail.com&tf=1";
    url_gmail = url_gmail + "&body="+
      "Hola soy "+this.userData.nombre+
      " con telefono "+this.userData.telefono+
      "%0D%0A"+this.userData.mensaje;
    url_gmail = url_gmail + "&su="+this.userData.nombre;
    window.open(url_gmail, "_blank");
  }
  constructor(public dialog: MatDialog){}
}
export class ModalComponent {}
