import { Component } from '@angular/core';


@Component({
  selector: 'app-escayolas',
  templateUrl: './escayolas.component.html',
  styleUrls: ['./escayolas.component.css'],
  
})
export class EscayolasComponent {
  images = [
    {path: 'https://www.escayolistasvalencia.es/s/cc_images/cache_2486930321.jpg?t=1605987652'},
    {path: 'https://www.escayolasgaspar.com/wp-content/uploads/2018/03/6-deco-gaspar.jpg'},
    {path: 'https://www.ceymam72.es/wp-content/uploads/2020/07/venta-de-escayola-en-malaga-scaled.jpg'},
    {path: 'https://www.ceymam72.es/wp-content/uploads/2020/06/material-de-escayola-para-techos.jpg'}
]
}
