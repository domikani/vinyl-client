import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public search: string;
  @LocalStorage('cart')


  public cart;

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
  }
}


