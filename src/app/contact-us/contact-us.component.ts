import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})

export class ContactUsComponent {

  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    this.ruta.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // ENVIO DE CORREO CON EMAILJS

  sendEmail(event: Event) {

    event.preventDefault();

    emailjs.sendForm(
      'service_idb2nfn', // SERVICE ID
      'template_a1zes8q', // TEMPLATE ID
      document.getElementById('contactForm') as HTMLFormElement,
      'Q_-REV2zY9fS4GRbz' // PUBLIC KEY
    ).then(() => {

      alert('Mensaje enviado correctamente');

      (document.getElementById('contactForm') as HTMLFormElement).reset();

    }, (error) => {

      console.error(error);
      alert('Error al enviar el mensaje');

    });

  }

}