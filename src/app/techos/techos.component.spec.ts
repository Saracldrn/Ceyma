import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechosComponent } from './techos.component';

describe('TechosComponent', () => {
  let component: TechosComponent;
  let fixture: ComponentFixture<TechosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
