import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

//  constructor(public http: HttpClient) {
//    console.log('Hello UserServiceProvider Provider');
//  }
     constructor(
      private http: HttpClient
      ) {}

      getUsers() {
        //return this.http.get('https://randomuser.me/api/?results=25');
         return this.http.get('https://zendsitio.000webhostapp.com/historial/historialmovil');
        //console.log("PUTA QP2");
    // return this.http.get('http://localhost/Mohamed-the-lazy/public/historial/historialmovil');
      }

}
