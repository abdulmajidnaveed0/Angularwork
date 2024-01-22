import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencelistComponent } from './experiencelist.component';

describe('ExperiencelistComponent', () => {
  let component: ExperiencelistComponent;
  let fixture: ComponentFixture<ExperiencelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
