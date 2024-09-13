import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    {
      pid: 201,
      pname: "Chips",
      qty: 100,
      price: 10,
      expiryDate: "10-10-2024"
    },
    {
      pid: 202,
      pname: "Coke",
      qty: 200,
      price: 20,
      expiryDate: "10-10-2025"
    },
    {
      pid: 203,
      pname: "Maggi",
      qty: 300,
      price: 50,
      expiryDate: "1-11-2024"
    },
    {
      pid: 204,
      pname: "Dairy Milk",
      qty: 200,
      price: 100,
      expiryDate: "12-12-2025"
    },
    {
      pid: 205,
      pname: "Milk",
      qty: 1000,
      price: 20,
      expiryDate: "10-9-2024"
    }

  ]
}
