import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityProviderComponent } from './electricity-provider.component';

describe('ElectricityProviderComponent', () => {
  let component: ElectricityProviderComponent;
  let fixture: ComponentFixture<ElectricityProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
