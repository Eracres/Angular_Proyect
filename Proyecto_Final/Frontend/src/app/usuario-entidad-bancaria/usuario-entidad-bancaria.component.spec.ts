import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEntidadBancariaComponent } from './usuario-entidad-bancaria.component';

describe('UsuarioEntidadBancariaComponent', () => {
  let component: UsuarioEntidadBancariaComponent;
  let fixture: ComponentFixture<UsuarioEntidadBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioEntidadBancariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioEntidadBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
