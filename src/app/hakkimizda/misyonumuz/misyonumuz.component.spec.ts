import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisyonumuzComponent } from './misyonumuz.component';

describe('MisyonumuzComponent', () => {
  let component: MisyonumuzComponent;
  let fixture: ComponentFixture<MisyonumuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisyonumuzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisyonumuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
