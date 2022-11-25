import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContactComponent } from './home/contact/contact.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { HistoryComponent } from './home/history/history.component';
import { SpecialtiesComponent } from './home/specialties/specialties.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'especialidades', component: SpecialtiesComponent, pathMatch: 'full' },
  { path: 'historia', component: HistoryComponent, pathMatch: 'full' },
  { path: 'contacto', component: ContactComponent, pathMatch: 'full' },
  { path: 'galeria', component: GalleryComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
