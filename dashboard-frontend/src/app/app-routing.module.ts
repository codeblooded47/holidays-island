import { OffersTableComponent } from './offers-table/offers-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfferListComponent } from './dashboard/offer-list/offer-list.component';
import { CountriesComponent } from './dashboard/countries/countries.component';
import { MealsComponent } from './dashboard/meals/meals.component';
import { InclusionsComponent } from './dashboard/inclusions/inclusions.component';
import { AdminSettingsComponent } from './dashboard/admin-settings/admin-settings.component';
import { HotelsComponent } from './dashboard/hotels/hotels.component';
import { RoomsComponent } from './dashboard/rooms/rooms.component';
import { EditPackageComponent } from './dashboard/edit-package/edit-package.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'offers/:id', component: OffersTableComponent },
  { path: 'offers/:download/:id', component: OffersTableComponent },
  { path: 'edit-package/:id', component: EditPackageComponent },

  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: OfferListComponent,
      },
      {
        path: 'hotels',
        component: HotelsComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'countries',
        component: CountriesComponent,
      },
      {
        path: 'meals',
        component: MealsComponent,
      },
      {
        path: 'inclusions',
        component: InclusionsComponent,
      },
      {
        path: 'admin-settings',
        component: AdminSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
