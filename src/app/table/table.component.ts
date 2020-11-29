import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import {catchError } from 'rxjs/operators';

import { PokemanService } from '~app/pokeman.service';
import { AGDataSource } from '~utils/interfaces';

interface ColDef {
  resizable?: boolean;
  minWidth: number;
  width?: number;
  sortable?: boolean;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columnDefs = [{ field: 'name', headerName: 'Pokemon Name'}];

  gridApi: any; // AG-Grid API
  rowModelType = 'infinite';
  maxBlocksInCache = 100; // how many blocks to cache in memory
  cacheBlockSize = 50; // how many row to ask for each block

  defaultColDef: ColDef = {
    resizable: false,
    minWidth: 400,
    width: 400,
    sortable: false
  };

  dataSource: AGDataSource = {
    getRows: params => {
      console.log('asking for ' + params.startRow + ' to ' + params.endRow);
      this.pokemanService
        .getPokeman(params.startRow, this.cacheBlockSize)
        .pipe(
          catchError(error => {
            console.warn('Error calling API!', error);
            return of({
              results: [{name: 'Network Error!'}],
              count: 1,
            });
          })
        )
        .subscribe(({results, count}) => params.successCallback(results, count));
    }
  };

  constructor(private pokemanService: PokemanService) {
  }

  ngOnInit() {
  }

  /** When AG-Grid says its ready do this */
  onGridReady(params): void {
    this.gridApi = params.api;
    params.api.setDatasource(this.dataSource as AGDataSource);
  }
}
