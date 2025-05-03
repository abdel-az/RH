import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaionagedialogComponent } from './raionagedialog.component';

describe('RaionagedialogComponent', () => {
  let component: RaionagedialogComponent;
  let fixture: ComponentFixture<RaionagedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaionagedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaionagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
