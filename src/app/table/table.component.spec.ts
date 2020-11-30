import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridModule } from 'ag-grid-angular';
import { values as _values } from 'lodash';
import { DrawerComponent } from '~app/drawer/drawer.component';

import { TableComponent } from './table.component';

const columnDefs = [
  { field: 'name', headerName: 'Pokemon Character  -  Click for details'}
];

const rowData = [
  {name: 'mock1'},
  {name: 'mock2'},
  {name: 'mock3'},
  {name: 'mock4'},
  {name: 'mock5'},
];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        DrawerComponent
      ],
      imports: [
        MatIconModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AgGridModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have expected column headers', () => {
    component.columnDefs = columnDefs;
    fixture.detectChanges();

    const elm = fixture.nativeElement;
    const grid = elm.querySelector('ag-grid-angular');
    const headerCells = grid.querySelectorAll('.ag-header-cell-text');
    const headerTitles = Array.from(headerCells).map((cell: any) => cell.textContent.trim());
    const expectedHeaders = columnDefs.map(col => col.headerName).slice(0, headerTitles.length);

    expect(headerTitles).toEqual(expectedHeaders);
  });

  it('first row should have expected data', () => {
    component.columnDefs = columnDefs;
    fixture.detectChanges();

    const elm = fixture.nativeElement;
    const grid = elm.querySelector('ag-grid-angular');
    const firstRowCells = grid.querySelectorAll('div[row-id="0"] div.ag-cell-value');
    const values = Array.from(firstRowCells).map((cell: any) => cell.textContent.trim());
    const expectedValues = _values(rowData[0])
      .map(value => value.toString())
      .slice(0, values.length);

    expect(values).toEqual(expectedValues);
  });
});
