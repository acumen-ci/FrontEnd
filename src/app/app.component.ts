import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'acucafe';
  showSummary = false;
  hasMilk = false;
  selectedQuantity: number;
  selectedDrink: any;
  selectedCurrency = 'EUR';
  order: any;

  drinks: any[];

  currencies = [ 'EUR', 'GBP', 'USD' ];

  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  private _http: HttpClient;

  constructor(
    private http: HttpClient
  ) {
    this._http = http;
  }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks () {
    this._http.get<any[]>('/drinks')
      .subscribe({
        next: ( val ) => {
          this.drinks = val;
        }
      });
  }

  processOrder(): void {
    const total = [];

    for (let i = 0; i < this.selectedQuantity; i++ ) {
      total.push(this.selectedDrink.price);
    }

    if (this.hasMilk && this.selectedDrink.name !== 'Tea')
    {
      total.push(0.25);
    }

    this.order = {
      drink: this.selectedDrink,
      quantity: this.selectedQuantity,
      hasMilk: this.hasMilk,
      total,
    };

    this.showSummary = true;
  }
}

