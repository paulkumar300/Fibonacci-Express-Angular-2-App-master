import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
const API_URL = "http://localhost:3000";
@Injectable()
export class AppService {

  constructor(private http: Http) { }

  /**
   * Get Fibonacci Series
   * @param num 
   */
  getFibonacciSeries(num) {
    return this.http.get(API_URL+'/fibonacci/'+num)
      .map(res => res.json())
      .map((res) =>{
          return res;
      });
  }
}
