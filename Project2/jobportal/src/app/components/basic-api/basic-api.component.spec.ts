import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicApiComponent } from './basic-api.component';

describe('BasicApiComponent', () => {
  let component: BasicApiComponent;
  let fixture: ComponentFixture<BasicApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
