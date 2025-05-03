import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoitierdialogComponent } from './boitierdialog.component';

describe('BoitierdialogComponent', () => {
  let component: BoitierdialogComponent;
  let fixture: ComponentFixture<BoitierdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoitierdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoitierdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
