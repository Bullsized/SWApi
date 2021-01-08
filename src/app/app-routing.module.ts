import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {StarshipsComponent} from './starships/starships.component';

const routes: Routes = [
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'starships', component: StarshipsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
