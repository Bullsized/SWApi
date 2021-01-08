import {Component, OnInit} from '@angular/core';
import {SwApiService} from '../../sw-api.service';

@Component({
    selector: 'app-show-starships',
    templateUrl: './show-starships.component.html',
    styleUrls: ['./show-starships.component.css']
})
export class ShowStarshipsComponent implements OnInit {

    constructor(
        private service: SwApiService
    ) {
    }

    StarshipsList: any = [];

    ngOnInit(): void {
        this.refreshStarshipsList();
    }

    // tslint:disable-next-line:typedef
    refreshStarshipsList() {
        this.service.getStarshipsList().subscribe(
            data => {
                // intentionally leaving a console.log with the full data, not just the starships:
                console.log(data);

                this.StarshipsList = data;
                // @ts-ignore
                document.getElementById('swapi-is-down').classList.remove('d-block');
            },
            error => {
                // @ts-ignore
                document.getElementById('swapi-is-down').classList.remove('d-none');
            }
        );
    }
}
