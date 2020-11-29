import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {catchError } from 'rxjs/operators';

import { PokemanService } from '~services/pokeman.service';
import { DrawerDataService } from '~services/drawer-data.service';
import { AGDataSource, CellClickEvent } from '~utils/interfaces';

interface ColDef {
  resizable?: boolean;
  minWidth: number;
  width?: number;
  sortable?: boolean;
}

/**
 * Table listing pokemon characters.
 * Uses infinite scroll for pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columnDefs = [{ field: 'name', headerName: 'Pokemon Character  -  Click for details'}];

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

  constructor(private pokemanService: PokemanService, private drawerDataService: DrawerDataService) {
  }

  ngOnInit() {
  }

  /** When AG-Grid says its ready do this */
  onGridReady(params): void {
    this.gridApi = params.api;
    params.api.setDatasource(this.dataSource as AGDataSource);
  }

  /** When user clicks on an individual cell, emit it back up */
  handleCellClick(event: CellClickEvent): void {
    this.drawerDataService.getDataForCell(event);
  }
}
