import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { PageNotFoundComponent } from './Home/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { AllDoctorsComponent } from './Home/all-doctors/all-doctors.component';
import { ContactUSComponent } from './Home/contact-us/contact-us.component';
import { ServiceComponent } from './Home/service/service.component';
import { RendevousComponent } from './Home/rendevous/rendevous.component';
import { MedecinComponent } from './Partie Medecin/Medecin/medecin.component';
import { PatientComponent } from './Partie Patient/Patient/patient.component';
import { LoginSecretaireComponent } from './AdminMedical/login-secretaire/login-secretaire.component';
import { HomeSecretaireComponent } from './AdminMedical/home-secretaire/home-secretaire.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './Services/Interceptor/auth.interceptor';
import { authGuard } from './Services/Guard/auth.guard';
import { provideHttpClient , withFetch } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    AllDoctorsComponent,
    ContactUSComponent,
    ServiceComponent,
    RendevousComponent,
    MedecinComponent,
    PatientComponent,
    LoginSecretaireComponent,
    HomeSecretaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [
    provideHttpClient(withFetch()), provideClientHydration(),    {
      provide: HTTP_INTERCEPTORS,// to which injection token do we want to associate our class with
      useClass: AuthInterceptor,
      multi: true //multiple http interceptor orginized in a chain
    } ,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
