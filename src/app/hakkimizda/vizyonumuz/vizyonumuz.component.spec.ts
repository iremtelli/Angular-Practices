import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizyonumuzComponent } from './vizyonumuz.component';

describe('VizyonumuzComponent', () => {
  let component: VizyonumuzComponent;
  let fixture: ComponentFixture<VizyonumuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VizyonumuzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VizyonumuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
