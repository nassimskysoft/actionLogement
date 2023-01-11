import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonPreviewComponent } from './bouton-preview.component';

describe('BoutonPreviewComponent', () => {
  let component: BoutonPreviewComponent;
  let fixture: ComponentFixture<BoutonPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
