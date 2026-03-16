import { Routes } from '@angular/router';
import { AdministrativeMenuComponent } from './administrative-menu/administrative-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporativeAccessComponent } from './corporative-access/corporative-access.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { TermsComponent } from './terms/terms.component';
import { WhoAreComponent } from './who-are/who-are.component';
import { MindrayComponent } from './mindray/mindray.component';
import { TerasonComponent } from './terason/terason.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: WhoAreComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'terms-conditions', component: TermsComponent },
  { path: 'corporative-access', component: CorporativeAccessComponent },
  { path: 'corpo-menu', component: AdministrativeMenuComponent }, //PARA MENU DE ADMINISTRADOR
  { path: 'mindray', component: MindrayComponent },
  { path: 'terason', component: TerasonComponent },
  { path: 'veterinario', component: VeterinarioComponent },
  { path: '**', component: NotFoundComponent }, //siempre debe de ir al final, para que no tome esta ruta como predeterminada y se muestre el componente NotFoundComponent en caso de que el usuario ingrese una ruta no definida
];
