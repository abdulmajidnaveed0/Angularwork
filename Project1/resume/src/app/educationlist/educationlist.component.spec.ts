import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationlistComponent } from './educationlist.component';

describe('EducationlistComponent', () => {
  let component: EducationlistComponent;
  let fixture: ComponentFixture<EducationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
