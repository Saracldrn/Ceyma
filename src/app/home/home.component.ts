import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.urlProducts).subscribe(res => {
      this.productsData = res;
    });

    this.http.get(this.urlMarcas).subscribe(res => {
      this.marcasData = res;
    });
  }
}
