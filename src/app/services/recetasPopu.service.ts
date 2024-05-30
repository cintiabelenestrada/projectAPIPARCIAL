import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
                'X-RapidAPI-Key' : 'bab76fe0d0msh81e9d1b3f602fc5p18588bjsn1d91f66cc06a',
                'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com',
            })
        }
        return this._http.get('https://recipe-book2.p.rapidapi.com/recipes-popular', httpOptions);
    }
    public getDetallesRecetas(path:string): Observable<any> { 
      const httpOptions = {
          headers : new HttpHeaders({
              'X-RapidAPI-Key' : 'bab76fe0d0msh81e9d1b3f602fc5p18588bjsn1d91f66cc06a',
              'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com',
          })
      }
      // return this._http.get(`https://recipe-book2.p.rapidapi.com/recipe-details?path=${path}`, httpOptions);
      return this._http.get('https://recipe-book2.p.rapidapi.com/recipe-details?path=' + path, httpOptions);
  }
}