import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariadoFormComponent } from './voluntariado-form.component';

describe('VoluntariadoFormComponent', () => {
  let component: VoluntariadoFormComponent;
  let fixture: ComponentFixture<VoluntariadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntariadoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntariadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
