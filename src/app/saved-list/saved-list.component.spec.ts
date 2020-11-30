import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedListComponent } from './saved-list.component';
import { AppModule } from "~app/app.module";
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '~app/app-routing.module';
import { MatIconModule } from '@angular/material';
import { AppComponent } from '~app/app.component';
import { HeaderComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { TableComponent } from '~app/table/table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SavedListComponent', () => {
  let component: SavedListComponent;
  let fixture: ComponentFixture<SavedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SavedListComponent
      ],
      imports: [
        MatIconModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
