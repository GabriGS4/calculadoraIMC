import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlturaPesoComponent } from './altura-peso.component';

describe('AlturaPesoComponent', () => {
  let component: AlturaPesoComponent;
  let fixture: ComponentFixture<AlturaPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlturaPesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlturaPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
