import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaChinesaComponent } from './comida-chinesa.component';

describe('ComidaChinesaComponent', () => {
  let component: ComidaChinesaComponent;
  let fixture: ComponentFixture<ComidaChinesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaChinesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaChinesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
