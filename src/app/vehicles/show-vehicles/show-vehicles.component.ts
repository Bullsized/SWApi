import {Component, OnInit} from '@angular/core';
import {SwApiService} from '../../sw-api.service';

@Component({
    selector: 'app-show-vehicles',
    templateUrl: './show-vehicles.component.html',
    styleUrls: ['./show-vehicles.component.css']
})
export class ShowVehiclesComponent implements OnInit {

    constructor(
        private service: SwApiService
    ) {
    }

    VehiclesList: any = [];

    ngOnInit(): void {
        this.refreshVehiclesList();
    }

    refreshVehiclesList() {
        this.service.getVehiclesList().subscribe(
            data => {
                // intentionally leaving a console.log with the full data, not just the vehicles:
                console.log(data);

                this.VehiclesList = data;
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
