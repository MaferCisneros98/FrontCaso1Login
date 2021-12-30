import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioinformeconcesionariaComponent } from './inicioinformeconcesionaria.component';

describe('InicioinformeconcesionariaComponent', () => {
  let component: InicioinformeconcesionariaComponent;
  let fixture: ComponentFixture<InicioinformeconcesionariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioinformeconcesionariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioinformeconcesionariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
