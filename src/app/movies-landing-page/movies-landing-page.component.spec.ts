import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLandingPageComponent } from './movies-landing-page.component';

describe('MoviesLandingPageComponent', () => {
  let component: MoviesLandingPageComponent;
  let fixture: ComponentFixture<MoviesLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
