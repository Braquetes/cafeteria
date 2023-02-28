import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URL = 'http://127.0.0.1/brujula';

  constructor(private http: HttpClient) { }

  getProductos(id: number){
    return this.http.get(`${this.URL}/admin/productos/getAll.php?idArea=${id}`)
  }

}
