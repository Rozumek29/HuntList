import {Routes} from "@angular/router";
import {DashboardComponent} from "../pages/dashboard/dashboard.component";
import {ListsComponent} from "../pages/lists/lists.component";
import {ProductsComponent} from "../pages/products/products.component";
import {SettingsComponent} from "../pages/settings/settings.component";
import {ShoppingPartnersComponent} from "../pages/shopping-partners/shopping-partners.component";

const PREFIX = 'HUNTLIST | '

export const LayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full', title: PREFIX+'Dashboard', data: {icon: 'bx bx-bar-chart-alt-2', activeIcon: 'bx bxs-bar-chart-alt-2', title: 'dashboard', list: 'main'}},
  {path: 'lists', component: ListsComponent, pathMatch: 'full', title: PREFIX+'Lists', data: {icon: 'bx bx-shopping-bag', activeIcon: 'bx bxs-shopping-bag', title: 'lists', list: 'main'}},
  {path: 'products', component: ProductsComponent, pathMatch: 'full', title: PREFIX+'Products', data: {icon: 'bx bx-cheese', activeIcon: 'bx bxs-cheese', title: 'products', list: 'main'}},
  {path: 'settings', component: SettingsComponent, pathMatch: 'full', title: PREFIX+'Products', data: {icon: 'bx bx-cog', activeIcon: 'bx bxs-cog', title: 'settings', list: 'settings'}},
  {path: 'shopping-partners', component: ShoppingPartnersComponent, pathMatch: 'full', title: PREFIX+'Products', data: {icon: 'bx bx-home-alt-2', activeIcon: 'bx bxs-home-alt-2', title: 'shoppingPartners', list: 'settings'}},
]
