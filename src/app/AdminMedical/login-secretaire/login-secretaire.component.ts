import { Component } from '@angular/core';
import { AdminMedicalService } from '../../Services/services/Admin Medical/admin-medical.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-login-secretaire',
  templateUrl: './login-secretaire.component.html',
  styleUrl: './login-secretaire.component.css'
})
export class LoginSecretaireComponent {

  admin : any
  result : any
  public constructor(private service : AdminMedicalService , private router : Router , private route : ActivatedRoute) { }
  password: string = '';
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  ngOnInit() {
    this.router.navigate(['/secretaire'] , {relativeTo: this.route} );
    this.service.islogin = false;
    this.service.admin = false;
  
}
    login(f:NgForm){ 
    this.service.login(f.value.username, f.value.password).subscribe(data=>{
      this.admin = data;
     this.service.getAdminMedical(this.admin.id).subscribe(data=>{
      this.result = data;
      console.log(this.result);
      localStorage.setItem("Username:", this.result.username);//kn name
      localStorage.setItem("Role:", this.result.role);
      localStorage.setItem("Email", this.result.email);
      localStorage.setItem("idAdmin", this.result.id);
      localStorage.setItem('AdminConnecte', this.result.nom+" "+this.result.prenom);  
      let accessToken = "Bearer" + this.admin.accessToken;
      localStorage.setItem("token", accessToken);
      this.service.islogin = true;
      this.service.admin = true;
      if(this.result.role==="Admin Medical Manager" )
      { 
        this.router.navigate(['/homeAdminMedical']);
      }
   
    });  });
  }
  }
    