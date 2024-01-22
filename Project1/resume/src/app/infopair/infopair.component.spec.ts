import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopairComponent } from './infopair.component';

describe('InfopairComponent', () => {
  let component: InfopairComponent;
  let fixture: ComponentFixture<InfopairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfopairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
