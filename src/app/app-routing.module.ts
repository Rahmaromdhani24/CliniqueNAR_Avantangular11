import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { PageNotFoundComponent } from './Home/page-not-found/page-not-found.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { AllDoctorsComponent } from './Home/all-doctors/all-doctors.component';
import { ContactUSComponent } from './Home/contact-us/contact-us.component';
import { ServiceComponent } from './Home/service/service.component';
import { RendevousComponent } from './Home/rendevous/rendevous.component';
import { MedecinComponent } from './Partie Medecin/Medecin/medecin.component';
import { PatientComponent } from './Partie Patient/Patient/patient.component';
import { LoginSecretaireComponent } from './AdminMedical/login-secretaire/login-secretaire.component';
import { LoginAdminDigitalComponent } from './Admin_Digital/login-admin-digital/login-admin-digital.component';



import { HttpClientModule} from'@angular/common/http';
import { HomeAdminDigitalComponent } from './Admin_Digital/home-admin-digital/home-admin-digital.component';
import { authGuard } from './Services/Guard/auth.guard';
import { HomeSecretaireComponent } from './AdminMedical/home-secretaire/home-secretaire.component';
const routes: Routes = [
  {path:"" , component:HomePageComponent },
  {path:"accueil" , component:HomePageComponent },
  {path:"aboutUs" , component:AboutUsComponent },
  {path:"medecin" , component:AllDoctorsComponent },
  {path:"contact" , component:ContactUSComponent },
  {path:"service" , component:ServiceComponent },
  {path:"rendevous" , component:RendevousComponent },
  {path:"admin" , component:LoginAdminDigitalComponent },
  {path:"secretaire" , component:LoginSecretaireComponent },
  {path:"p_medecin" , component:MedecinComponent },
  {path:"p_patient" , component:PatientComponent },
  {path:"homeAdminMedical" , component:HomeSecretaireComponent},
  {path:"" , redirectTo:"/accueil",pathMatch:'full'},
  {path:"**" , component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { onSameUrlNavigation :'reload'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
