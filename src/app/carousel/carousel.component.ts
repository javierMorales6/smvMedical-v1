
// IMPORTACIONES
// Permite usar directivas comunes de Angular como ngIf, ngFor, etc.
import { CommonModule } from '@angular/common';

// Importa decoradores y ciclos de vida de Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// Permite usar enlaces de navegación en el HTML (routerLink)
import { RouterLink } from '@angular/router';



// DECORADOR DEL COMPONENTE
@Component({
  selector: 'app-carousel', // Nombre de la etiqueta HTML del componente
  imports: [CommonModule, RouterLink], // Módulos que usará este componente
  templateUrl: './carousel.component.html', // Archivo HTML del componente
  styleUrls: ['./carousel.component.css'], // Archivo CSS del componente
})



// CLASE DEL COMPONENTE
export class CarouselComponent implements OnInit, OnDestroy {

  
  // ARREGLO DE ELEMENTOS DEL CARRUSEL
  // Contiene la información de cada slide del carrusel
  items = [
    {
      title: 'Equipos de gabinete',
      image: '/images/slide1.png',
      text: {
        heading: 'Solución completa con tecnología de ZST +',
        subheading: 'Nuewa I9',
        paragraph:
          'Equipos de alta calidad para los mejores resultados.',
      },
    },
    {
      title: 'Equipos Completos',
      image: '/images/slide2.png',
      text: {
        heading: 'Imagenes de alta precisión al alcance de tu mano.',
        subheading: 'Tee air',
        paragraph: 'Innovación sin ataduras.',
      },
    },
    {
      title: 'Equipos Portátiles',
      image: '/images/slide3.png',
      text: {
        heading: 'iConsole -- Panel de control inteligente',
        subheading: 'Resona I9',
        paragraph: 'Diseño innovador y adaptable para diferentes situaciones clínicas.',
      },
    },
    {
      title: 'Equipos en General',
      image: '/images/slide4.png',
      text: {
        heading: 'Smart Scene 3D whit innovation',
        subheading: 'Consona N9',
        paragraph: 'Solución obstétrica inteligente impulsada por ZST+',
      },
    },
  ];


 
  // VARIABLES DE CONTROL
  // Índice actual del carrusel
  indexAct: number = 0;

  // Guarda el ID del intervalo automático
  interID: any;

  // Indica si el carrusel está en transición (animación)
  enTransicion: boolean = false;


  
  // CICLO DE VIDA - INICIO
  // Se ejecuta cuando el componente se crea
  ngOnInit() {
    this.startAutoSlide(); // Inicia el cambio automático
  }



  // CICLO DE VIDA - DESTRUCCIÓN
  // Se ejecuta cuando el componente se destruye
  ngOnDestroy() {
    this.stopAutoSlide(); // Detiene el intervalo para evitar errores
  }


 
  // INICIAR CAMBIO AUTOMÁTICO
  startAutoSlide() {

    // Ejecuta next() cada 5 segundos
    this.interID = setInterval(() => {
      this.next();
    }, 5000);

  }



  // DETENER CAMBIO AUTOMÁTICO
  stopAutoSlide() {

    // Si existe un intervalo lo limpia
    if (this.interID) {
      clearInterval(this.interID);
    }

  }



  // SIGUIENTE SLIDE
  next() {

    // Activa animación
    this.enTransicion = true;

    // Espera 500ms antes de cambiar
    setTimeout(() => {

      // Cambia al siguiente elemento
      // % sirve para volver al inicio cuando llega al final
      this.indexAct = (this.indexAct + 1) % this.items.length;

      // Termina animación
      this.enTransicion = false;

    }, 500);

  }



  // CUANDO CARGA LA IMAGEN
  onImageLoad() {

    // Evita que se quede en transición
    this.enTransicion = false;

  }

}