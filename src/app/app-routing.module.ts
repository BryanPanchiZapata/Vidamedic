import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceVaccinesComponent } from './home/card-especilties/service-vaccines/service-vaccines.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContactComponent } from './home/contact/contact.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { HistoryComponent } from './home/history/history.component';
import { LaboratorioComponent } from './home/laboratorio/laboratorio.component';
import { PromosComponent } from './home/promos/promos.component';
import { SpecialtiesComponent } from './home/specialties/specialties.component';
import { SueroterapiaComponent } from './home/sueroterapia/sueroterapia.component';
import { TopBarMenuComponent } from './home/top-bar-menu/top-bar-menu.component';



const routes: Routes = [
  { path: '', component: CarouselComponent },
  {
    path: 'especialidades',
    component: SpecialtiesComponent,
    pathMatch: 'full',
  },
  { path: 'historia', component: HistoryComponent, pathMatch: 'full' },
  { path: 'contacto', component: ContactComponent, pathMatch: 'full' },
  { path: 'galeria', component: GalleryComponent, pathMatch: 'full' },
  { path: 'vacunas', component: ServiceVaccinesComponent, pathMatch: 'full' },
  { path: 'laboratorio-clinico', component: LaboratorioComponent },
  { path: 'sueroterapia', component: SueroterapiaComponent, pathMatch: 'full' },
  { path: 'Promociones-del-mes', component: PromosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
