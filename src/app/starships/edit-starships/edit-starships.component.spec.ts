import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStarshipsComponent } from './edit-starships.component';

describe('EditStarshipsComponent', () => {
  let component: EditStarshipsComponent;
  let fixture: ComponentFixture<EditStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStarshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
