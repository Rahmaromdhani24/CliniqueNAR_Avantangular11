import { Component ,OnInit} from '@angular/core';
import { AdminMedicalService } from '../../Services/services/Admin Medical/admin-medical.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-secretaire',
  templateUrl: './home-secretaire.component.html',
  styleUrl: './home-secretaire.component.css'
})
export class HomeSecretaireComponent  implements OnInit {
 
  admin : any ; 
  adminConcecte : any ; 
  nomPrenomAdmin : string="";

  public constructor(private service : AdminMedicalService , private router : Router , private route : ActivatedRoute) { }
  ngOnInit() {
  
    let idAdminString: string | null = localStorage.getItem("idAdmin:");
    let idAdminDigital: number = idAdminString ? parseInt(idAdminString) : 0;
    this.service.getAdminMedical(idAdminDigital).subscribe(data=>{
    this.admin=data;
    console.log( "Admin Connecte  ", this.admin.nom+" "+this.admin.prenom);
    this.nomPrenomAdmin = localStorage.getItem('AdminConnecte') || ""; 

  });
  }


  getAdminMedicalConnecte(){
    let idAdminString: string | null = localStorage.getItem("idAdmin:");
    let idAdminDigital: number = idAdminString ? parseInt(idAdminString) : 0;
    this.service.getAdminMedical(idAdminDigital).subscribe(data=>{
    this.admin=data;
    console.log( "Admin Connecte  ", this.admin.nom+" "+this.admin.prenom);
    this.nomPrenomAdmin = localStorage.getItem('AdminConnecte') || ""; 

  });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
    /*localStorage.removeItem('Username:');
    localStorage.removeItem('Role:');
    localStorage.removeItem('Email');
    localStorage.removeItem('idAdmin');
    localStorage.removeItem('token');
    this.service.islogin = false;
    this.router.navigate(['']);
    window.localStorage.clear();*/
      //location.reload();
  }
}
