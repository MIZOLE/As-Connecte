import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWifiDetailsComponent } from './read-wifi-details.component';

describe('ReadWifiDetailsComponent', () => {
  let component: ReadWifiDetailsComponent;
  let fixture: ComponentFixture<ReadWifiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadWifiDetailsComponent]
    });
    fixture = TestBed.createComponent(ReadWifiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
