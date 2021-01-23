import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SwApiService} from './sw-api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MoviesLandingPageComponent} from './movies-landing-page/movies-landing-page.component';
import {MoviesCardComponent} from './movies-card/movies-card.component';
import {GetImdbLinkPipe} from './get-imdb-link.pipe';
import {RemoveNewLinesPipe} from './remove-new-lines.pipe';

@NgModule({
    declarations: [
        AppComponent,
        MoviesLandingPageComponent,
        MoviesCardComponent,
        GetImdbLinkPipe,
        RemoveNewLinesPipe
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
