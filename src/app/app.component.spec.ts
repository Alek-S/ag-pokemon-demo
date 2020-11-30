import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { HeaderComponent } from '~app/header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        RouterModule,
        MatIconModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
