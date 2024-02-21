import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaInformacionComponent } from './carga-informacion.component';

describe('CargaInformacionComponent', () => {
  let component: CargaInformacionComponent;
  let fixture: ComponentFixture<CargaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
