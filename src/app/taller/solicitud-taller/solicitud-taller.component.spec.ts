import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudTallerComponent } from './solicitud-taller.component';

describe('SolicitudTallerComponent', () => {
  let component: SolicitudTallerComponent;
  let fixture: ComponentFixture<SolicitudTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
