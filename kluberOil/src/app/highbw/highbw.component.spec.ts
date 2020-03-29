import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighbwComponent } from './highbw.component';

describe('HighbwComponent', () => {
  let component: HighbwComponent;
  let fixture: ComponentFixture<HighbwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighbwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighbwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
