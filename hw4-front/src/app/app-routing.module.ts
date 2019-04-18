import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {WeatherComponent} from './weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo: '/weather', pathMatch: 'full'},
  {path: 'weather', component: WeatherComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
