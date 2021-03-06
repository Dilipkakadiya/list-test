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
    this._http.get<Product[]>('https://pedantic-galileo-1263ff.netlify.app/assets/db.json')
      .subscribe(
        (response) => {
          console.log(response['products']);
          this.items = response['products'];
        },
        (error) => {
          console.log('Something went wrong.');
        }
      );
  }

}