import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid-list';
  mode: "card" | "list" = "card";
  items: Product[];

  changeMode() {
    this.mode = this.mode === "card" ? "list" : "card";
  }

  constructor(private _http: HttpClient) {
    this._http.get<Product[]>('http://localhost:4200/api/products')
      .subscribe(
        (response) => {
          console.log(response);
          this.items = response;
        },
        (error) => {
          console.log('Something went wrong.');
        }
      );
  }

}