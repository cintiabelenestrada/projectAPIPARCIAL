import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasPopuService {
  constructor(private _http:HttpClient) {}
    public getObtenerRecetas(): Observable<any> { 
        const httpOptions = {
            headers : new HttpHeaders({
                'X-RapidAPI-Key' : 'b53b4ab976msh8c7cbb3fae1a17dp173399jsn8f8f1f6ecb8c',
                'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com',
            })
        }
        return this._http.get('https://recipe-book2.p.rapidapi.com/recipes-popular', httpOptions);
    }
}