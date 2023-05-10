import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { TechniqueComponent } from './pages/technique/technique.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PresentationComponent,
    ParcoursComponent,
    TechniqueComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
