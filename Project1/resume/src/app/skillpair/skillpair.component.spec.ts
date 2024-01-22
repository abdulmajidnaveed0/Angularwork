import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillpairComponent } from './skillpair.component';

describe('SkillpairComponent', () => {
  let component: SkillpairComponent;
  let fixture: ComponentFixture<SkillpairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillpairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillpairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
