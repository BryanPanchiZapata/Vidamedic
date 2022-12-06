import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { Carousel1Component } from './home/carousel/carousel1/carousel1.component';
import { Carousel2Component } from './home/carousel/carousel2/carousel2.component';
import { Carousel3Component } from './home/carousel/carousel3/carousel3.component';
import { MediServiceComponent } from './home/medi-service/medi-service.component';
import { MediteamComponent } from './home/mediteam/mediteam.component';
import { FooterComponent } from './home/footer/footer.component';
import { SpecialtiesComponent } from './home/specialties/specialties.component';
import { TopBarMenuComponent } from './home/top-bar-menu/top-bar-menu.component';
import { CardEspeciltiesComponent } from './home/card-especilties/card-especilties.component';
import { HistoryComponent } from './home/history/history.component';
import { ContactComponent } from './home/contact/contact.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ServiceImageComponent } from './home/card-especilties/service-image/service-image.component';
import { ServiceMedicineComponent } from './home/card-especilties/service-medicine/service-medicine.component';
import { ServiceVaccinesComponent } from './home/card-especilties/service-vaccines/service-vaccines.component';
import { LaboratorioComponent } from './home/laboratorio/laboratorio.component';
import { EmergyComponent } from './home/emergy/emergy.component';
import { SueroterapiaComponent } from './home/sueroterapia/sueroterapia.component';
import { PromosComponent } from './home/promos/promos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CarouselComponent,
    Carousel1Component,
    Carousel2Component,
    Carousel3Component,
    MediServiceComponent,
    MediteamComponent,
    FooterComponent,
    SpecialtiesComponent,
    TopBarMenuComponent,
    CardEspeciltiesComponent,
    HistoryComponent,
    ContactComponent,
    GalleryComponent,
    ServiceImageComponent,
    ServiceMedicineComponent,
    ServiceVaccinesComponent,
    LaboratorioComponent,
    EmergyComponent,
    SueroterapiaComponent,
    PromosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
