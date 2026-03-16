import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-veterinario',
  imports: [RouterLink, CommonModule],
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css'],
})
export class VeterinarioComponent implements AfterViewInit {

  constructor(private ruta: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.ruta.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    });
  }

}