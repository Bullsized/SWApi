import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SwApiService {
    readonly APIUrl = 'https://swapi.dev/api/';

    constructor(private http: HttpClient) {
    }

    getVehiclesList(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + 'vehicles');
    }

    getStarshipsList(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + 'starships');
    }
}
