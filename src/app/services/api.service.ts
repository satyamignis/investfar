import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://dev-iis.com/projects/investfar/public/api/';

  constructor(private http: HttpClient) {

  }



    // POST Method
	  postData(apiSubUri,setPram){
        return this.http.post(this.apiURL+apiSubUri,setPram);
    }
    
    // GET Method
    /* getData(){
        return this.http.get();
    }*/




}


