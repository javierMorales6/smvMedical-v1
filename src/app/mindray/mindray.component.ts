import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mindray',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mindray.component.html',
  styleUrls: ['./mindray.component.css'],
})
export class MindrayComponent implements AfterViewInit {

  specAbierta: number | null = null;

  constructor(private ruta: ActivatedRoute) {}

  toggleSpecs(index: number) {
    if (this.specAbierta === index) {
      this.specAbierta = null;
    } else {
      this.specAbierta = index;
    }
  }

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