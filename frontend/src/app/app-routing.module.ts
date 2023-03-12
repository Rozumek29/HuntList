import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '', component: LayoutComponent, children: [
      {path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}
    ]},
  {path: 'login', component: LoginComponent, pathMatch: 'full', title: 'Sign In'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
