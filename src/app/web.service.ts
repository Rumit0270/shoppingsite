import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  sendData(formData) {
      //let url = "reqres.in/api/users";
      console.log(formData);
      let url = "https://angulardemo-acb63.firebaseio.com/data.json";
      return this.http.post(url, formData);
  }


  getData() {
     let url = "https://angulardemo-acb63.firebaseio.com/data.json"
     return this.http.get(url);
  }
}
