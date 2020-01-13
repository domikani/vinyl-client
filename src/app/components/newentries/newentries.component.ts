import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newentries',
  templateUrl: './newentries.component.html',
  styleUrls: ['./newentries.component.css']
})
export class NewentriesComponent implements OnInit {
  public lastinsert: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/products')
      .subscribe(response => {
        this.lastinsert = response;
        const lastFor = this.lastinsert.length - 4;
        this.lastinsert = this.lastinsert.slice(+lastFor);
      });
  }

}
