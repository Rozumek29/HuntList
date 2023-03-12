import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../services/authService";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('container') container: ElementRef;
  formModel: Partial<any>;
  formRegisterModel: Partial<any>;
  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router) {
    this.formModel = {email: "", password: ""};
    this.formRegisterModel = {email: "", password: "", confirmPassword: "" ,name: ""}
    if (this.cookieService.get('token')) {
      this.router.navigate(['/']);
    }
  }

  signInMode() {
    this.container.nativeElement.classList.remove('sign-up-mode')
  }

  signUpMode() {
    this.container.nativeElement.classList.add('sign-up-mode')
  }

  signInBtn() {
    if (this.formModel['email'].length === 0 || this.formModel['password'].length === 0) {
      return;
    }
    this.authService.login(this.formModel['email'], this.formModel['password']).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  singUpBtn() {
    if (this.formRegisterModel['email'].length === 0 || this.formRegisterModel['password'].length === 0 || this.formRegisterModel['confirmPassword'].length === 0 || this.formRegisterModel['name'].length === 0) {
      return;
    }
    if (this.formRegisterModel['password'] !== this.formRegisterModel['confirmPassword']) {
      return;
    }
    this.authService.register(this.formRegisterModel['email'], this.formRegisterModel['password'], this.formRegisterModel['name']).subscribe({
      next: () => {
        this.signInMode();
      }
    });
  }

}
