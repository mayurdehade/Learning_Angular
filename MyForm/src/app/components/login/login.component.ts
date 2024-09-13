import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  user:string = '';
  pass:string = '';
  login(form:any) {
      if(form.value.username === 'admin' && form.value.password === '123') {
          this.router.navigate(['home']);
      }
      else {
          alert('Invalid Username or Password');
          this.router.navigate(['/']);
      }
  }

}
