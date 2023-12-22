import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadraDetailPageComponent } from './squadra-detail-page.component';

describe('SquadraDetailPageComponent', () => {
  let component: SquadraDetailPageComponent;
  let fixture: ComponentFixture<SquadraDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquadraDetailPageComponent]
    });
    fixture = TestBed.createComponent(SquadraDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
