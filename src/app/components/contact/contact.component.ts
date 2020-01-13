import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/contact')
      .subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      });
  }
  public mapZoom: number = 10;
  public center = {
    lat: 40.635711,
    lng: 22.9420186

  };

}
