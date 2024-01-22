import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometopComponent } from './welcometop.component';

describe('WelcometopComponent', () => {
  let component: WelcometopComponent;
  let fixture: ComponentFixture<WelcometopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcometopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcometopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
