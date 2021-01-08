import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {ShowVehiclesComponent} from './vehicles/show-vehicles/show-vehicles.component';
import {EditVehiclesComponent} from './vehicles/edit-vehicles/edit-vehicles.component';
import {StarshipsComponent} from './starships/starships.component';
import {ShowStarshipsComponent} from './starships/show-starships/show-starships.component';
import {EditStarshipsComponent} from './starships/edit-starships/edit-starships.component';
import {SwApiService} from './sw-api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        VehiclesComponent,
        ShowVehiclesComponent,
        EditVehiclesComponent,
        StarshipsComponent,
        ShowStarshipsComponent,
        EditStarshipsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    providers: [SwApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
