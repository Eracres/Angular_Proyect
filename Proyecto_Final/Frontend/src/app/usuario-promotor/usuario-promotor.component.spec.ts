import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPromotorComponent } from './usuario-promotor.component';

describe('UsuarioPromotorComponent', () => {
  let component: UsuarioPromotorComponent;
  let fixture: ComponentFixture<UsuarioPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioPromotorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
