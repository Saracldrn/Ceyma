import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellamamosComponent } from './tellamamos.component';

describe('TellamamosComponent', () => {
  let component: TellamamosComponent;
  let fixture: ComponentFixture<TellamamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellamamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TellamamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
