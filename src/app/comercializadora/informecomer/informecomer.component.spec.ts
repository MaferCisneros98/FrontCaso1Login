import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InformecomerComponent } from './informecomer.component';

describe('InformecomerComponent', () => {
  let component: InformecomerComponent;
  let fixture: ComponentFixture<InformecomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformecomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformecomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

