import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeTallerComponent } from './informe-taller.component';

describe('InformeTallerComponent', () => {
  let component: InformeTallerComponent;
  let fixture: ComponentFixture<InformeTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
