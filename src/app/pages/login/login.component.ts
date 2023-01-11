import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "admin";
  password:string = "admin";

  send(){
    console.log(this.email, this.password)
    if (this.email == "admin" && this.password == "admin") {
      alert("GRACIAS POR INICIAR SESION")
    } else{
      alert("USUARIO O CONTRASEÑA INCORRECTOS, PORFAVOR INTENTELO NUEVAMENTE")
    }
  }
}
