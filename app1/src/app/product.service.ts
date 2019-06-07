import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import { identifierModuleUrl } from "@angular/compiler";

@Injectable()
export class ProductService {
  http: Http;

  url = 'http://localhost:3000/product';

  constructor(http: Http) {
    this.http = http;
  }

  get() {
    return this.http.get(this.url);
  }

  // post(name: string, price: number, qty: number) {
  //   const body = {
      
  //     name: name,
  //     price: price,
  //     qty:qty
  //   };

  //   const headers = new Headers({'Content-type': 'application/json'});
  //   const requestOptions = new RequestOptions({headers: headers});

  //   return this.http.post(this.url, body, requestOptions);
  // }
}