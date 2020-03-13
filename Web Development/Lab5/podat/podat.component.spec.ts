import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodatComponent } from './podat.component';

describe('PodatComponent', () => {
  let component: PodatComponent;
  let fixture: ComponentFixture<PodatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
