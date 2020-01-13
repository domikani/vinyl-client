import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/photos')
      .subscribe(response => {
        console.log(response);
        this.photos = response;
      });
  }

}
