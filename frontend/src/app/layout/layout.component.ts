import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {LayoutRoutes} from "./layoutRoutes";
import {Router, Routes} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('shrink_btn') shrink_btn: ElementRef;
  @ViewChildren('sidebarLinks') sidebarLinks: QueryList<ElementRef>;

  links: any = LayoutRoutes;
  mainLinks: any = this.links.filter((link: any) => link.data.list === 'main');
  settingsLinks: any = this.links.filter((link: any) => link.data.list === 'settings');

  constructor(private cookieService: CookieService, private router: Router) {
    if (!this.cookieService.get('token')) {
      this.router.navigate(['/login']);
      return;
    }
  }

  shrinkClick() {
    this.container.nativeElement.classList.toggle('shrink');
    this.shrink_btn.nativeElement.classList.add('hovered');

    setTimeout(() => {
      this.shrink_btn.nativeElement.classList.remove('hovered');
    }, 500)
  }

  ngOnInit(): void {

  }

  activeIndex: number = 0;
  topPosition: number = 0;

  mouseOverEvent(e : any) {
    let tooltip = e
    console.log(tooltip)
  }

}
