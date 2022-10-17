import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularudyComponent } from './angularudy.component';

describe('AngularudyComponent', () => {
  let component: AngularudyComponent;
  let fixture: ComponentFixture<AngularudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
