import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cookieService: CookieService, private router: Router, private translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang(navigator.language);
    if (!this.cookieService.get('token')) {
      this.router.navigate(['/login']);
      return;
    }
  }

}
