import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columnDefs = [
      { field: 'make', width: 400},
      { field: 'model', width: 400},
      { field: 'price', width: 400}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  defaultColDef = {
    resizable: true,
  }

  constructor() { }

  ngOnInit() {
  }

}
