import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  originTypeCoffees: number = 0;
  blendTypeCoffees: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getAllCoffees();
  }

  getAllCoffees(): void {
    this.coffeeService.getCoffees().subscribe(coffees => {
      this.coffees = coffees;
      this.totalizeCoffessType();
    });
  }

  totalizeCoffessType(): void {
    this.coffees.forEach(coffee => {
      if (coffee.tipo === 'Café de Origen') {
        this.originTypeCoffees += 1;
      } else if (coffee.tipo === 'Blend') {
        this.blendTypeCoffees += 1;
      }      
    });
  }

}
