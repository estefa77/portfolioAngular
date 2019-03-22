import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/producto-info.interface';
import { Promise, reject } from 'q';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  static searchProduct(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  static buscarProducto(): any {
    throw new Error("Method not implemented.");
  }

  loading = true;
  productos: Product[] = [];
  productosFiltrado: Product[] = [];

  constructor(private http: HttpClient) { 
    this.CargarProducto();
  }

  private CargarProducto(){

    return new Promise( ( resolve, reject ) => {
      
      this.http.get('https://angularportfolio-1d6f5.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: Product[]) => {
        this.productos = resp;
        this.loading = false;
        resolve();

      });
    });


  }

  getProducto(id: string) {
      return this.http.get(`https://angularportfolio-1d6f5.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ){

    if ( this.productos.length === 0){
    //load producto
    this.CargarProducto().then( () => {

      this.filtrarProductos( termino );
      
    });
    } else {
      this.filtrarProductos( termino);

    }

  //  this.productosFiltrado = this.productos.filter( producto => {
  //     return true;
  //   });

  //   console.log(this.productosFiltrado);
  }
    
  private filtrarProductos(termino: string){
    console.log(this.productos);
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      
      const titleLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || titleLower.indexOf( termino) >= 0){
        this.productosFiltrado.push(prod);
      }
    })

  }


}
