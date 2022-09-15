import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePlaceComponent } from './autocomplete-place.component';

describe('AutocompletePlaceComponent', () => {
  let component: AutocompletePlaceComponent;
  let fixture: ComponentFixture<AutocompletePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletePlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompletePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
