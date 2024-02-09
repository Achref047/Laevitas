import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafetchComponent } from './datafetch.component';

describe('DatafetchComponent', () => {
  let component: DatafetchComponent;
  let fixture: ComponentFixture<DatafetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatafetchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatafetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
