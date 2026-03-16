import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerasonComponent } from './terason.component';

describe('TerasonComponent', () => {
  let component: TerasonComponent;
  let fixture: ComponentFixture<TerasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerasonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
