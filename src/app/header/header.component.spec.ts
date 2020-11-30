import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatIconModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Pokedex'
    );
  });

  it('should render caught count', () => {
    const elm = fixture.debugElement.nativeElement.querySelector('.caught-count');
    expect(elm).toBeTruthy();
    expect(elm.innerText).toContain('Caught: 0');
  });

  it('should render wishlist count', () => {
    const elm = fixture.debugElement.nativeElement.querySelector('.wish-count');
    expect(elm).toBeTruthy();
    expect(elm.innerText).toContain('Wishlist: 0');
  });

  it('should set caught count number', () => {
    component.caughtCount = 5;
    fixture.detectChanges();
    const elm = fixture.debugElement.nativeElement.querySelector('.caught-count');
    expect(elm).toBeTruthy();
    expect(elm.innerText).toContain('Caught: 5');
  });

  it('should set wishlist count number', () => {
    component.wishCount = 5;
    fixture.detectChanges();
    const elm = fixture.debugElement.nativeElement.querySelector('.wish-count');
    expect(elm).toBeTruthy();
    expect(elm.innerText).toContain('Wishlist: 5');
  });
});
