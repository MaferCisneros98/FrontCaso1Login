import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinformeComponent } from './editarinforme.component';

describe('EditarinformeComponent', () => {
  let component: EditarinformeComponent;
  let fixture: ComponentFixture<EditarinformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarinformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
