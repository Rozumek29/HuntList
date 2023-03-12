import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {DashboardComponent} from "../pages/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {LayoutRoutes} from "./layoutRoutes";
import {ListsComponent} from "../pages/lists/lists.component";
import {TranslateModule} from "@ngx-translate/core";
import {ProductsComponent} from "../pages/products/products.component";
import {SettingsComponent} from "../pages/settings/settings.component";
import {ShoppingPartnersComponent} from "../pages/shopping-partners/shopping-partners.component";



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ListsComponent,
    ProductsComponent,
    SettingsComponent,
    ShoppingPartnersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    TranslateModule,
  ]
})
export class LayoutModule { }
