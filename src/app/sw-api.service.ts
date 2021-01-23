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

    getAllMovies(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + 'films');
    }
}
