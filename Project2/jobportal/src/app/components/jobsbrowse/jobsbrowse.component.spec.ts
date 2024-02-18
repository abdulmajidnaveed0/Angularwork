import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsbrowseComponent } from './jobsbrowse.component';

describe('JobsbrowseComponent', () => {
  let component: JobsbrowseComponent;
  let fixture: ComponentFixture<JobsbrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsbrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsbrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
