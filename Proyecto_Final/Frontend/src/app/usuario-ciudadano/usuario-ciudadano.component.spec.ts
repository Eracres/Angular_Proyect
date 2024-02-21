import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCiudadanoComponent } from './usuario-ciudadano.component';

describe('UsuarioCiudadanoComponent', () => {
  let component: UsuarioCiudadanoComponent;
  let fixture: ComponentFixture<UsuarioCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCiudadanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
