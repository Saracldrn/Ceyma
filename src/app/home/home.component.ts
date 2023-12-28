import { Component,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productsData:any;
  urlProducts: string = '/assets/elements.json';

  marcasData:any;
  urlMarcas: string = '/assets/marcas.json';
  
  userData = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  sendEmail(form: any) {
    console.log('Datos del formulario:', this.userData);
    const dialogRef = this.dialog.open(ModalComponent);
    var url_gmail ="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=comercialceyma@gmail.com&tf=1";
    url_gmail = url_gmail + "&body="+
      "Hola soy "+this.userData.nombre+
      " con telefono "+this.userData.telefono+
      "%0D%0A"+this.userData.mensaje;
    url_gmail = url_gmail + "&su="+this.userData.nombre;
    window.open(url_gmail, "_blank");
  }

  scrollToSection() {
    const element = this.elRef.nativeElement.querySelector('#section2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  constructor(private http: HttpClient, public dialog: MatDialog,private elRef: ElementRef) {}

  ngOnInit() {
    this.http.get(this.urlProducts).subscribe(res => {
      this.productsData = res;
    });

    this.http.get(this.urlMarcas).subscribe(res => {
      this.marcasData = res;
    });
  }
  /*
  url_hotmail = ""
  url_gmail = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=comercialceyma@gmail.com&tf=1";
  public openGmail(email:string){
    var company = email.split("@")[1].split(".")[0]
    switch(company){
      case "gmail":    
        window.open(this.url_gmail, "_blank");
      case "hotmail" || "outlook":

      default:
        window.open("mailto:comercialceyma@gmail.com")
        
    }

  }*/


}

  @Component({
    selector: 'sendEmail',
    templateUrl: 'sendEmail.html',
  })
  export class ModalComponent {
  
  
  }