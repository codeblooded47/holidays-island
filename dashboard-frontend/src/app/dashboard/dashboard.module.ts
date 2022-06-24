import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list/offer-list.component';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { MealsComponent } from './meals/meals.component';
import { InclusionsComponent } from './inclusions/inclusions.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HotelsComponent } from './hotels/hotels.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPackageComponent } from './edit-package/edit-package.component';

@NgModule({
  declarations: [
    OfferListComponent,
    CountriesComponent,
    MealsComponent,
    InclusionsComponent,
    AdminSettingsComponent,
    HotelsComponent,
    RoomsComponent,
    EditPackageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [OfferListComponent],
})
export class DashboardModule {}
