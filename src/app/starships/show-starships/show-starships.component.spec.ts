import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStarshipsComponent } from './show-starships.component';

describe('ShowStarshipsComponent', () => {
  let component: ShowStarshipsComponent;
  let fixture: ComponentFixture<ShowStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStarshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
