import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=comercialceyma@gmail.com&tf=1";
  public openGmail(){
    window.open(this.url, "_blank");
  }
}
