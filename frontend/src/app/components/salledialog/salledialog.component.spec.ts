import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalledialogComponent } from './salledialog.component';

describe('SalledialogComponent', () => {
  let component: SalledialogComponent;
  let fixture: ComponentFixture<SalledialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalledialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
