import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscayolasComponent } from './escayolas.component';

describe('EscayolasComponent', () => {
  let component: EscayolasComponent;
  let fixture: ComponentFixture<EscayolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscayolasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscayolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
