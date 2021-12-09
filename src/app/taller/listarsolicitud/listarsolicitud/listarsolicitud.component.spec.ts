import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsolicitudComponent } from './listarsolicitud.component';

describe('ListarsolicitudComponent', () => {
  let component: ListarsolicitudComponent;
  let fixture: ComponentFixture<ListarsolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarsolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
