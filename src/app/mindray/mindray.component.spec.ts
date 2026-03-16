import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindrayComponent } from './mindray.component';

describe('MindrayComponent', () => {
  let component: MindrayComponent;
  let fixture: ComponentFixture<MindrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
