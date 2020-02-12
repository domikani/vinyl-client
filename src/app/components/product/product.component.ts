import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LocalStorage} from 'ngx-webstorage';
import {IProduct} from '../../interfaces/IProducts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @LocalStorage('cart')
  public cart;

  public product: IProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get<IProduct[]>('http://localhost:3000/products/' + params.productId)
        .subscribe(response => {
          this.product = response;
        });
    });

  }

  public addToCart(id: string) {
    if (!this.cart.includes(id)) {
      this.cart.push(id);
      this.cart = this.cart;


    }


  }


}
