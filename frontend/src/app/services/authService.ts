import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router){}

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/auth/login', {email: email, password: password}).pipe(
      tap((response: any) => {
        this.cookieService.set('token', response.token);
      })
    )
  }

  register(email: string, password: string, name: string) {
    return this.http.post('http://localhost:3000/auth/register', {email: email, password: password, name: name}).pipe();
  }
}
