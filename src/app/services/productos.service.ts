import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/producto-info.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  productos: Product[] = [];

  constructor(private http: HttpClient) { 
    this.CargarProducto();
  }

  private CargarProducto(){
    this.http.get('https://angularportfolio-1d6f5.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Product []) => {
      this.productos = resp;
      this.loading = false;
    });
  }

    getProducto(id: string) {
        return this.http.get(`https://angularportfolio-1d6f5.firebaseio.com/productos/${ id }.json`);
      // return this.http.get('https://angularportfolio-1d6f5.firebaseio.com/productos/prod-4.json');
    }

    

}
