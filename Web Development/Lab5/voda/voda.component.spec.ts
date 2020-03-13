import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VodaComponent } from './voda.component';

describe('VodaComponent', () => {
  let component: VodaComponent;
  let fixture: ComponentFixture<VodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
