import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarsolicitudComponent } from './editarsolicitud.component';

describe('EditarsolicitudComponent', () => {
  let component: EditarsolicitudComponent;
  let fixture: ComponentFixture<EditarsolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarsolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
