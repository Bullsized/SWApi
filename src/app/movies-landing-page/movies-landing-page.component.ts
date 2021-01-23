import {Component, OnInit} from '@angular/core';
import {SwApiService} from '../sw-api.service';

@Component({
    selector: 'app-movies-landing-page',
    templateUrl: './movies-landing-page.component.html',
    styleUrls: ['./movies-landing-page.component.css']
})
export class MoviesLandingPageComponent implements OnInit {
    public moviesList: any = [];
    public showError = false;

    constructor(
        private service: SwApiService
    ) {
    }

    ngOnInit(): void {
        this.service.getAllMovies().subscribe(
            data => {
                // intentionally leaving a console.log with the full data for testing purposes:
                console.log(data);

                this.moviesList = data;
            },
            error => {
                this.showError = true;
            }
        );
    }
}
