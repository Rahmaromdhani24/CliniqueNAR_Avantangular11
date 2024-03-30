import { Component } from '@angular/core';
import { AdminDigitalService } from '../../Services/services/Admin Digital/admin-digital.service';
import { Router } from '@angular/router';
import { FormsModule,NgForm,NgModel } from '@angular/forms';
import { User } from '../../Modeles/user';
@Component({
  selector: 'app-login-admin-digital',
  templateUrl: './login-admin-digital.component.html',
  styleUrl: './login-admin-digital.component.css'
})
export class LoginAdminDigitalComponent {

  admin : any
  public constructor(private service : AdminDigitalService , private router : Router ) { }

  ngOnInit() {
    this.service.islogin = false;
    this.service.admin = false;
  

}
    login(f:NgForm){ 
    this.service.login(f.value.nom, f.value.pwd).subscribe(data=>{
    this.admin = data;
     console.log(this.admin)
      localStorage.setItem("nameAdmin", this.admin.username);//kn name
      localStorage.setItem("role", this.admin.role);
      localStorage.setItem("emailAdmin", this.admin.email);
      localStorage.setItem("idAdmin", this.admin.id);
      console.log(this.admin);
      let accessToken = "Bearer " + this.admin.accessToken;
      localStorage.setItem("token", accessToken);
      this.service.islogin = true;
      this.service.admin = true;
      if(this.admin.role==="Digital Manager")
     { this.router.navigate(['/home']);}
   
    });
  }
  }
    