import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/producto-info.interfaec';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  productos : Product[] = [];

  constructor(private http: HttpClient) { 
    this.CargarProducto();
  }

  private CargarProducto(){
    this.http.get('https://angularportfolio-1d6f5.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Product []) => {

      console.log(resp);
      this.productos = resp;
      this.loading = false;
      // setTimeout(() => {
      //   this.loading = false;  
      // }, 2000);
      
    });
  }
}
