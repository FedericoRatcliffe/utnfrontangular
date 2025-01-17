import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeComponent } from './asset-type.component';

describe('AssetTypeComponent', () => {
  let component: AssetTypeComponent;
  let fixture: ComponentFixture<AssetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
