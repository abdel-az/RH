import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaionageComponent } from './raionage.component';

describe('RaionageComponent', () => {
  let component: RaionageComponent;
  let fixture: ComponentFixture<RaionageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaionageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaionageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
