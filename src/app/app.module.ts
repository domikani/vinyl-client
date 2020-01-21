import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';

import {AppComponent} from './app.component';

import {PhotosComponent} from './components/photos/photos.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';

import {NewentriesComponent} from './components/newentries/newentries.component';
import {CartComponent} from './components/cart/cart.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products/:productId',
    component: ProductComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'newEntries',
    component: NewentriesComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,

    NewentriesComponent,

    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    FilterPipeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    NgxWebstorageModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
