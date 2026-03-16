// IMPORTACIONES PARA TESTING
// Permite crear entornos de prueba en Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa el componente que se va a probar
import { ContactUsComponent } from './contact-us.component';

// DESCRIPCIÓN DEL BLOQUE DE PRUEBA
// describe define el grupo de pruebas para el componente
describe('ContactUsComponent', () => {
  // Variable para acceder al componente
  let component: ContactUsComponent;
  // Permite manipular el componente en el entorno de prueba
  let fixture: ComponentFixture<ContactUsComponent>;

  // CONFIGURACIÓN ANTES DE CADA PRUEBA
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // PRUEBA BÁSICA
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
