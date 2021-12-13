import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarinformeComponent } from './listarinforme.component';

describe('ListarinformeComponent', () => {
  let component: ListarinformeComponent;
  let fixture: ComponentFixture<ListarinformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarinformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarinformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
